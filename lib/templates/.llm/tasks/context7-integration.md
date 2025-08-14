# Context7 Integration for Knowledge Gap Patching

This document provides the methodology for integrating Context7 MCP tools to enhance knowledge gap identification and patching with current documentation.

## Context7 MCP Overview

### Purpose
Context7 MCP provides access to current documentation and best practices for popular technologies, enabling real-time knowledge gap patching instead of static documentation generation.

### Integration Strategy
- **Gap-Driven Queries**: Only query when specific gaps are identified
- **Targeted Enhancement**: Use Context7 to update specific knowledge areas
- **Validation Layer**: Cross-reference discovered patterns with current docs
- **Minimal Context**: Extract only what's needed to bridge identified gaps

## MCP Tool Detection and Usage

### Tool Availability Check
```typescript
// Check if Context7 MCP tools are available
const hasContext7 = await checkMCPTools(['context7_query', 'context7_search'])

if (hasContext7) {
  // Use enhanced gap patching with current docs
  await enhancedGapPatching(discoveredTechnologies)
} else {
  // Fallback to training data-based gap identification
  await conservativeGapPatching(discoveredTechnologies)
}
```

### Context7 Query Patterns

#### Technology-Specific Queries
```bash
# Framework version updates
context7_query "React 18 new features and breaking changes"
context7_query "Next.js 14 app router best practices"
context7_query "TypeScript 5.x configuration changes"

# API and pattern updates
context7_query "Tailwind CSS 3.4 new utilities and patterns"
context7_query "Prisma 5.x query patterns and performance"
context7_query "Zustand vs Redux current recommendations"

# New tool introduction queries
context7_query "shadcn/ui setup with Next.js 14 and Tailwind CSS"
context7_query "Framer Motion installation and React 18 compatibility"
context7_query "Vitest migration from Jest best practices"
```

#### Gap-Specific Queries
```bash
# When deprecated patterns are found
context7_query "React useEffect dependency array best practices 2024"
context7_query "Next.js getServerSideProps vs app router data fetching"

# When new patterns might be available
context7_query "CSS container queries browser support 2024"
context7_query "JavaScript optional chaining performance implications"
```

## Gap Patching Workflow

### Step 1: Technology Discovery + Gap Assessment
```typescript
interface TechnologyGap {
  name: string
  version: string
  observedPatterns: string[]
  potentialGaps: string[]
  priority: 'high' | 'medium' | 'low'
}

const assessTechnologyGaps = async (codebase: CodebaseAnalysis): Promise<TechnologyGap[]> => {
  const technologies = await discoverTechnologies(codebase)
  
  return technologies.map(tech => ({
    name: tech.name,
    version: tech.version,
    observedPatterns: tech.usagePatterns,
    potentialGaps: identifyPotentialGaps(tech),
    priority: calculateGapPriority(tech)
  }))
}
```

### Step 2: Context7 Enhanced Gap Validation
```typescript
const validateGapsWithContext7 = async (gaps: TechnologyGap[]): Promise<GapPatch[]> => {
  const patches: GapPatch[] = []
  
  for (const gap of gaps.filter(g => g.priority === 'high')) {
    // Query Context7 for current best practices
    const currentDocs = await context7_query(
      `${gap.name} ${gap.version} best practices and latest updates`
    )
    
    // Compare with observed patterns
    const actualGaps = comparePatterns(gap.observedPatterns, currentDocs)
    
    if (actualGaps.length > 0) {
      patches.push({
        technology: gap.name,
        gapType: determineGapType(actualGaps),
        currentPattern: gap.observedPatterns,
        recommendedPattern: extractRecommendation(currentDocs),
        migrationSteps: extractMigrationSteps(currentDocs),
        impact: assessImpact(actualGaps)
      })
    }
  }
  
  return patches
}
```

### Step 3: Targeted Knowledge Injection
```typescript
interface GapPatch {
  technology: string
  gapType: 'version' | 'api' | 'pattern' | 'config'
  currentPattern: string[]
  recommendedPattern: string
  migrationSteps: string[]
  impact: 'breaking' | 'enhancement' | 'optimization'
}

const generateKnowledgePatch = (patch: GapPatch): string => {
  return `
## ${patch.technology} Knowledge Gap Patch

**Gap Type**: ${patch.gapType}
**Impact**: ${patch.impact}

### Current Pattern (Found in Codebase)
\`\`\`typescript
${patch.currentPattern.join('\n')}
\`\`\`

### Updated Pattern (Current Best Practice)
\`\`\`typescript
${patch.recommendedPattern}
\`\`\`

### Migration Steps
${patch.migrationSteps.map((step, i) => `${i + 1}. ${step}`).join('\n')}

---
*Source: Context7 documentation query*
`
}
```

## Context7 Query Optimization

### Efficient Query Strategies

#### Batch Related Queries
```typescript
const batchContext7Queries = async (technologies: string[]): Promise<Map<string, any>> => {
  const queries = technologies.map(tech => 
    `${tech} current best practices, breaking changes, and migration guide`
  )
  
  // Execute queries in parallel but respect rate limits
  const results = await Promise.allSettled(
    queries.map(query => context7_query(query))
  )
  
  return new Map(technologies.map((tech, i) => [tech, results[i]]))
}
```

#### Smart Query Filtering
```typescript
const shouldQueryContext7 = (technology: TechnologyInfo): boolean => {
  // Only query for technologies with known evolution patterns
  const rapidlyEvolvingTechs = ['react', 'nextjs', 'typescript', 'tailwindcss']
  
  // Or when version is significantly older
  const versionGapThreshold = {
    'react': 2, // Major versions
    'nextjs': 3,
    'typescript': 1
  }
  
  return rapidlyEvolvingTechs.includes(technology.name.toLowerCase()) ||
         hasSignificantVersionGap(technology, versionGapThreshold)
}
```

### Query Result Processing

#### Extract Actionable Information
```typescript
const processContext7Response = (response: any, context: CodebaseContext): GapAnalysis => {
  return {
    // Extract only relevant differences
    patternDifferences: extractPatternDiffs(response, context.observedPatterns),
    
    // Focus on breaking changes
    breakingChanges: extractBreakingChanges(response, context.version),
    
    // New features that could improve the codebase
    opportunities: extractOpportunities(response, context.usagePatterns),
    
    // Migration complexity assessment
    migrationEffort: assessMigrationEffort(response, context.codebase)
  }
}
```

## Integration with Codebase Analysis

### Enhanced Pattern Discovery
```typescript
const enhancedPatternAnalysis = async (codebase: string[]): Promise<EnhancedPatterns> => {
  // Standard pattern discovery
  const discoveredPatterns = await analyzeCodebasePatterns(codebase)
  
  // Context7 enhancement
  if (await hasContext7Access()) {
    const currentBestPractices = await context7_query(
      `${discoveredPatterns.technologies.join(', ')} current patterns and best practices`
    )
    
    return {
      ...discoveredPatterns,
      gapAnalysis: compareWithCurrent(discoveredPatterns, currentBestPractices),
      recommendations: generateRecommendations(currentBestPractices),
      migrationPaths: extractMigrationPaths(currentBestPractices)
    }
  }
  
  return discoveredPatterns
}
```

### Context-Aware Gap Identification
```typescript
const identifyContextualGaps = async (
  patterns: CodePatterns,
  projectContext: ProjectContext
): Promise<ContextualGap[]> => {
  const gaps: ContextualGap[] = []
  
  // Query for project-type specific best practices
  const projectSpecificDocs = await context7_query(
    `${projectContext.type} project ${patterns.technologies.join(' ')} best practices`
  )
  
  // Compare with discovered patterns
  for (const pattern of patterns.implementations) {
    const currentRecommendation = extractRecommendation(
      projectSpecificDocs,
      pattern.type,
      pattern.usage
    )
    
    if (hasSignificantDifference(pattern.implementation, currentRecommendation)) {
      gaps.push({
        pattern: pattern.type,
        current: pattern.implementation,
        recommended: currentRecommendation,
        context: projectContext,
        priority: calculateContextualPriority(pattern, projectContext)
      })
    }
  }
  
  return gaps
}
```

## Output Format Standards

### Gap Patch Structure
```markdown
# Knowledge Gap Patches

*Enhanced with Context7 current documentation - ${new Date().toISOString()}*

## High Priority Gaps

### React useEffect Patterns
**Found**: Dependencies missing from effect array
**Current Best Practice**: Include all used variables in dependencies
**Migration**: Add exhaustive-deps ESLint rule and fix warnings
**Source**: React 18 documentation via Context7

### Next.js Data Fetching
**Found**: getServerSideProps usage in new components
**Current Best Practice**: Use Server Components in app router
**Migration**: Migrate pages to app directory structure
**Source**: Next.js 14 documentation via Context7

## Medium Priority Opportunities

### Tailwind CSS Updates
**Found**: Using @apply directives extensively
**Current Best Practice**: Prefer utility classes over @apply
**Benefit**: Better tree-shaking and performance
**Source**: Tailwind CSS 3.4 documentation via Context7
```

### Fallback Format (No Context7)
```markdown
# Potential Knowledge Gaps

*Based on codebase analysis + training data (no external verification)*

## Potential Issues Identified

### React Patterns
**Observed**: useEffect without cleanup in component
**Potential Issue**: Memory leaks in unmounted components
**Conservative Fix**: Add cleanup function to effects
**Limitation**: Cannot verify current React 18+ recommendations

### Build Configuration
**Observed**: Webpack 4 configuration patterns
**Potential Issue**: Missing performance optimizations
**Conservative Fix**: Update to Webpack 5 stable patterns
**Limitation**: Cannot verify latest optimization strategies
```

## Error Handling and Fallbacks

### Context7 Failure Handling
```typescript
const robustGapPatching = async (technologies: TechnologyGap[]): Promise<string> => {
  try {
    // Attempt Context7 enhanced patching
    const enhancedPatches = await enhancedGapPatching(technologies)
    return formatEnhancedPatches(enhancedPatches)
    
  } catch (context7Error) {
    console.warn('Context7 unavailable, falling back to training data analysis')
    
    // Conservative gap analysis using training data
    const conservativePatches = await conservativeGapAnalysis(technologies)
    return formatConservativePatches(conservativePatches)
  }
}
```

### Rate Limiting and Caching
```typescript
const cachedContext7Query = async (query: string): Promise<any> => {
  const cacheKey = hashQuery(query)
  const cached = await getCached(cacheKey)
  
  if (cached && !isCacheStale(cached, maxAge: '1day')) {
    return cached.data
  }
  
  // Respect rate limits
  await rateLimitDelay()
  
  const result = await context7_query(query)
  await setCached(cacheKey, result)
  
  return result
}
```

## Success Metrics

### Effective Context7 Integration
- **Gap Accuracy**: Identified gaps are actual knowledge limitations
- **Current Information**: Context7 data is recent and applicable
- **Minimal Overhead**: Only query when gaps are detected
- **Actionable Output**: Patches provide concrete improvement steps
- **Integration Quality**: Updates fit seamlessly with existing code

### Quality Indicators
- Specific gap identification with current solutions
- Minimal false positives (gaps that aren't actually gaps)
- Clear migration paths when changes are needed
- Efficient Context7 usage (targeted queries only)
- Measurable improvement in code generation quality