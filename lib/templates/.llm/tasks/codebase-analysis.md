# Codebase Analysis for Domain Discovery

This document explains how to analyze a codebase to discover domain narratives and complete system stories for context generation.

## Domain-Driven Analysis Approach

- **Discover domains, not categories**: Identify major system capabilities (authentication, data management, user experience, integrations, business logic)
- **Complete narratives**: Each domain should tell a complete story from implementation to business rules to future plans
- **Evidence-based content**: Every statement should be grounded in codebase analysis
- **Cross-cutting coherence**: Capture how concerns like security span multiple domains

## Technology Stack Discovery

### Package Management Analysis
- **package.json**: Extract dependencies with exact versions
- **requirements.txt**: Python dependencies and versions
- **Cargo.toml**: Rust dependencies and versions
- **go.mod**: Go module dependencies
- **composer.json**: PHP dependencies

### Configuration Analysis
- **tsconfig.json/jsconfig.json**: Discover language configuration and compiler options
- **babel.config.js**: JavaScript transformation setup
- **eslint.config.js/.eslintrc**: Code quality and style rules
- **prettier.config.js**: Code formatting preferences

### Build System Detection
- **vite.config.js/ts**: Vite build configuration
- **webpack.config.js**: Webpack build setup
- **rollup.config.js**: Rollup bundler configuration
- **esbuild.config.js**: ESBuild configuration
- **turbo.json**: Turborepo monorepo configuration

### Framework Detection
- **next.config.js**: Next.js framework configuration
- **nuxt.config.js**: Nuxt.js framework setup
- **vue.config.js**: Vue CLI configuration
- **angular.json**: Angular workspace configuration
- **svelte.config.js**: Svelte framework setup

## Project Structure Discovery

### Directory Pattern Analysis
- Analyze actual folder organization (src/, components/, pages/, etc.)
- Count files in each directory to understand project scale
- Identify naming conventions (camelCase, kebab-case, PascalCase)
- Discover co-location patterns (tests, styles, types)

### Import Pattern Discovery
- Examine how modules reference each other
- Identify absolute vs relative import patterns
- Discover path aliases and module resolution
- Analyze barrel exports and re-export patterns

### Component Architecture Analysis
- Examine actual component structure and conventions
- Identify props patterns and TypeScript usage
- Discover state management patterns
- Analyze styling approaches (CSS modules, styled-components, etc.)

### Testing Infrastructure Discovery
- **jest.config.js**: Jest testing framework setup
- **vitest.config.js**: Vitest testing configuration
- **cypress.config.js**: Cypress E2E testing setup
- **playwright.config.js**: Playwright testing configuration
- Test file patterns and co-location strategies

## Development Environment Discovery

### Script Analysis
- **package.json scripts**: Discover build, test, dev, lint commands
- **Makefile**: Build automation and task definitions
- **docker-compose.yml**: Containerized development setup
- **Dockerfile**: Container build instructions

### Version Control Integration
- **.gitignore**: Files and patterns excluded from version control
- **husky/**: Git hooks and pre-commit automation
- **.github/workflows/**: GitHub Actions CI/CD configuration
- **gitlab-ci.yml**: GitLab CI/CD configuration

### Environment Configuration
- **.env files**: Environment variable patterns and requirements
- **docker-compose.yml**: Service dependencies and configuration
- **vercel.json**: Vercel deployment configuration
- **netlify.toml**: Netlify deployment settings

## Database and External Services

### Database Configuration
- **prisma/schema.prisma**: Prisma ORM schema and database setup
- **drizzle.config.js**: Drizzle ORM configuration
- **sequelize.config.js**: Sequelize ORM setup
- **typeorm.config.js**: TypeORM configuration

### External Service Integration
- API configuration files and service integrations
- Authentication provider setup (Auth0, Firebase, etc.)
- Payment integration configuration (Stripe, PayPal)
- Monitoring and analytics setup (Sentry, Analytics)

## Domain-Specific Discovery

### Authentication Domain Discovery
**Authentication Implementation**:
- **Auth libraries**: NextAuth.js, Auth0 SDK, Firebase Auth, Supabase Auth, custom JWT
- **Session management**: Cookie configuration, token storage patterns, refresh logic
- **Password handling**: bcrypt usage, password validation, reset mechanisms
- **OAuth integration**: Provider configurations, callback handling, token exchange

**Authorization Patterns**:
- **Middleware**: Authentication middleware, route protection, role checking
- **Frontend auth**: Protected routes, conditional rendering, auth context/hooks
- **Permission systems**: RBAC implementations, resource-based access, policy engines

**Security Configurations**:
- **CORS settings**: Origin whitelist, credential handling, preflight options
- **Rate limiting**: Login attempt limits, API rate limiting, brute force protection
- **Security headers**: CSP, HSTS, X-Frame-Options configurations

### Data Management Domain Discovery
**Database Architecture**:
- **Database configuration**: Connection strings, pool settings, SSL configuration
- **Schema definition**: Model files, migration scripts, seed data
- **Relationship patterns**: Foreign keys, join tables, cascade rules

**Query Patterns**:
- **ORM usage**: Prisma schemas, TypeORM entities, Mongoose models, raw SQL
- **Query optimization**: Indexes, query analysis, connection pooling
- **Data validation**: Schema validation, input sanitization, type checking

**Data Flow**:
- **API endpoints**: CRUD operations, batch operations, search/filter endpoints
- **Data transformations**: Serializers, DTOs, data mapping functions
- **Caching strategies**: Redis usage, application cache, query result cache

### User Experience Domain Discovery
**Frontend Architecture**:
- **Component structure**: Component hierarchy, reusable components, page components
- **State management**: Context usage, state libraries, local vs global state
- **Routing configuration**: Route definitions, guards, dynamic routing

**UI Patterns**:
- **Design system**: Component libraries, theme configuration, styling patterns
- **Form handling**: Form libraries, validation patterns, error handling
- **Loading/error states**: Loading components, error boundaries, fallback UI

**User Flows**:
- **Navigation patterns**: Menu structures, breadcrumbs, user journey flows
- **Interactive elements**: Modals, tooltips, form interactions, data tables
- **Responsive design**: Breakpoint usage, mobile patterns, touch interactions

### Integrations Domain Discovery
**Third-Party Services**:
- **Payment processing**: Stripe, PayPal configurations, webhook endpoints
- **Email services**: SendGrid, Mailgun configurations, template management
- **File storage**: S3, Cloudinary configurations, upload handling
- **Analytics**: Google Analytics, tracking implementations, event patterns

**API Integrations**:
- **External APIs**: Third-party API clients, authentication patterns, data mapping
- **Webhook handling**: Incoming webhooks, signature verification, processing logic
- **Service configurations**: API keys, environment-specific configurations

**Data Exchange**:
- **API design**: REST endpoints, GraphQL schemas, request/response patterns
- **Serialization**: JSON handling, data transformation, validation
- **Error handling**: API error responses, retry logic, fallback mechanisms

### Business Logic Domain Discovery
**Domain Models**:
- **Business entities**: Core business objects, relationships, lifecycle management
- **Validation rules**: Business rule validation, constraint checking, policy enforcement
- **Workflow patterns**: State machines, approval processes, business process flows

**Business Rules Implementation**:
- **Calculation logic**: Pricing, tax, shipping, commission calculations
- **Permission logic**: Business-specific access rules, resource ownership
- **Process automation**: Background jobs, scheduled tasks, event handlers

**Configuration & Customization**:
- **Feature flags**: Feature toggle implementations, environment-specific features
- **Business settings**: Configurable rules, tenant customizations, regional settings
- **Compliance**: Regulatory compliance implementations, audit logging, data retention

## Analysis Output Format

### Evidence-Based Documentation
- Every claim must reference specific files or patterns
- Include file paths and line numbers where relevant
- Provide version numbers from actual package files
- Quote actual configuration values, not assumptions

### Discovery Examples
```
Technology Stack (Discovered from package.json):
- Framework: React 18.2.0 (line 14, package.json)
- Language: TypeScript 5.2.1 (devDependency, package.json)
- Build Tool: Vite 4.5.0 (discovered from vite.config.ts existence)

Directory Structure (Analyzed from file system):
src/
├── components/ui/      # Contains 15 component files
├── hooks/             # Contains 8 custom hooks
└── utils/             # Contains validation, formatting helpers

Development Scripts (from package.json):
- dev: "vite" (development server)
- build: "vite build" (production build)
- test: "vitest" (unit testing)
```

## Quality Standards

### Accuracy Requirements
- All version numbers must match actual dependencies
- Directory structures must reflect actual project organization
- Development commands must be verified in package.json
- Configuration details must be sourced from actual config files

### Completeness Guidelines
- Cover all major technology categories relevant to the project
- Include both primary and development dependencies
- Document both explicit and inferred patterns
- Note any unusual or non-standard approaches discovered