# Codebase Analysis Methodology

This document explains how to analyze a codebase to discover project reality for context generation.

## Analysis-First Approach

- **Discover before writing**: Analyze package.json, source code, configs before generating content
- **Evidence-based content**: Every statement should be grounded in codebase analysis
- **Current over assumed**: Use actual project patterns, not training data assumptions
- **Version specificity**: Extract exact versions from package files

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

## Quality and Compliance Discovery

### Code Quality Tools
- **eslint**: Linting rules and code quality standards
- **prettier**: Code formatting configuration
- **husky**: Git hook automation and quality gates
- **lint-staged**: Pre-commit quality checks

### Security and Compliance
- **Security dependencies**: Security-focused packages and configurations
- **Compliance requirements**: GDPR, HIPAA, or other regulatory needs
- **Access control**: Authentication and authorization patterns

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