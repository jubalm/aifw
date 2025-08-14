# Knowledge Gap Identification Methodology

This document provides the methodology for identifying specific knowledge gaps in LLM understanding and patching them with targeted information discovery.

## Core Philosophy

### Gap-Patcher Principles
- **Targeted Enhancement**: Identify specific knowledge gaps rather than comprehensive documentation
- **Context7 Integration**: Leverage external documentation APIs for current information
- **Minimal Context Pollution**: Provide only what's needed to bridge knowledge gaps
- **Dynamic Discovery**: Adapt to any codebase without static templates
- **LLM Augmentation**: Enhance baseline LLM capabilities, don't replace them

## Gap Identification Process

### Step 1: Technology Stack Discovery
Identify technologies that may have knowledge gaps:

```bash
# Package discovery commands
find . -name "package.json" -o -name "requirements.txt" -o -name "Cargo.toml" -o -name "go.mod" -o -name "composer.json"
grep -r "import.*from\|require(" src/ | head -20
grep -r "^[[:space:]]*['\"].*['\"]:" package.json | head -10
```

**Gap Categories**:
- **Version Gaps**: Newer versions of known libraries
- **API Changes**: Breaking changes in familiar frameworks
- **New Libraries**: Technologies not in training data
- **Configuration Updates**: Modern setup patterns
- **Tool Introduction**: Completely new tools not yet in codebase (see tool-introduction.md)

### Step 2: Implementation Pattern Gaps
Identify specific implementation approaches that may need current guidance:

```bash
# Modern framework patterns
grep -r "useEffect\|useState\|createContext" src/ | head -5
grep -r "async.*await\|Promise" src/ | head -5
grep -r "fetch\|axios\|swr\|react-query" src/ | head -5
```

**Pattern Gap Types**:
- **Hook Patterns**: Modern React patterns
- **State Management**: Current best practices
- **API Integration**: Modern client patterns
- **Authentication**: Current auth flows

### Step 3: Configuration Gaps
Identify setup and configuration that may have evolved:

```bash
# Configuration files
find . -name "*.config.*" -o -name ".*rc" -o -name ".*config"
grep -r "extends.*\|plugins.*\|preset" . | grep -E "\.(config|rc)" | head -5
```

**Configuration Gap Areas**:
- **Build Tools**: Vite, Webpack, etc.
- **CSS Frameworks**: Tailwind, PostCSS updates
- **Linting/Formatting**: ESLint, Prettier changes
- **TypeScript**: New features and config options

## Gap Assessment Criteria

### Priority 1: Version-Specific Gaps
Technologies where version matters significantly:
- React (16 → 17 → 18+)
- Next.js (12 → 13 → 14+)
- TypeScript (4.x → 5.x)
- Node.js (16 → 18 → 20+)

### Priority 2: API/Pattern Changes
Breaking changes or new patterns:
- React Server Components
- App Router vs Pages Router
- Modern CSS (Container Queries, etc.)
- New JavaScript features

### Priority 3: Ecosystem Evolution
New tools or approaches:
- Build tools (Vite vs Webpack)
- Testing frameworks
- Deployment patterns
- Development workflows

### Special Case: New Tool Introduction
When introducing completely new tools (not in codebase yet):
- **Use tool-introduction.md methodology** instead of gap detection
- **Assess compatibility** with existing technology stack
- **Establish baseline patterns** for future gap detection
- **Transition to normal gap detection** once tool is integrated

## Context7 Integration Strategy

### When Context7 Available
1. **Query discovered technologies** for current documentation
2. **Cross-reference patterns** found in codebase with current best practices
3. **Identify gaps** between observed patterns and current recommendations
4. **Provide targeted updates** only for identified gaps

### Context7 Query Patterns
```
# Example queries for gap identification
"React 18 useEffect best practices"
"Next.js 14 app router patterns"
"Tailwind CSS 3.4 new features"
"TypeScript 5.x configuration"
```

### Gap Documentation Format
```markdown
## [Technology] Knowledge Gap Patch

**Observed Pattern**: [What was found in codebase]
**Current Best Practice**: [What Context7 documentation shows]
**Gap Impact**: [Why this matters for the project]
**Implementation Update**: [Specific changes to make]

### Code Example
[Minimal example showing the updated pattern]
```

## Dynamic Discovery Methodology

### Technology Detection
1. **Scan dependency files** for version information
2. **Analyze import patterns** to understand usage
3. **Check configuration files** for setup approaches
4. **Identify framework patterns** in actual code

### Gap Analysis
1. **Compare discovered patterns** with known best practices
2. **Identify version-specific features** being used
3. **Check for deprecated patterns** or APIs
4. **Look for missing modern patterns**

### Targeted Enhancement
1. **Focus on specific gaps** rather than comprehensive docs
2. **Provide minimal examples** that address the gap
3. **Show integration** with existing codebase patterns
4. **Include migration paths** when applicable

## Implementation Examples

### React Hooks Gap Detection
```typescript
// Discovered pattern (potentially outdated)
useEffect(() => {
  fetchData()
}, [])

// Gap: Missing cleanup and error handling
// Context7 Query: "React 18 useEffect cleanup patterns"
// Patch: Add cleanup and error boundaries
```

### Next.js Routing Gap
```typescript
// Discovered: Pages Router pattern
import { useRouter } from 'next/router'

// Gap: App Router available in Next.js 13+
// Context7 Query: "Next.js 14 app router migration"
// Patch: Show app router equivalent
```

### Styling Gap
```css
/* Discovered: Older Tailwind patterns */
@apply flex items-center justify-center;

/* Gap: Modern Tailwind utilities
/* Context7 Query: "Tailwind CSS 3.4 new utilities"
/* Patch: Modern alternatives and new features */
```

## Quality Standards

### Gap Identification Accuracy
- **Specific**: Target exact knowledge gaps, not general concepts
- **Current**: Use latest available information from Context7
- **Relevant**: Focus on gaps that impact the specific project
- **Actionable**: Provide concrete steps to address gaps

### Context Efficiency
- **Minimal**: Only include what's needed to bridge the gap
- **Focused**: Address specific issues, not comprehensive coverage
- **Integrated**: Show how updates fit with existing code
- **Tested**: Verify that gap patches actually work

## Fallback Strategy

### When Context7 Unavailable
1. **Conservative Gap Assessment**: Only flag obvious version/API mismatches
2. **Training Data Validation**: Cross-check against known patterns
3. **Explicit Limitations**: Document what couldn't be verified
4. **Safe Recommendations**: Suggest proven, stable patterns only

### Gap Documentation Without Context7
```markdown
## Potential Knowledge Gap (Unverified)

**Observed Pattern**: [What was found]
**Potential Issue**: [Based on training data knowledge]
**Limitation**: Unable to verify current best practices
**Safe Alternative**: [Conservative recommendation]
```

## Success Metrics

### Effective Gap Patching
- Addresses actual knowledge limitations
- Provides current, accurate information
- Minimizes context pollution
- Enables better code generation
- Maintains project consistency

### Quality Indicators
- Specific gap identification (not general docs)
- Current information when available
- Clear integration guidance
- Minimal context footprint
- Measurable improvement in LLM output