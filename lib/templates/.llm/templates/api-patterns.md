# API Patterns & Implementation Guide

## API Architecture

### Route Structure
**File Pattern**: `src/routes/[version]/[resource].ts` or `pages/api/[resource].ts` (Next.js)
**Naming**: RESTful conventions (GET /users, POST /users, PUT /users/:id)
**Versioning**: [e.g., /api/v1/, /v1/, or header-based versioning]

```typescript
// src/routes/v1/users.ts (Express example)
import { Router } from 'express'
import { z } from 'zod'
import { validateRequest } from '../middleware/validation'
import { requireAuth } from '../middleware/auth'

const router = Router()

const createUserSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(2),
  }),
})

// GET /api/v1/users
router.get('/', requireAuth, async (req, res) => {
  try {
    const users = await userService.findMany({
      select: { id: true, email: true, name: true, createdAt: true }
    })
    
    res.json({
      data: users,
      meta: { total: users.length }
    })
  } catch (error) {
    next(error)
  }
})

// POST /api/v1/users
router.post('/', validateRequest(createUserSchema), async (req, res, next) => {
  try {
    const { email, password, name } = req.body
    
    const user = await userService.create({
      email,
      password: await hashPassword(password),
      name,
    })

    res.status(201).json({
      data: { 
        id: user.id, 
        email: user.email, 
        name: user.name 
      }
    })
  } catch (error) {
    next(error)
  }
})

export { router as usersRouter }
```

### Next.js API Route Pattern
```typescript
// pages/api/users/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { withAuth } from '@/lib/middleware/auth'
import { userService } from '@/lib/services/userService'

const updateUserSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
})

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  switch (req.method) {
    case 'GET':
      return getUserById(req, res, id as string)
    case 'PUT':
      return updateUser(req, res, id as string)
    case 'DELETE':
      return deleteUser(req, res, id as string)
    default:
      return res.status(405).json({ error: 'Method not allowed' })
  }
}

async function getUserById(req: NextApiRequest, res: NextApiResponse, id: string) {
  try {
    const user = await userService.findById(id)
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json({ data: user })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

export default withAuth(handler)
```

## Middleware Patterns

### Authentication Middleware
```typescript
// src/middleware/auth.ts
import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

interface AuthRequest extends Request {
  user?: { id: string; email: string }
}

export const requireAuth = async (
  req: AuthRequest, 
  res: Response, 
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')
    
    if (!token) {
      return res.status(401).json({ error: 'Authentication required' })
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET!) as any
    req.user = payload

    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
  }
}

// Optional auth - continues even if no token
export const optionalAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')
    
    if (token) {
      const payload = jwt.verify(token, process.env.JWT_SECRET!) as any
      req.user = payload
    }

    next()
  } catch (error) {
    // Continue without user
    next()
  }
}
```

### Validation Middleware
```typescript
// src/middleware/validation.ts
import { z, ZodSchema } from 'zod'
import { Request, Response, NextFunction } from 'express'

export const validateRequest = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next()
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Validation failed',
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        })
      }
      next(error)
    }
  }
}
```

### Rate Limiting Middleware
```typescript
// src/middleware/rateLimit.ts
import rateLimit from 'express-rate-limit'
import RedisStore from 'rate-limit-redis'
import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL!)

export const authLimiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args: string[]) => redis.call(...args),
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: { error: 'Too many login attempts, please try again later' },
  standardHeaders: true,
  legacyHeaders: false,
})

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
})
```

## Service Layer Patterns

### Service Class Pattern
```typescript
// src/services/userService.ts
import { prisma } from '@/lib/prisma'
import { User, Prisma } from '@prisma/client'
import bcrypt from 'bcryptjs'

export class UserService {
  async findMany(options?: {
    where?: Prisma.UserWhereInput
    select?: Prisma.UserSelect
    take?: number
    skip?: number
  }) {
    return prisma.user.findMany(options)
  }

  async findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      select: { id: true, email: true, name: true, createdAt: true }
    })
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email }
    })
  }

  async create(data: {
    email: string
    password: string
    name: string
  }) {
    const hashedPassword = await bcrypt.hash(data.password, 12)
    
    return prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
      select: { id: true, email: true, name: true }
    })
  }

  async update(id: string, data: Prisma.UserUpdateInput) {
    return prisma.user.update({
      where: { id },
      data,
      select: { id: true, email: true, name: true }
    })
  }

  async delete(id: string) {
    return prisma.user.delete({
      where: { id }
    })
  }

  async verifyPassword(plaintext: string, hashed: string) {
    return bcrypt.compare(plaintext, hashed)
  }
}

export const userService = new UserService()
```

## Error Handling Patterns

### Error Classes
```typescript
// src/lib/errors.ts
export class AppError extends Error {
  statusCode: number
  isOperational: boolean

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = true

    Error.captureStackTrace(this, this.constructor)
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 400)
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = 'Resource not found') {
    super(message, 404)
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401)
  }
}
```

### Error Handler Middleware
```typescript
// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express'
import { AppError } from '@/lib/errors'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Default error values
  let error = { ...err }
  error.message = err.message

  // Log error
  console.error(err)

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found'
    error = new AppError(message, 404)
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered'
    error = new AppError(message, 400)
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message)
    error = new AppError(message.join(', '), 400)
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  })
}
```

## Database Patterns

### Repository Pattern (with Prisma)
```typescript
// src/repositories/userRepository.ts
import { prisma } from '@/lib/prisma'
import { User, Prisma } from '@prisma/client'

export interface UserRepository {
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  create(data: Prisma.UserCreateInput): Promise<User>
  update(id: string, data: Prisma.UserUpdateInput): Promise<User>
  delete(id: string): Promise<User>
  findMany(options?: Prisma.UserFindManyArgs): Promise<User[]>
}

class PrismaUserRepository implements UserRepository {
  async findById(id: string) {
    return prisma.user.findUnique({ where: { id } })
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } })
  }

  async create(data: Prisma.UserCreateInput) {
    return prisma.user.create({ data })
  }

  async update(id: string, data: Prisma.UserUpdateInput) {
    return prisma.user.update({
      where: { id },
      data
    })
  }

  async delete(id: string) {
    return prisma.user.delete({ where: { id } })
  }

  async findMany(options?: Prisma.UserFindManyArgs) {
    return prisma.user.findMany(options)
  }
}

export const userRepository = new PrismaUserRepository()
```

## Authentication Patterns

### JWT Authentication
```typescript
// src/lib/auth.ts
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { userService } from '@/services/userService'

export const generateTokens = (userId: string) => {
  const accessToken = jwt.sign(
    { userId },
    process.env.JWT_SECRET!,
    { expiresIn: '15m' }
  )

  const refreshToken = jwt.sign(
    { userId },
    process.env.JWT_REFRESH_SECRET!,
    { expiresIn: '7d' }
  )

  return { accessToken, refreshToken }
}

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }
}

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 12)
}

export const comparePassword = (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword)
}

// Login function
export const authenticateUser = async (email: string, password: string) => {
  const user = await userService.findByEmail(email)
  
  if (!user) {
    throw new UnauthorizedError('Invalid credentials')
  }

  const isValidPassword = await comparePassword(password, user.password)
  
  if (!isValidPassword) {
    throw new UnauthorizedError('Invalid credentials')
  }

  const tokens = generateTokens(user.id)
  
  return {
    user: { id: user.id, email: user.email, name: user.name },
    ...tokens
  }
}
```

## WebSocket Patterns

### Socket.io Setup
```typescript
// src/lib/socket.ts
import { Server as SocketIOServer } from 'socket.io'
import { Server as HttpServer } from 'http'
import jwt from 'jsonwebtoken'

export const initializeSocket = (server: HttpServer) => {
  const io = new SocketIOServer(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ['GET', 'POST']
    }
  })

  // Authentication middleware
  io.use((socket, next) => {
    try {
      const token = socket.handshake.auth.token
      const payload = jwt.verify(token, process.env.JWT_SECRET!) as any
      socket.data.userId = payload.userId
      next()
    } catch (error) {
      next(new Error('Authentication error'))
    }
  })

  io.on('connection', (socket) => {
    console.log(`User ${socket.data.userId} connected`)

    // Join user-specific room
    socket.join(`user:${socket.data.userId}`)

    socket.on('message', async (data) => {
      // Handle message
      socket.broadcast.emit('message', {
        userId: socket.data.userId,
        message: data.message,
        timestamp: new Date()
      })
    })

    socket.on('disconnect', () => {
      console.log(`User ${socket.data.userId} disconnected`)
    })
  })

  return io
}
```

## Testing Patterns

### API Testing
```typescript
// src/__tests__/api/users.test.ts
import request from 'supertest'
import { app } from '@/app'
import { prisma } from '@/lib/prisma'
import { generateTokens } from '@/lib/auth'

describe('Users API', () => {
  let authToken: string
  let userId: string

  beforeAll(async () => {
    // Create test user
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        password: 'hashedpassword',
        name: 'Test User'
      }
    })
    userId = user.id
    
    const tokens = generateTokens(user.id)
    authToken = tokens.accessToken
  })

  afterAll(async () => {
    await prisma.user.deleteMany()
    await prisma.$disconnect()
  })

  describe('GET /api/v1/users', () => {
    it('should return users list for authenticated request', async () => {
      const response = await request(app)
        .get('/api/v1/users')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)

      expect(response.body.data).toBeInstanceOf(Array)
    })

    it('should return 401 for unauthenticated request', async () => {
      await request(app)
        .get('/api/v1/users')
        .expect(401)
    })
  })

  describe('POST /api/v1/users', () => {
    it('should create a new user with valid data', async () => {
      const userData = {
        email: 'newuser@example.com',
        password: 'password123',
        name: 'New User'
      }

      const response = await request(app)
        .post('/api/v1/users')
        .send(userData)
        .expect(201)

      expect(response.body.data.email).toBe(userData.email)
      expect(response.body.data.name).toBe(userData.name)
    })

    it('should return 400 for invalid email', async () => {
      const response = await request(app)
        .post('/api/v1/users')
        .send({
          email: 'invalid-email',
          password: 'password123',
          name: 'User'
        })
        .expect(400)

      expect(response.body.error).toBe('Validation failed')
    })
  })
})
```

## Implementation Checklist

### Adding New API Endpoints
1. [ ] Define route in appropriate router file
2. [ ] Add request/response type definitions
3. [ ] Implement validation schema with Zod
4. [ ] Add authentication middleware if needed
5. [ ] Implement business logic in service layer
6. [ ] Add proper error handling
7. [ ] Write unit and integration tests
8. [ ] Add API documentation (OpenAPI/Swagger)

### Adding Authentication to Routes
1. [ ] Apply `requireAuth` middleware to protected routes
2. [ ] Use `optionalAuth` for routes that benefit from user context
3. [ ] Add proper error responses for unauthorized access
4. [ ] Test both authenticated and unauthenticated scenarios

### Adding New Services
1. [ ] Create service class with proper TypeScript types
2. [ ] Implement CRUD operations as needed
3. [ ] Add input validation and sanitization
4. [ ] Include proper error handling and logging
5. [ ] Write unit tests for all service methods
6. [ ] Add integration tests for database operations