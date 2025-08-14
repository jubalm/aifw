# Codebase Analysis for Knowledge Gap Identification

This document explains how to analyze a codebase to identify knowledge gaps between current implementation patterns and modern best practices.

## Gap-Focused Analysis Approach

- **Identify knowledge gaps, not create documentation**: Find where current patterns differ from best practices
- **Version-aware analysis**: Detect when technologies are outdated or deprecated patterns are used
- **Pattern evolution discovery**: Identify where newer, better patterns are available
- **Targeted gap identification**: Focus on specific knowledge limitations rather than comprehensive analysis

## Technology Stack & Version Gap Discovery

### Package Management Gap Analysis
Extract dependency versions and identify potential gaps:
- **package.json**: Dependencies with versions + identify outdated packages
- **requirements.txt**: Python packages + check for deprecated versions
- **Cargo.toml**: Rust crates + identify version-specific features
- **go.mod**: Go modules + check for breaking changes in versions
- **composer.json**: PHP packages + identify security updates available

### Configuration Gap Analysis
Discover configuration patterns that may be outdated:
- **tsconfig.json**: TypeScript settings + identify new compiler options
- **tailwind.config.js**: Tailwind setup + check for deprecated patterns
- **eslint.config.js**: ESLint rules + identify updated rule sets
- **prettier.config.js**: Prettier config + check for new formatting options
- **vite/webpack configs**: Build configs + identify performance improvements

## Code Pattern Gap Discovery

### Component Pattern Gap Analysis
**Focus**: Identify gaps between current patterns and modern best practices

#### React Component Gap Detection
```bash
# Discovery commands for React gap analysis
find src -name "*.tsx" -o -name "*.jsx" | head -10
grep -r "useEffect" src/ | head -5  # Check for potential dependency issues
grep -r "useState" src/ | head -5   # Check for state management patterns
grep -r "React.FC\|FunctionComponent" src/ | head -5  # Check for deprecated patterns
```

**Identify gaps in**:
- Component patterns (class vs function components)
- Hook usage (dependency arrays, cleanup patterns)
- TypeScript usage (prop interfaces, generic patterns)
- Performance patterns (memo, useMemo, useCallback usage)
- Modern React patterns (Server Components, Suspense)
- Styling evolution (CSS-in-JS vs utility classes)
- Testing approaches (modern testing patterns)

#### Component Styling Gap Detection
```bash
# Find styling pattern gaps
grep -r "styled-components\|emotion" src/ | head -5  # Check for CSS-in-JS usage
grep -r "className.*=" src/ | head -5              # Check Tailwind usage patterns
grep -r "@apply\|@screen" src/ | head -5           # Check for deprecated Tailwind patterns
```

**Identify styling gaps**:
- CSS framework versions (Tailwind 2.x vs 3.x vs 4.x)
- Deprecated utilities (@apply usage)
- Performance patterns (CSS-in-JS vs static extraction)
- Modern CSS features (container queries, cascade layers)

### API Pattern Gap Analysis
**Focus**: Identify gaps in backend and API client patterns

#### Backend API Gap Detection
```bash
# Discover API implementation gaps
find . -name "route.ts" -o -name "*.route.ts" -o -path "*/api/*" -name "*.ts" | head -10
grep -r "getServerSideProps\|getStaticProps" . | head -5  # Check for deprecated Next.js patterns
grep -r "pages/api" . | head -5                          # Check for Pages Router usage
grep -r "app.*route\|route.*handler" . | head -5         # Check for App Router adoption
```

**Identify API gaps**:
- Next.js routing (Pages Router vs App Router)
- Data fetching patterns (getServerSideProps vs Server Components)
- API route patterns (REST vs modern patterns)
- Authentication patterns (session vs JWT evolution)
- Error handling evolution
- Type safety improvements (tRPC, Prisma types)

#### Frontend API Client Gap Detection
```bash
# Find API client pattern gaps
grep -r "fetch\|axios" src/ | head -10               # Check HTTP client usage
grep -r "useSWR\|useQuery\|@tanstack" src/ | head -5 # Check data fetching libraries
grep -r "\.then\|\.catch" src/ | head -5             # Check for Promise chain patterns
```

**Identify client gaps**:
- HTTP client evolution (fetch vs axios vs modern alternatives)
- Data fetching (SWR vs React Query vs modern patterns)
- Error handling patterns
- Loading state management
- Caching strategies

### Database & State Management Gap Analysis

#### Database Pattern Gap Detection
```bash
# Discover database pattern gaps
find . -name "schema.prisma" -o -name "*.sql" -o -path "*/migrations/*"
grep -r "findMany\|findFirst" src/ | head -5         # Check Prisma usage patterns
grep -r "\.query\|\.execute" src/ | head -5          # Check raw query usage
grep -r "transaction\|$transaction" src/ | head -5   # Check transaction patterns
```

**Identify database gaps**:
- ORM versions (Prisma 4.x vs 5.x patterns)
- Query optimization patterns
- Type safety evolution
- Migration patterns
- Performance optimizations

#### State Management Gap Detection
```bash
# Find state management pattern gaps
grep -r "useState\|useReducer" src/ | head -10       # Check local state patterns
grep -r "createContext\|useContext" src/ | head -5   # Check Context usage
grep -r "zustand\|redux\|jotai\|valtio" src/ | head -5 # Check global state libraries
```

**Identify state gaps**:
- Global state management evolution
- Performance patterns (selectors, subscriptions)
- Persistence patterns
- Type safety improvements
- Modern alternatives to current approaches

### Styling and UI Gap Analysis

#### CSS Framework Gap Detection
```bash
# Discover styling framework gaps
find . -name "tailwind.config.*" -o -name "*.css" | head -10
grep -r "tailwindcss.*version\|@tailwindcss" . | head -5    # Check Tailwind version
grep -r "container\|@apply\|@screen" src/ | head -5         # Check deprecated patterns
grep -r "dark:\|prose\|forms" src/ | head -5               # Check plugin usage
```

**Identify styling gaps**:
- Framework versions (Tailwind CSS 3.x vs 4.x)
- Plugin usage (forms, typography, container queries)
- Deprecated patterns (@apply overuse)
- Performance optimizations (JIT vs static)
- Modern CSS features (container queries, color functions)

### Testing Pattern Gap Analysis

#### Testing Framework Gap Detection
```bash
# Find testing pattern gaps
find . -name "*.test.*" -o -name "*.spec.*" | head -10
grep -r "jest\|vitest\|@testing-library" . | head -5      # Check testing libraries
grep -r "enzyme\|shallow\|mount" . | head -5              # Check for deprecated patterns
grep -r "screen\|render\|fireEvent" . | head -5           # Check modern testing patterns
```

**Identify testing gaps**:
- Testing framework evolution (Jest vs Vitest)
- Testing library patterns (Enzyme vs Testing Library)
- Component testing approaches
- Integration testing patterns
- Performance testing

## Gap Identification Process

### 1. Technology Version Analysis
Based on discovered patterns, categorize potential gaps:
- **Version gaps**: Outdated dependency versions
- **API gaps**: Deprecated or changed APIs in use
- **Pattern gaps**: Older patterns when modern alternatives exist
- **Configuration gaps**: Outdated setup or build configurations

### 2. Pattern Evolution Assessment
For each technology category:
1. **Identify current usage patterns** from actual codebase
2. **Check for version-specific features** being used or missing
3. **Look for deprecated patterns** that should be updated
4. **Find optimization opportunities** with newer approaches

### 3. Gap Priority Classification
Transform discovered gaps into priority categories:
- **High Priority**: Security issues, breaking changes, performance critical
- **Medium Priority**: Developer experience improvements, modern patterns
- **Low Priority**: Style preferences, minor optimizations

### 4. Context7 Integration Points
Prepare gap analysis for Context7 enhancement:
- **Technology + version queries**: "React 18 vs React 17 breaking changes"
- **Pattern-specific queries**: "Next.js 14 app router migration guide"
- **Performance queries**: "Tailwind CSS 3.4 performance optimizations"
- **Security queries**: "Node.js 18 vs 16 security improvements"

## Gap Analysis Examples

### React Pattern Gap Discovery
```typescript
// Discovered pattern (potentially outdated)
const MyComponent: React.FC<Props> = ({ data }) => {
  useEffect(() => {
    fetchData()
  }, []) // Missing dependency

  return <div>{data.map(item => <Item key={item.id} {...item} />)}</div>
}
```

**Identified Gaps**:
- React.FC usage (deprecated pattern)
- useEffect missing dependencies
- No error boundaries
- Missing loading states

### Next.js Routing Gap
```typescript
// Discovered: Pages Router pattern
export async function getServerSideProps(context) {
  const data = await fetchData()
  return { props: { data } }
}
```

**Identified Gaps**:
- Using Pages Router when App Router available
- Server-side rendering pattern evolution
- Type safety improvements available
- Performance optimizations in App Router

### Tailwind Configuration Gap
```javascript
// Discovered: Tailwind 2.x config pattern
module.exports = {
  mode: 'jit', // Deprecated in 3.x
  purge: ['./src/**/*.{js,jsx,ts,tsx}'], // Changed to 'content'
  darkMode: 'media', // Can be improved with 'class'
}
```

**Identified Gaps**:
- Deprecated configuration options
- Missing modern features (container queries)
- Performance improvements available
- New plugin ecosystem

## Analysis Quality Standards

### Gap Identification Accuracy
- [ ] Focus on actual version/pattern differences
- [ ] Identify specific improvement opportunities
- [ ] Avoid false positives (gaps that aren't actually gaps)
- [ ] Prioritize based on impact and effort

### Technology Coverage
- [ ] Analyze all major technologies in the stack
- [ ] Check configuration files for optimization opportunities
- [ ] Identify integration pattern improvements
- [ ] Look for security and performance gaps

### Context7 Preparation
- [ ] Prepare specific queries for identified gaps
- [ ] Focus on actionable improvements
- [ ] Target current best practices verification
- [ ] Plan for fallback analysis when Context7 unavailable

### Gap Documentation
- [ ] Document specific gaps with examples
- [ ] Provide clear before/after comparisons
- [ ] Include migration complexity assessment
- [ ] Reference specific files and line numbers for discovered patterns