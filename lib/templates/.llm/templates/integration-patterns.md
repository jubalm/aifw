# Integration Patterns & Implementation Guide

## External API Integration

### HTTP Client Setup
**Library**: [e.g., axios, fetch, ky]
**Configuration**: Base URL, timeouts, interceptors
**Error Handling**: Standardized error responses and retry logic

```typescript
// src/lib/httpClient.ts
import axios, { AxiosError, AxiosResponse } from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

export const httpClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor for authentication
httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor for error handling
httpClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config

    // Token refresh logic
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      
      try {
        const refreshToken = localStorage.getItem('refreshToken')
        const response = await axios.post('/auth/refresh', { refreshToken })
        const { accessToken } = response.data
        
        localStorage.setItem('accessToken', accessToken)
        originalRequest.headers.Authorization = `Bearer ${accessToken}`
        
        return httpClient(originalRequest)
      } catch (refreshError) {
        // Redirect to login
        localStorage.clear()
        window.location.href = '/login'
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export default httpClient
```

### API Service Pattern
```typescript
// src/services/api/users.ts
import httpClient from '@/lib/httpClient'
import { User, CreateUserRequest, UpdateUserRequest } from '@/types/user'

export class UserApiService {
  private readonly baseUrl = '/users'

  async getUsers(params?: {
    page?: number
    limit?: number
    search?: string
  }): Promise<{ data: User[]; meta: any }> {
    const response = await httpClient.get(this.baseUrl, { params })
    return response.data
  }

  async getUser(id: string): Promise<User> {
    const response = await httpClient.get(`${this.baseUrl}/${id}`)
    return response.data.data
  }

  async createUser(data: CreateUserRequest): Promise<User> {
    const response = await httpClient.post(this.baseUrl, data)
    return response.data.data
  }

  async updateUser(id: string, data: UpdateUserRequest): Promise<User> {
    const response = await httpClient.put(`${this.baseUrl}/${id}`, data)
    return response.data.data
  }

  async deleteUser(id: string): Promise<void> {
    await httpClient.delete(`${this.baseUrl}/${id}`)
  }
}

export const userApi = new UserApiService()
```

### Third-Party API Integration (Stripe Example)
```typescript
// src/lib/stripe.ts
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

// Client-side Stripe
import { loadStripe } from '@stripe/stripe-js'

export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

// Payment service
export class PaymentService {
  async createPaymentIntent(amount: number, currency = 'usd') {
    return stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
    })
  }

  async createCustomer(email: string, name?: string) {
    return stripe.customers.create({
      email,
      name,
    })
  }

  async createSubscription(customerId: string, priceId: string) {
    return stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      payment_behavior: 'default_incomplete',
      payment_settings: { save_default_payment_method: 'on_subscription' },
      expand: ['latest_invoice.payment_intent'],
    })
  }
}

export const paymentService = new PaymentService()
```

## Authentication Integration

### NextAuth.js Setup
```typescript
// pages/api/auth/[...nextauth].ts (Pages Router)
// or app/api/auth/[...nextauth]/route.ts (App Router)
import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Missing credentials')
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })

        if (!user || !user.password) {
          throw new Error('Invalid credentials')
        }

        const isValidPassword = await bcrypt.compare(credentials.password, user.password)

        if (!isValidPassword) {
          throw new Error('Invalid credentials')
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role as string
      }
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
    signUp: '/auth/signup',
  },
}

export default NextAuth(authOptions)
```

### Auth Hooks and Components
```typescript
// src/hooks/useAuth.ts
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function useAuth(redirectTo?: string) {
  const { data: session, status } = useSession()
  const router = useRouter()

  const login = async (provider?: string) => {
    const result = await signIn(provider, { 
      redirect: false,
      callbackUrl: redirectTo || '/'
    })
    
    if (result?.url) {
      router.push(result.url)
    }
  }

  const logout = async () => {
    await signOut({ redirect: false })
    router.push('/auth/signin')
  }

  return {
    user: session?.user,
    isAuthenticated: status === 'authenticated',
    isLoading: status === 'loading',
    login,
    logout,
  }
}

// src/components/auth/ProtectedRoute.tsx
interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: string
  fallback?: React.ReactNode
}

export function ProtectedRoute({ children, requiredRole, fallback }: ProtectedRouteProps) {
  const { user, isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return fallback || <div>Access denied. Please log in.</div>
  }

  if (requiredRole && user?.role !== requiredRole) {
    return fallback || <div>Access denied. Insufficient permissions.</div>
  }

  return <>{children}</>
}
```

## Database Integration

### Prisma Configuration
```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  password      String?
  role          Role      @default(USER)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  accounts Account[]
  sessions Session[]
}

enum Role {
  USER
  ADMIN
  MODERATOR
}
```

## Email Integration

### Resend/SendGrid Setup
```typescript
// src/lib/email.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface EmailOptions {
  to: string | string[]
  subject: string
  html?: string
  text?: string
  from?: string
}

export class EmailService {
  private defaultFrom = process.env.EMAIL_FROM || 'noreply@example.com'

  async sendEmail({ to, subject, html, text, from }: EmailOptions) {
    try {
      const result = await resend.emails.send({
        from: from || this.defaultFrom,
        to: Array.isArray(to) ? to : [to],
        subject,
        html,
        text,
      })

      return result
    } catch (error) {
      console.error('Email sending failed:', error)
      throw new Error('Failed to send email')
    }
  }

  async sendWelcomeEmail(to: string, name: string) {
    return this.sendEmail({
      to,
      subject: 'Welcome to Our Platform!',
      html: `
        <h1>Welcome ${name}!</h1>
        <p>Thank you for joining our platform. We're excited to have you on board.</p>
        <p>Get started by exploring our features.</p>
      `,
      text: `Welcome ${name}! Thank you for joining our platform.`,
    })
  }

  async sendPasswordResetEmail(to: string, resetToken: string) {
    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password?token=${resetToken}`
    
    return this.sendEmail({
      to,
      subject: 'Password Reset Request',
      html: `
        <h1>Password Reset</h1>
        <p>You requested a password reset. Click the link below to reset your password:</p>
        <a href="${resetUrl}">Reset Password</a>
        <p>This link will expire in 1 hour.</p>
        <p>If you didn't request this, please ignore this email.</p>
      `,
      text: `Password reset link: ${resetUrl}`,
    })
  }
}

export const emailService = new EmailService()
```

## File Storage Integration

### AWS S3 Setup
```typescript
// src/lib/storage.ts
import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

export class StorageService {
  private bucket = process.env.S3_BUCKET_NAME!

  async uploadFile(
    key: string,
    file: Buffer,
    contentType: string,
    metadata?: Record<string, string>
  ): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: key,
      Body: file,
      ContentType: contentType,
      Metadata: metadata,
    })

    await s3Client.send(command)
    return `https://${this.bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`
  }

  async deleteFile(key: string): Promise<void> {
    const command = new DeleteObjectCommand({
      Bucket: this.bucket,
      Key: key,
    })

    await s3Client.send(command)
  }

  async getSignedUrl(key: string, expiresIn = 3600): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: key,
    })

    return getSignedUrl(s3Client, command, { expiresIn })
  }

  async generateUploadUrl(
    key: string,
    contentType: string,
    expiresIn = 3600
  ): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: key,
      ContentType: contentType,
    })

    return getSignedUrl(s3Client, command, { expiresIn })
  }
}

export const storageService = new StorageService()
```

## Analytics Integration

### Google Analytics 4
```typescript
// src/lib/analytics.ts
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }
}

// Custom events
export const trackUserSignup = (method: string) => {
  event({
    action: 'sign_up',
    category: 'engagement',
    label: method,
  })
}

export const trackPurchase = (transactionId: string, value: number) => {
  event({
    action: 'purchase',
    category: 'ecommerce',
    label: transactionId,
    value,
  })
}
```

### Analytics Hook
```typescript
// src/hooks/useAnalytics.ts
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { pageview } from '@/lib/analytics'

export function useAnalytics() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
```

## WebSocket Integration

### Socket.io Client Setup
```typescript
// src/lib/socket.ts
import { io, Socket } from 'socket.io-client'

class SocketService {
  private socket: Socket | null = null

  connect(token: string) {
    this.socket = io(process.env.NEXT_PUBLIC_SOCKET_URL!, {
      auth: { token },
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    })

    this.socket.on('connect', () => {
      console.log('Connected to server')
    })

    this.socket.on('disconnect', () => {
      console.log('Disconnected from server')
    })

    return this.socket
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect()
      this.socket = null
    }
  }

  emit(event: string, data: any) {
    if (this.socket) {
      this.socket.emit(event, data)
    }
  }

  on(event: string, callback: (data: any) => void) {
    if (this.socket) {
      this.socket.on(event, callback)
    }
  }

  off(event: string, callback?: (data: any) => void) {
    if (this.socket) {
      this.socket.off(event, callback)
    }
  }
}

export const socketService = new SocketService()

// React hook for socket connection
export function useSocket(token?: string) {
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    if (token) {
      const socket = socketService.connect(token)
      
      socket.on('connect', () => setIsConnected(true))
      socket.on('disconnect', () => setIsConnected(false))

      return () => {
        socketService.disconnect()
        setIsConnected(false)
      }
    }
  }, [token])

  return {
    isConnected,
    emit: socketService.emit.bind(socketService),
    on: socketService.on.bind(socketService),
    off: socketService.off.bind(socketService),
  }
}
```

## Webhook Integration

### Webhook Handler Pattern
```typescript
// pages/api/webhooks/stripe.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { buffer } from 'micro'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

export const config = {
  api: {
    bodyParser: false,
  },
}

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).end('Method Not Allowed')
  }

  const body = await buffer(req)
  const signature = req.headers['stripe-signature'] as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return res.status(400).send('Webhook signature verification failed')
  }

  try {
    switch (event.type) {
      case 'customer.subscription.created':
        await handleSubscriptionCreated(event.data.object as Stripe.Subscription)
        break
      
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription)
        break
      
      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription)
        break
      
      case 'invoice.payment_succeeded':
        await handlePaymentSucceeded(event.data.object as Stripe.Invoice)
        break
      
      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    res.status(200).json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    res.status(500).json({ error: 'Webhook handler failed' })
  }
}

async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  // Update user subscription status in database
  await prisma.user.update({
    where: { stripeCustomerId: subscription.customer as string },
    data: {
      subscriptionStatus: 'active',
      subscriptionId: subscription.id,
    },
  })
}
```

## Environment Configuration

### Environment Variables Pattern
```typescript
// src/lib/config.ts
const config = {
  // App
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'My App',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    env: process.env.NODE_ENV || 'development',
  },
  
  // Database
  database: {
    url: process.env.DATABASE_URL!,
  },
  
  // Authentication
  auth: {
    secret: process.env.NEXTAUTH_SECRET!,
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  
  // External Services
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY!,
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
  },
  
  aws: {
    region: process.env.AWS_REGION!,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    s3BucketName: process.env.S3_BUCKET_NAME!,
  },
  
  email: {
    resendApiKey: process.env.RESEND_API_KEY!,
    fromAddress: process.env.EMAIL_FROM || 'noreply@example.com',
  },
  
  // Analytics
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  },
}

// Validation (optional)
const requiredEnvVars = [
  'DATABASE_URL',
  'NEXTAUTH_SECRET',
  'STRIPE_SECRET_KEY',
  'RESEND_API_KEY',
] as const

function validateConfig() {
  const missing = requiredEnvVars.filter(key => !process.env[key])
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }
}

if (config.app.env === 'production') {
  validateConfig()
}

export default config
```

## Implementation Checklist

### Setting Up External API Integration
1. [ ] Configure HTTP client with base URL and interceptors
2. [ ] Implement authentication handling (tokens, refresh)
3. [ ] Add error handling and retry logic
4. [ ] Create typed service classes for each API
5. [ ] Add request/response logging for debugging
6. [ ] Implement rate limiting awareness

### Adding Authentication Provider
1. [ ] Install and configure authentication library
2. [ ] Set up OAuth providers (Google, GitHub, etc.)
3. [ ] Implement custom credentials provider if needed
4. [ ] Add protected route components
5. [ ] Create authentication hooks and utilities
6. [ ] Handle session management and persistence

### Database Integration Setup
1. [ ] Configure database connection and ORM
2. [ ] Set up database schema and migrations
3. [ ] Implement connection pooling
4. [ ] Add query logging and monitoring
5. [ ] Set up backup and disaster recovery
6. [ ] Configure environment-specific databases

### Third-Party Service Integration
1. [ ] Research service documentation and SDKs
2. [ ] Set up API keys and authentication
3. [ ] Implement service wrapper classes
4. [ ] Add webhook handling if applicable
5. [ ] Implement error handling and fallbacks
6. [ ] Add monitoring and alerting for service health