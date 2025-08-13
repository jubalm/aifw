# Codebase Analysis for Implementation Pattern Discovery

This document explains how to analyze a codebase to discover implementation patterns, code examples, and concrete development guidance for building features.

## Implementation-First Analysis Approach

- **Extract patterns, not descriptions**: Identify how things are actually implemented, not what they do
- **Concrete examples**: Find real code patterns, components, and implementations to use as templates
- **Implementation guidance**: Focus on "how to build X" rather than "what X does"
- **Actionable patterns**: Every pattern should include executable code examples and step-by-step instructions

## Technology Stack & Configuration Discovery

### Package Management Analysis
Extract exact implementation details for dependency usage:
- **package.json**: Dependencies with versions + analyze actual usage in code
- **requirements.txt**: Python packages + identify import patterns
- **Cargo.toml**: Rust crates + discover feature usage
- **go.mod**: Go modules + examine package imports
- **composer.json**: PHP packages + check namespace usage

### Configuration Implementation Patterns
Discover how configurations are actually implemented:
- **tsconfig.json**: Language settings + analyze actual TypeScript usage patterns
- **tailwind.config.js**: Styling setup + extract component style patterns
- **eslint.config.js**: Code rules + identify enforced code patterns
- **prettier.config.js**: Formatting + discover consistent code style
- **vite/webpack configs**: Build patterns + understand asset handling

## Code Pattern Discovery

### Component Implementation Patterns
**Focus**: How components are actually built, not what they do

#### React Component Patterns
```bash
# Discovery commands for React patterns
find src -name "*.tsx" -o -name "*.jsx" | head -10
grep -r "export.*function\|export.*const.*FC\|export.*React.FC" src/components | head -5
grep -r "interface.*Props" src/components | head -5
```

**Extract patterns for**:
- Component structure and naming conventions
- Props interface patterns
- Hook usage patterns (useState, useEffect, custom hooks)
- Styling approach (CSS modules, styled-components, Tailwind classes)
- Event handling patterns
- Conditional rendering patterns
- Error boundary implementations

#### Component Variant Patterns
```bash
# Find variant implementations
grep -r "variant.*=\|variants.*=" src/components
grep -r "className.*(" src/components | head -5
grep -r "cva\|clsx\|cn(" src/components | head -5
```

Extract how components handle variants, styling, and conditional classes.

### API Implementation Patterns
**Focus**: How APIs are actually implemented and called

#### Backend API Patterns
```bash
# Discover API route patterns
find . -name "route.ts" -o -name "*.route.ts" -o -path "*/api/*" -name "*.ts" | head -10
grep -r "export.*GET\|export.*POST\|export.*PUT\|export.*DELETE" . | head -5
grep -r "NextRequest\|Request.*Response" . | head -5
```

**Extract patterns for**:
- Route file structure and organization
- Request/response handling patterns
- Middleware usage (auth, validation, error handling)
- Database query patterns
- Error response formatting
- Authentication implementation
- Input validation schemas

#### Frontend API Client Patterns
```bash
# Find API client implementations
grep -r "fetch\|axios\|useSWR\|useQuery" src/ | head -10
grep -r "async.*=\|await " src/ | head -10
```

**Extract patterns for**:
- HTTP client setup and configuration
- API call patterns and error handling
- State management for API data
- Loading and error states
- Data transformation patterns

### Database & Data Patterns
**Focus**: How data operations are actually implemented

#### Database Schema & Query Patterns
```bash
# Discover database patterns
find . -name "schema.prisma" -o -name "*.sql" -o -path "*/migrations/*"
grep -r "model \|interface.*{" . | grep -v node_modules | head -10
grep -r "prisma\." src/ | head -10
grep -r "findMany\|findUnique\|create\|update\|delete" src/ | head -10
```

**Extract patterns for**:
- Database schema definitions
- Model relationships and constraints
- Query patterns (CRUD operations)
- Transaction handling
- Data validation schemas
- Migration patterns

#### State Management Patterns
```bash
# Find state management implementations
grep -r "useState\|useReducer\|createContext" src/ | head -10
grep -r "zustand\|redux\|jotai" src/ | head -10
grep -r "store\|State.*=" src/ | head -5
```

**Extract patterns for**:
- Local state management (useState, useReducer)
- Global state setup (Context, Zustand, Redux)
- State update patterns
- State persistence patterns

### Styling Implementation Patterns
**Focus**: How styling is actually implemented

#### CSS & Styling Patterns
```bash
# Discover styling patterns
find . -name "*.css" -o -name "*.scss" -o -name "*.styled.ts" | head -10
grep -r "className.*=" src/ | head -10
grep -r "styled\." src/ | head -5
grep -r "cn(" src/ | head -5
```

**Extract patterns for**:
- CSS organization and naming conventions
- Component styling patterns
- Responsive design implementations
- Theme and variant handling
- Animation patterns

### Form & Validation Patterns
```bash
# Find form implementations
grep -r "useForm\|register\|handleSubmit" src/ | head -10
grep -r "zod\|yup\|joi" src/ | head -5
grep -r "onSubmit\|form" src/ | head -10
```

**Extract patterns for**:
- Form setup and configuration
- Validation schema definitions
- Error handling and display
- Form submission patterns

### Authentication & Security Patterns
```bash
# Discover auth implementations
grep -r "useSession\|signIn\|signOut" src/ | head -5
grep -r "middleware\|auth" src/ | head -10
grep -r "JWT\|token\|Bearer" src/ | head -5
```

**Extract patterns for**:
- Authentication setup and flows
- Protected route implementations
- Session management
- Token handling

### Integration Patterns
```bash
# Find external service integrations
grep -r "stripe\|paypal\|aws\|s3" src/ | head -5
grep -r "webhook\|api.*key" src/ | head -5
grep -r "email\|send" src/ | head -5
```

**Extract patterns for**:
- Third-party service integration
- Webhook handling
- File upload implementations
- Email service setup

## Pattern Extraction Process

### 1. Identify Implementation Categories
Based on discovered patterns, categorize into:
- **component-patterns**: React/Vue components, hooks, UI patterns
- **api-patterns**: Backend endpoints, middleware, database operations
- **data-patterns**: Database schemas, queries, state management
- **style-patterns**: CSS frameworks, component styling, responsive design
- **integration-patterns**: External APIs, auth providers, third-party services

### 2. Extract Code Examples
For each pattern category:
1. **Find representative examples** from actual codebase
2. **Extract complete implementations** (not snippets)
3. **Include surrounding context** (imports, types, related files)
4. **Document usage patterns** (when/how to use)
5. **Add implementation steps** (step-by-step instructions)

### 3. Create Implementation Templates
Transform discovered patterns into actionable templates:
- **Boilerplate code** ready to copy/paste
- **Customization points** clearly marked
- **Common variations** documented
- **Integration instructions** with other patterns
- **Testing patterns** for each implementation

### 4. Document Pattern Relationships
Show how patterns connect:
- **Component patterns** → **API patterns** (how components call APIs)
- **Data patterns** → **API patterns** (how APIs interact with database)
- **Style patterns** → **Component patterns** (how styling is applied)
- **Integration patterns** → all others (how external services integrate)

## Implementation Discovery Examples

### Component Pattern Discovery
```typescript
// Found in src/components/ui/Button.tsx
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'destructive'
  size?: 'sm' | 'md' | 'lg' 
  children: React.ReactNode
}

export const Button = ({ variant = 'primary', size = 'md', children, ...props }) => {
  return (
    <button 
      className={cn(buttonVariants({ variant, size }))}
      {...props}
    >
      {children}
    </button>
  )
}
```

**Extracted Implementation Pattern**:
- Interface-first prop definitions
- Default parameter values
- Variant-based styling with cn() utility
- Props spreading for HTML attributes
- Named exports over default exports

### API Pattern Discovery
```typescript
// Found in src/app/api/users/route.ts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    
    const users = await prisma.user.findMany({
      skip: (page - 1) * 10,
      take: 10,
      select: { id: true, name: true, email: true }
    })
    
    return NextResponse.json({ data: users })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}
```

**Extracted Implementation Pattern**:
- Named export for HTTP methods
- URL search params extraction
- Pagination with skip/take
- Selective field returns with select
- Consistent error response format
- Try/catch error handling

## Analysis Quality Standards

### Pattern Completeness
- [ ] Include complete implementation (not just snippets)
- [ ] Show file structure and organization
- [ ] Include all necessary imports and dependencies
- [ ] Document integration points with other patterns

### Implementation Guidance
- [ ] Provide step-by-step implementation instructions
- [ ] Include customization options and variations
- [ ] Show common usage patterns and examples
- [ ] Add troubleshooting tips for common issues

### Code Examples
- [ ] Use actual code from the project (not generic examples)
- [ ] Include TypeScript types and interfaces
- [ ] Show error handling and edge cases
- [ ] Provide testing patterns for each implementation

### Evidence-Based Patterns
- [ ] Reference specific files and line numbers
- [ ] Include actual dependency versions
- [ ] Show real configuration values (sanitized)
- [ ] Document observed usage patterns in the codebase