# Context Generation Methodology

This document explains the universal process for generating LLM-optimized context files from codebase analysis.

## Generation Philosophy

### LLM-First Design
- **Dense information**: Maximum context in minimal tokens
- **Structured format**: Consistent patterns LLMs can parse perfectly
- **Evidence-based**: Every statement grounded in codebase analysis
- **Current focus**: Use actual project patterns, not outdated assumptions

### Universal Process
1. **Template Structure**: Read assigned template for output structure
2. **Codebase Analysis**: Apply analysis methodology to discover project reality
3. **Enhancement**: Use available tools (Context7, etc.) for current best practices
4. **Generation**: Create content that balances density with accuracy

## Context Generation Workflow

### Step 1: Template Understanding
- Read the assigned template file to understand required structure
- Identify placeholder sections that need actual project data
- Note any specific formatting requirements or conventions
- Understand the template's focus area (WHAT vs HOW vs WHY)

### Step 2: Analysis Preparation
- Check for available enhancement tools (Context7, documentation APIs)
- Determine analysis scope based on template requirements
- Prepare to gather evidence for every claim you'll make

### Step 3: Targeted Codebase Analysis
Apply analysis methodology focusing only on areas relevant to your assigned template:

#### For Project Overview Templates
- Technology stack with exact versions
- Project purpose and current development state
- Key dependencies and external integrations
- Environment setup and build requirements

#### For Pattern Templates  
- Code organization and directory structure
- Naming conventions and style patterns
- Development practices and workflow
- Testing strategies and quality gates

#### For Decision Templates
- Technology choice rationale (inferred from comments, commit messages)
- Architecture decisions (inferred from code structure)
- Constraint evidence (performance needs, team size, timeline pressures)
- Trade-offs visible in codebase choices

### Step 4: Enhancement Integration
When enhancement tools are available:

#### Context7 Integration
- Query for current best practices related to discovered technologies
- Validate that discovered patterns align with current standards
- Identify any deprecated approaches in existing codebase
- Enhance decision rationale with current architectural recommendations

#### Documentation APIs
- Cross-reference discovered patterns with official documentation
- Validate version compatibility and current support status
- Identify migration paths for outdated dependencies

### Step 5: Content Generation
- Create dense, factual content optimized for LLM consumption
- Include specific evidence for every claim (file paths, version numbers)
- Use bullet points over prose for better parsing
- Focus on current project reality, not generic examples

## Writing Style Guidelines

### Information Density
- **Good**: "React 18.2.0, TypeScript 5.2.1, Vite 4.5.0"
- **Bad**: "The project utilizes React along with TypeScript and uses Vite as the build tool"

### Evidence-Based Claims
- **Good**: "Jest 29.1.0 with React Testing Library 13.4.0 (package.json:devDependencies)"
- **Bad**: "Uses Jest for testing"

### Specific Over General
- **Good**: "Components in src/components/ with co-located tests in __tests__ folders (15 components analyzed)"
- **Bad**: "Components are organized in a structured way"

### Current Information
- Always use actual project data, never placeholders
- Include version numbers from actual package files
- Reference real directory structures and file counts
- Quote actual configuration values

## Template-Specific Guidelines

### Project Context (WHAT & CURRENT STATE)
**Focus**: Facts about the current project state
**Include**: 
- Technology stack with specific versions
- Project purpose and development phase
- Key dependencies and external services
- Environment requirements and setup

**Avoid**:
- Explaining WHY technologies were chosen
- Documenting HOW code is organized
- Decision rationale or trade-offs

### Pattern Context (HOW & IMPLEMENTATION)
**Focus**: Implementation details and code organization
**Include**:
- Directory structure and file organization
- Naming conventions and coding patterns
- Development workflow and practices
- Testing strategies and quality processes

**Avoid**:
- Explaining WHY patterns were chosen
- Listing technologies without implementation context
- Decision rationale or constraints

### Decision Context (WHY & RATIONALE)
**Focus**: Reasoning behind technology and architecture choices
**Include**:
- Technology choice rationale with alternatives considered
- Architecture decisions with trade-offs
- Business constraints that influenced technical choices
- Lessons learned and future considerations

**Avoid**:
- Documenting current state facts
- Explaining implementation details
- Directory structures or code organization

## Quality Assurance

### Accuracy Checks
- Every technology mentioned must be discovered in codebase analysis
- Every pattern documented must be observed in actual code
- Version numbers must match actual dependencies
- Examples must come from real project analysis

### Enhancement Status
When enhancement tools are available, include:
- "*Analysis enhanced with Context7 current documentation*"
- References to current best practices where applicable
- Notes about modern alternatives to discovered legacy patterns

When enhancement tools are unavailable, include:
- "*Analysis based on codebase discovery + training data*"
- Focus on patterns actually observed in the codebase
- Caveat about potentially outdated patterns

### Completeness Standards
- No placeholder text in generated output
- Information specific to the actual project analyzed
- Content dense but readable for LLM consumption
- Clear boundaries maintained between template types

## Output Format Standards

### File Headers
Include generation metadata:
```markdown
# [Template Type] Context
*Analysis enhanced with Context7 current documentation*
[or]
*Analysis based on codebase discovery + training data*

[Generated content follows...]
```

### Evidence Attribution
Include source references where helpful:
```markdown
## Technology Stack
### Frontend
- Framework: React 18.2.0 (package.json)
- Language: TypeScript 5.2.1 (devDependencies)
- Build Tool: Vite 4.5.0 (vite.config.ts detected)
```

### Structured Information
Use consistent formatting for easy LLM parsing:
- Hierarchical headings for organization
- Bullet points for lists and features
- Code blocks for examples and configurations
- Tables for comparative information when relevant