# Quality Standards for Context Generation

This document defines what constitutes high-quality, LLM-optimized context across all template types.

## Core Quality Principles

### 1. Evidence-Based Content
**Requirement**: Every statement must be grounded in discoverable evidence
- Technology versions from actual package files
- Patterns observed in actual codebase
- Directory structures from real file system analysis
- Configuration details from actual config files

**Bad Example**: "Uses React for the frontend"
**Good Example**: "React 18.2.0 (package.json:dependencies, 247 component files in src/)"

### 2. LLM Optimization
**Requirement**: Content optimized for machine parsing and comprehension
- Dense information with minimal prose
- Consistent formatting patterns
- Hierarchical structure with clear headings
- Bullet points over paragraphs

**Bad Example**: "The project utilizes a modern JavaScript framework called React, version 18, along with TypeScript for type safety and Tailwind CSS for styling purposes."
**Good Example**: 
```
- Framework: React 18.2.0
- Language: TypeScript 5.2.1  
- Styling: Tailwind CSS 3.3.6
```

### 3. Current Accuracy
**Requirement**: Information reflects current project state, not assumptions
- No placeholder text or generic examples
- Specific to the analyzed project
- Version numbers from actual dependencies
- Patterns from real code analysis

### 4. Clear Boundaries
**Requirement**: Content stays within template scope (WHAT vs HOW vs WHY)
- Project templates: Facts only, no rationale
- Pattern templates: Implementation only, no decisions
- Decision templates: Rationale only, no current state

## Quality Metrics by Template Type

### Project Context Quality Standards

#### Technology Stack Requirements
- **Version Specificity**: All technologies include exact version numbers
- **Source Attribution**: Version source clearly indicated (package.json, requirements.txt)
- **Completeness**: Cover frontend, backend, database, infrastructure as applicable
- **Evidence**: Technology presence verified through file analysis

#### Current State Requirements
- **Development Phase**: Inferred from version numbers, git activity, TODO comments
- **Active Work**: Based on recent commits, open branches, development activity
- **Constraints**: Only factual constraints discoverable from code/config

#### Quality Checklist
- [ ] All version numbers verified from package files
- [ ] No WHY explanations (belongs in decisions.md)
- [ ] No HOW implementations (belongs in patterns.md)
- [ ] Current state reflects actual project analysis
- [ ] External integrations listed with evidence

### Pattern Context Quality Standards

#### Code Organization Requirements
- **Real Structure**: Directory listing from actual file system
- **File Counts**: Specific numbers of components, hooks, utilities discovered
- **Naming Patterns**: Observed from actual file and function names
- **Co-location**: Tested relationships (tests, styles, types) verified

#### Development Practices Requirements
- **Workflow Evidence**: Scripts from package.json, git hooks from config
- **Testing Approach**: Test frameworks from dependencies, patterns from analysis
- **Style Standards**: ESLint/Prettier configs, observed code patterns
- **Build Process**: Build tools and scripts from actual configuration

#### Quality Checklist
- [ ] Directory structure matches actual project
- [ ] File counts and patterns verified through analysis
- [ ] No WHY explanations (belongs in decisions.md)
- [ ] No technology lists without implementation context
- [ ] Development workflow based on discovered scripts/configs

### Decision Context Quality Standards

#### Rationale Requirements
- **Decision Structure**: Decision/Why/Alternatives/Trade-offs format
- **Evidence Sources**: Commit messages, code comments, architecture choices
- **Constraint Analysis**: Business/team/technical constraints inferred from codebase
- **Trade-off Documentation**: Visible compromises and their reasoning

#### Enhancement Integration
- **Context7 Insights**: Current architectural recommendations when available
- **Modern Alternatives**: Current best practices vs discovered patterns
- **Evolution Path**: Upgrade considerations based on current standards

#### Quality Checklist
- [ ] Decisions follow structured format (Decision/Why/Alternatives/Trade-offs)
- [ ] No current state facts (belongs in project.md)
- [ ] No implementation details (belongs in patterns.md)
- [ ] Rationale inferred from discoverable evidence
- [ ] Enhanced with current standards when Context7 available

## Enhancement Tool Integration Standards

### Context7 Available
When Context7 MCP tools are accessible:

#### Usage Requirements
- Query Context7 for technologies discovered in codebase analysis
- Cross-reference patterns with current framework documentation
- Validate that discovered approaches are still recommended
- Include modern alternatives for any deprecated patterns found

#### Quality Indicators
- Header includes: "*Analysis enhanced with Context7 current documentation*"
- Decision rationale includes current architectural recommendations
- Pattern analysis notes modern vs legacy approaches
- Technology versions validated against current support status

### Context7 Unavailable
When Context7 MCP tools are not accessible:

#### Fallback Standards
- Rely on codebase analysis and built-in training knowledge
- Focus on patterns actually observed in the codebase
- Include limitations disclaimer in output
- Avoid speculation about current best practices

#### Quality Indicators
- Header includes: "*Analysis based on codebase discovery + training data*"
- Explicit focus on observed patterns rather than assumed best practices
- Caveat about potentially outdated patterns
- Conservative recommendations based on stable, well-established practices

## Content Validation Checklist

### Pre-Generation Validation
- [ ] Template scope understood (WHAT/HOW/WHY)
- [ ] Codebase analysis completed with evidence collected
- [ ] Enhancement tools tested for availability
- [ ] Target output format confirmed

### Content Quality Validation
- [ ] No placeholder text remains
- [ ] All version numbers verified from actual files
- [ ] Directory structures match actual project
- [ ] Technology claims supported by evidence
- [ ] Content density optimized for LLM consumption

### Boundary Validation
- [ ] Content stays within template scope
- [ ] No overlap with other template types
- [ ] Clear separation of concerns maintained
- [ ] Evidence sources appropriate for template type

### Enhancement Validation
- [ ] Context7 status correctly indicated in header
- [ ] Current standards integrated where available
- [ ] Limitations properly acknowledged where applicable
- [ ] Modern alternatives noted for legacy patterns

## Common Quality Issues and Fixes

### Issue: Generic Template Content
**Problem**: Content could apply to any project
**Fix**: Replace with project-specific analysis results
**Example**: "Modern React application" → "E-commerce platform with 47 product components, Stripe integration"

### Issue: Missing Version Specificity
**Problem**: Technologies listed without versions
**Fix**: Extract exact versions from package files
**Example**: "Uses React and TypeScript" → "React 18.2.0, TypeScript 5.2.1"

### Issue: Assumed Best Practices
**Problem**: Recommending patterns not found in codebase
**Fix**: Document only observed patterns, note Context7 alternatives
**Example**: Document actual testing approach, not ideal testing approach

### Issue: Boundary Violations
**Problem**: WHY content in WHAT templates
**Fix**: Move rationale to appropriate template
**Example**: Technology choices explained in project.md → move to decisions.md

### Issue: Insufficient Evidence
**Problem**: Claims without discoverable support
**Fix**: Provide file paths, line numbers, or analysis evidence
**Example**: "Uses microservices" → "3 service directories: api/, auth/, billing/ with separate package.json files"