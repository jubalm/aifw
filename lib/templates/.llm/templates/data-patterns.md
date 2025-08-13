# Data Patterns & Implementation Guide

## Database Schema Patterns

### Prisma Schema Structure
**File**: `prisma/schema.prisma`
**Naming**: PascalCase for models, camelCase for fields
**Relations**: Explicit relation fields and references

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // or "mysql", "sqlite", etc.
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String
  role      Role     @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relations
  posts     Post[]
  comments  Comment[]
  profile   Profile?

  @@map("users")
}

model Profile {
  id       String  @id @default(cuid())
  bio      String?
  avatar   String?
  website  String?
  
  // Foreign key
  userId   String  @unique
  user     User    @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("profiles")
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Foreign key
  authorId  String
  author    User     @relation(fields: [authorId], references: [id], onDelete: Cascade)
  
  // Relations
  comments  Comment[]
  tags      Tag[]

  @@map("posts")
}

model Comment {
  id        String   @id @default(cuid())
  content   String
  createdAt DateTime @default(now())

  // Foreign keys
  postId    String
  post      Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  authorId  String
  author    User     @relation(fields: [authorId], references: [id], onDelete: Cascade)

  @@map("comments")
}

model Tag {
  id    String @id @default(cuid())
  name  String @unique
  posts Post[]

  @@map("tags")
}

enum Role {
  USER
  ADMIN
  MODERATOR
}
```

### Migration Patterns
```bash
# Create and apply migration
npx prisma migrate dev --name add_user_profiles

# Reset database (development)
npx prisma migrate reset

# Deploy migrations (production)
npx prisma migrate deploy

# Generate Prisma client after schema changes
npx prisma generate
```

## Query Patterns

### Basic CRUD Operations
```typescript
// src/lib/queries/users.ts
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

// Create
export const createUser = async (data: {
  email: string
  name: string
  password: string
}) => {
  return prisma.user.create({
    data,
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true
    }
  })
}

// Read (with relations)
export const getUserWithPosts = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
    include: {
      posts: {
        where: { published: true },
        orderBy: { createdAt: 'desc' },
        take: 10
      },
      profile: true,
      _count: {
        select: { posts: true, comments: true }
      }
    }
  })
}

// Update
export const updateUser = async (
  id: string,
  data: Prisma.UserUpdateInput
) => {
  return prisma.user.update({
    where: { id },
    data,
    select: {
      id: true,
      email: true,
      name: true,
      updatedAt: true
    }
  })
}

// Delete (with cascade handling)
export const deleteUser = async (id: string) => {
  // Using transaction for related data cleanup
  return prisma.$transaction([
    prisma.comment.deleteMany({ where: { authorId: id } }),
    prisma.post.deleteMany({ where: { authorId: id } }),
    prisma.user.delete({ where: { id } })
  ])
}
```

### Advanced Query Patterns
```typescript
// Complex filtering and pagination
export const getUsersWithFilters = async ({
  search,
  role,
  page = 1,
  limit = 10
}: {
  search?: string
  role?: Role
  page?: number
  limit?: number
}) => {
  const skip = (page - 1) * limit

  const where: Prisma.UserWhereInput = {
    ...(search && {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } }
      ]
    }),
    ...(role && { role })
  }

  const [users, total] = await prisma.$transaction([
    prisma.user.findMany({
      where,
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        _count: {
          select: { posts: true }
        }
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit
    }),
    prisma.user.count({ where })
  ])

  return {
    data: users,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  }
}

// Aggregation queries
export const getPostsStats = async (authorId?: string) => {
  return prisma.post.aggregate({
    where: authorId ? { authorId } : {},
    _count: { id: true },
    _avg: { createdAt: true }
  })
}

// Raw SQL for complex queries
export const getTopAuthors = async (limit = 5) => {
  return prisma.$queryRaw<Array<{
    id: string
    name: string
    email: string
    post_count: bigint
  }>>`
    SELECT 
      u.id,
      u.name,
      u.email,
      COUNT(p.id) as post_count
    FROM users u
    LEFT JOIN posts p ON u.id = p."authorId"
    WHERE p.published = true
    GROUP BY u.id, u.name, u.email
    ORDER BY post_count DESC
    LIMIT ${limit}
  `
}
```

## Validation Patterns

### Zod Schema Validation
```typescript
// src/lib/validations/user.ts
import { z } from 'zod'

export const createUserSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain uppercase, lowercase, and number'),
})

export const updateUserSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
}).refine(data => Object.keys(data).length > 0, {
  message: 'At least one field must be provided'
})

export const userQuerySchema = z.object({
  search: z.string().optional(),
  role: z.enum(['USER', 'ADMIN', 'MODERATOR']).optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10)
})

export type CreateUserInput = z.infer<typeof createUserSchema>
export type UpdateUserInput = z.infer<typeof updateUserSchema>
export type UserQueryInput = z.infer<typeof userQuerySchema>
```

### Database Constraint Validation
```typescript
// src/lib/validations/database.ts
import { Prisma } from '@prisma/client'

export const handleDatabaseError = (error: any) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002': // Unique constraint violation
        const field = error.meta?.target as string[]
        throw new ValidationError(`${field?.[0] || 'Field'} already exists`)
      
      case 'P2003': // Foreign key constraint violation
        throw new ValidationError('Referenced record does not exist')
      
      case 'P2025': // Record not found
        throw new NotFoundError('Record not found')
      
      default:
        throw new AppError('Database operation failed', 500)
    }
  }
  
  throw error
}

// Usage in service
export const createUserSafely = async (data: CreateUserInput) => {
  try {
    return await createUser(data)
  } catch (error) {
    throw handleDatabaseError(error)
  }
}
```

## State Management Patterns

### Zustand Store Pattern
```typescript
// src/store/userStore.ts
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface User {
  id: string
  email: string
  name: string
  role: string
}

interface UserState {
  user: User | null
  users: User[]
  loading: boolean
  error: string | null
  
  // Actions
  setUser: (user: User) => void
  setUsers: (users: User[]) => void
  addUser: (user: User) => void
  updateUser: (id: string, updates: Partial<User>) => void
  removeUser: (id: string) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  clearError: () => void
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        users: [],
        loading: false,
        error: null,

        setUser: (user) => set({ user }),
        
        setUsers: (users) => set({ users }),
        
        addUser: (user) => set((state) => ({
          users: [...state.users, user]
        })),
        
        updateUser: (id, updates) => set((state) => ({
          users: state.users.map(user => 
            user.id === id ? { ...user, ...updates } : user
          ),
          user: state.user?.id === id ? { ...state.user, ...updates } : state.user
        })),
        
        removeUser: (id) => set((state) => ({
          users: state.users.filter(user => user.id !== id),
          user: state.user?.id === id ? null : state.user
        })),
        
        setLoading: (loading) => set({ loading }),
        
        setError: (error) => set({ error }),
        
        clearError: () => set({ error: null })
      }),
      {
        name: 'user-store',
        partialize: (state) => ({
          user: state.user // Only persist current user
        })
      }
    )
  )
)
```

### React Query (TanStack Query) Patterns
```typescript
// src/hooks/useUsers.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { userApi } from '@/lib/api/users'
import { useUserStore } from '@/store/userStore'

export const useUsers = (filters?: UserQueryInput) => {
  const { setError } = useUserStore()
  
  return useQuery({
    queryKey: ['users', filters],
    queryFn: () => userApi.getUsers(filters),
    onError: (error: any) => {
      setError(error.message)
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  })
}

export const useUser = (id: string) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => userApi.getUser(id),
    enabled: !!id
  })
}

export const useCreateUser = () => {
  const queryClient = useQueryClient()
  const { addUser, setError } = useUserStore()
  
  return useMutation({
    mutationFn: userApi.createUser,
    onSuccess: (newUser) => {
      // Update cache
      queryClient.invalidateQueries({ queryKey: ['users'] })
      
      // Update store
      addUser(newUser.data)
      
      // Optimistic update
      queryClient.setQueryData(['user', newUser.data.id], newUser.data)
    },
    onError: (error: any) => {
      setError(error.message)
    }
  })
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient()
  const { updateUser, setError } = useUserStore()
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateUserInput }) =>
      userApi.updateUser(id, data),
    onSuccess: (updatedUser, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      queryClient.setQueryData(['user', id], updatedUser.data)
      updateUser(id, updatedUser.data)
    },
    onError: (error: any) => {
      setError(error.message)
    }
  })
}
```

### Local Storage Patterns
```typescript
// src/hooks/useLocalStorage.ts
import { useState, useEffect } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  // Get value from localStorage or use initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Update localStorage when value changes
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}

// Usage example
export const useUserPreferences = () => {
  const [preferences, setPreferences] = useLocalStorage('userPreferences', {
    theme: 'light',
    language: 'en',
    notificationsEnabled: true
  })

  const updatePreference = <K extends keyof typeof preferences>(
    key: K,
    value: typeof preferences[K]
  ) => {
    setPreferences(prev => ({ ...prev, [key]: value }))
  }

  return { preferences, updatePreference }
}
```

## Caching Patterns

### Redis Caching
```typescript
// src/lib/cache.ts
import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL!)

export class CacheService {
  async get<T>(key: string): Promise<T | null> {
    try {
      const value = await redis.get(key)
      return value ? JSON.parse(value) : null
    } catch (error) {
      console.error('Cache get error:', error)
      return null
    }
  }

  async set(key: string, value: any, ttl = 3600): Promise<void> {
    try {
      await redis.setex(key, ttl, JSON.stringify(value))
    } catch (error) {
      console.error('Cache set error:', error)
    }
  }

  async del(key: string): Promise<void> {
    try {
      await redis.del(key)
    } catch (error) {
      console.error('Cache delete error:', error)
    }
  }

  async invalidatePattern(pattern: string): Promise<void> {
    try {
      const keys = await redis.keys(pattern)
      if (keys.length > 0) {
        await redis.del(...keys)
      }
    } catch (error) {
      console.error('Cache invalidation error:', error)
    }
  }
}

export const cache = new CacheService()

// Usage in service
export const getCachedUser = async (id: string) => {
  const cacheKey = `user:${id}`
  
  // Try cache first
  let user = await cache.get(cacheKey)
  
  if (!user) {
    // Fetch from database
    user = await prisma.user.findUnique({
      where: { id },
      select: { id: true, email: true, name: true }
    })
    
    // Cache for 1 hour
    if (user) {
      await cache.set(cacheKey, user, 3600)
    }
  }
  
  return user
}
```

## File Upload Patterns

### Multer + AWS S3
```typescript
// src/lib/upload.ts
import multer from 'multer'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { v4 as uuidv4 } from 'uuid'
import path from 'path'

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
})

// Configure multer for memory storage
export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow only images
    if (file.mimetype.startsWith('image/')) {
      cb(null, true)
    } else {
      cb(new Error('Only image files are allowed'))
    }
  }
})

export const uploadToS3 = async (
  file: Express.Multer.File,
  folder: string = 'uploads'
): Promise<string> => {
  const key = `${folder}/${uuidv4()}${path.extname(file.originalname)}`
  
  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME!,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: 'public-read'
  })

  await s3Client.send(command)
  
  return `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`
}

// Usage in route
export const uploadUserAvatar = async (req: Request, res: Response) => {
  try {
    const file = req.file
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' })
    }

    const imageUrl = await uploadToS3(file, 'avatars')
    
    // Update user profile
    await prisma.profile.update({
      where: { userId: req.user.id },
      data: { avatar: imageUrl }
    })

    res.json({ data: { imageUrl } })
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' })
  }
}
```

## Implementation Checklist

### Setting Up New Data Models
1. [ ] Define Prisma schema with proper relations
2. [ ] Create and run migrations
3. [ ] Generate Prisma client
4. [ ] Create Zod validation schemas
5. [ ] Implement CRUD operations
6. [ ] Add error handling for database constraints
7. [ ] Write tests for data operations

### Adding Caching
1. [ ] Identify frequently accessed data
2. [ ] Implement cache-aside pattern
3. [ ] Set appropriate TTL values
4. [ ] Add cache invalidation logic
5. [ ] Handle cache failures gracefully
6. [ ] Monitor cache hit rates

### Implementing File Uploads
1. [ ] Configure storage solution (S3, local, etc.)
2. [ ] Add file validation (type, size limits)
3. [ ] Implement secure filename generation
4. [ ] Add progress tracking for large files
5. [ ] Handle upload failures and cleanup
6. [ ] Add virus scanning for production