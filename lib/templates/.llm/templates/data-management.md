# Data Management

## Data Architecture Overview

### Database Strategy
**Primary Database**: [e.g., PostgreSQL 15.4, MongoDB 6.0, MySQL 8.0, SQLite]
**Database Hosting**: [e.g., Supabase, PlanetScale, AWS RDS, Self-hosted Docker]
**Connection Management**: [e.g., Connection pooling with pg-pool, Prisma connection limits]
**Environment Strategy**: [e.g., Separate dev/staging/prod databases, Local Docker for development]

### Data Access Layer
**ORM/Query Builder**: [e.g., Prisma 5.4, Drizzle ORM, TypeORM, Raw SQL with pg]
**Migration Strategy**: [e.g., Prisma migrations, Drizzle migrations, Custom SQL scripts]
**Schema Management**: [e.g., Schema-first with Prisma, Code-first with TypeORM]

## Data Models & Relationships

### Core Entities
**User Management**:
```
Users: id, email, name, role, created_at, updated_at
UserProfiles: user_id, bio, avatar_url, preferences
UserSessions: user_id, token, expires_at, created_at
```

**Business Domain** [Customize based on actual project]:
```
[e.g., for e-commerce:]
Products: id, name, description, price, category_id, created_at
Categories: id, name, slug, parent_id
Orders: id, user_id, total, status, created_at
OrderItems: id, order_id, product_id, quantity, price

[e.g., for content management:]
Posts: id, user_id, title, content, status, published_at
Comments: id, post_id, user_id, content, created_at
Tags: id, name, slug
PostTags: post_id, tag_id
```

### Relationship Patterns
- **One-to-Many**: [e.g., User → Posts, Category → Products, Order → OrderItems]
- **Many-to-Many**: [e.g., Posts ↔ Tags, Users ↔ Roles, Products ↔ Collections]
- **Self-Referencing**: [e.g., Categories with parent_id, Comment threads with parent_id]

## Data Access Patterns

### Query Patterns
**Standard CRUD Operations**:
```typescript
// Example patterns based on actual codebase
const user = await prisma.user.findUnique({ where: { id: userId } })
const posts = await prisma.post.findMany({ 
  where: { userId },
  include: { author: true, tags: true }
})
```

**Complex Queries**:
- **Filtering & Search**: [e.g., Full-text search with PostgreSQL, Elasticsearch integration]
- **Pagination**: [e.g., Cursor-based with take/skip, Offset-based pagination]
- **Aggregation**: [e.g., COUNT queries, SUM calculations, GROUP BY operations]
- **Joins & Relations**: [e.g., Nested includes, Select specific fields, Join optimization]

### Data Loading Strategies
**Frontend Data Fetching**:
- **Real-time**: [e.g., React Query with SWR, Apollo GraphQL subscriptions, Tanstack Query]
- **Caching**: [e.g., React Query cache, Apollo cache, Custom cache layers]
- **Optimistic Updates**: [e.g., Immediate UI updates, Rollback on error]

**Backend Optimization**:
- **Query Optimization**: [e.g., Database indexes, Query analysis, Connection pooling]
- **N+1 Prevention**: [e.g., Prisma includes, DataLoader batching, Eager loading]
- **Caching Strategy**: [e.g., Redis caching, Application-level cache, CDN cache]

## Data Validation & Integrity

### Input Validation
**Schema Validation**: 
- **Runtime Validation**: [e.g., Zod schemas, Joi validation, Yup schemas]
- **Database Constraints**: [e.g., NOT NULL, UNIQUE, FOREIGN KEY, CHECK constraints]
- **Application Rules**: [e.g., Business logic validation, Custom validators]

**Validation Examples**:
```typescript
// Example validation patterns from actual codebase
const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(50),
  age: z.number().min(13).max(120)
})
```

### Data Integrity
**Referential Integrity**: [e.g., Foreign key constraints, Cascade deletes, Restrict updates]
**Transactional Operations**: [e.g., Database transactions for multi-table operations]
**Consistency Checks**: [e.g., Unique constraints, Data validation rules, Audit trails]

## Data Security & Privacy

### Access Control
**Row-Level Security**: [e.g., PostgreSQL RLS policies, User-scoped queries, Tenant isolation]
**Field-Level Security**: [e.g., Sensitive field masking, Role-based field access]
**Audit Logging**: [e.g., Track data changes, User actions, Administrative operations]

### Data Protection
**Encryption**:
- **At Rest**: [e.g., Database encryption, File system encryption, Encrypted backups]
- **In Transit**: [e.g., TLS connections, API encryption, Secure protocols]
- **Application Level**: [e.g., Bcrypt for passwords, Sensitive field encryption]

**Privacy Compliance**:
- **GDPR**: [e.g., Data portability, Right to deletion, Consent management]
- **Data Retention**: [e.g., Automatic data deletion, Archive strategies, Compliance periods]

## Data Synchronization & Integration

### External Data Sources
**Third-party APIs**: [e.g., Stripe customer data, Auth0 user profiles, External CRM sync]
**Webhook Handling**: [e.g., Process Stripe webhooks, Handle external service notifications]
**Data Import/Export**: [e.g., CSV imports, API data synchronization, Backup exports]

### Real-time Updates
**Live Data**: [e.g., WebSocket connections, Server-sent events, Pusher integration]
**Change Notifications**: [e.g., Database triggers, Application events, Real-time subscriptions]
**Conflict Resolution**: [e.g., Last-write-wins, Merge strategies, Version control]

## Data Storage & File Management

### File Storage Strategy
**File Uploads**: [e.g., AWS S3, Cloudinary, Local file system, Supabase Storage]
**Image Processing**: [e.g., Sharp for resizing, Cloudinary transformations, Client-side compression]
**CDN Strategy**: [e.g., CloudFront distribution, Vercel Edge, Cloudflare caching]

### Storage Patterns
**User-Generated Content**: [e.g., Profile photos, Document uploads, Media files]
**Static Assets**: [e.g., Product images, Marketing content, Application assets]
**Temporary Files**: [e.g., Export generation, Processing intermediates, Cache files]

## Performance & Optimization

### Query Performance
**Database Optimization**:
- **Indexing Strategy**: [e.g., B-tree indexes on frequently queried columns, Composite indexes]
- **Query Analysis**: [e.g., EXPLAIN ANALYZE usage, Slow query monitoring]
- **Connection Management**: [e.g., Connection pooling, Read replicas, Load balancing]

**Application Optimization**:
- **Query Batching**: [e.g., DataLoader for GraphQL, Batch API calls]
- **Caching Layers**: [e.g., Redis cache, Application memory cache, Query result caching]
- **Pagination Strategy**: [e.g., Cursor-based for large datasets, Offset for small sets]

### Monitoring & Alerts
**Performance Monitoring**: [e.g., Database query performance, Connection pool usage]
**Error Tracking**: [e.g., Failed queries, Data validation errors, Connection failures]
**Capacity Planning**: [e.g., Storage growth tracking, Query volume monitoring]

## Backup & Recovery

### Backup Strategy
**Database Backups**: [e.g., Daily automated backups, Point-in-time recovery, Cross-region replication]
**File Backups**: [e.g., S3 versioning, Regular file backups, Disaster recovery procedures]
**Testing**: [e.g., Backup restoration testing, Recovery time objectives, Data integrity verification]

### Migration & Versioning
**Schema Migrations**: [e.g., Prisma migration workflow, Zero-downtime migrations]
**Data Migrations**: [e.g., Data transformation scripts, Rollback procedures, Version control]
**Environment Synchronization**: [e.g., Dev/staging/prod schema consistency, Seed data management]

## Current Data Challenges

### Known Issues
- [e.g., Slow queries on user_activity table, N+1 queries in post listing]
- [e.g., File upload size limits, Database connection pool exhaustion]
- [e.g., Inconsistent data validation between frontend and backend]

### Technical Debt
- [e.g., Legacy table structures that need refactoring, Missing database indexes]
- [e.g., Inconsistent naming conventions, Duplicate data storage]
- [e.g., Manual processes that should be automated]

### Future Data Plans
- [e.g., Implement read replicas for better performance, Add full-text search with Elasticsearch]
- [e.g., Migrate to multi-tenant architecture, Implement data archiving strategy]
- [e.g., Add comprehensive audit logging, Improve data analytics capabilities]