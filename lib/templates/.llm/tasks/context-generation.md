# Knowledge Gap Patching Methodology

This document provides the complete methodology for identifying and patching specific knowledge gaps in LLM understanding through targeted codebase analysis and Context7 integration.

## Core Philosophy

### Knowledge Gap Patcher Principles
- **Gap-Targeted Enhancement**: Identify specific knowledge limitations rather than comprehensive documentation
- **Context7 Integration**: Leverage external documentation APIs for current best practices
- **Minimal Context Pollution**: Provide only what's needed to bridge identified gaps
- **Dynamic Discovery**: Adapt to any codebase without static templates
- **LLM Augmentation**: Enhance baseline LLM capabilities with targeted updates
- **Evidence-Based Gaps**: Every gap grounded in actual codebase vs current practice analysis

### Gap Patching Process Overview
1. **Technology Stack Discovery**: Identify technologies and versions in use
2. **Pattern Analysis**: Extract actual implementation patterns from codebase
3. **Gap Identification**: Compare discovered patterns with current best practices
4. **Context7 Enhancement**: Query current documentation for identified gaps
5. **Targeted Patch Generation**: Create minimal context updates for specific gaps

## Knowledge Gap Patching Workflow

### Step 1: Technology Stack Discovery
**Dynamic Technology Detection**: Discover technologies without predefined templates

#### Technology Detection Process
1. **Scan dependency files**: package.json, requirements.txt, go.mod, etc.
2. **Analyze import patterns**: Identify libraries and frameworks in use
3. **Check configuration files**: Build tools, linting, styling configurations
4. **Version identification**: Extract specific versions for gap analysis

#### Technology Categories for Gap Analysis
- **Frontend Frameworks**: React, Vue, Angular, Svelte patterns and versions
- **Backend Frameworks**: Express, Fastify, Next.js API routes, Django patterns
- **Database Technologies**: Prisma, Sequelize, MongoDB, SQL patterns
- **Styling Solutions**: Tailwind, styled-components, CSS-in-JS patterns
- **Integration Libraries**: Authentication, payments, external APIs

### Step 2: Gap Identification and Analysis
#### Context7 Tool Detection
- Check for available Context7 MCP tools for current documentation
- Test Context7 accessibility and functionality
- Prepare fallback methodology when Context7 unavailable

#### Gap Analysis Standards
- **Version-Specific Gaps**: Identify where codebase uses older patterns
- **API Change Gaps**: Detect deprecated or changed APIs in use
- **Pattern Evolution Gaps**: Find where newer, better patterns are available
- **Configuration Gaps**: Identify outdated setup or configuration patterns

### Step 3: Codebase Pattern Analysis
Apply gap identification methodology to analyze actual patterns:

#### Pattern Discovery for Gap Analysis
**Analysis Focus**: Compare discovered patterns with current best practices
- **Implementation Patterns**: How features are actually implemented
- **Version Usage**: Which versions and APIs are being used
- **Configuration Patterns**: Setup and configuration approaches
- **Integration Patterns**: How external services are integrated
- **Testing Approaches**: Testing patterns and coverage
- **Performance Patterns**: Optimization and performance approaches

**Gap Detection Standards**:
- Compare discovered patterns with Context7 current documentation
- Identify version-specific differences and improvements
- Find deprecated patterns or APIs in use
- Detect missing modern patterns or optimizations

### Step 4: Context7 Knowledge Gap Enhancement
#### When Context7 Available
When Context7 MCP tools are accessible:

**Enhanced Gap Analysis Process**:
- Query Context7 for technologies discovered in pattern analysis
- Cross-reference implementation patterns with current best practices
- Validate that discovered patterns align with current framework recommendations
- Identify specific gaps between observed and recommended patterns

**Context7 Query Strategy**:
- Target specific technology + version combinations
- Focus on breaking changes and new features
- Query for performance improvements and security updates
- Get migration guidance for identified gaps

**Quality Indicators**:
- Header includes: "*Knowledge gaps identified with Context7 current documentation*"
- Specific gap patches with current recommendations
- Clear migration paths for outdated patterns
- Technology versions validated against current support status

#### When Context7 Unavailable
When Context7 MCP tools are not accessible:

**Conservative Gap Analysis**:
- Rely on codebase pattern analysis and built-in training knowledge
- Focus on patterns that can be confidently identified as outdated
- Provide conservative recommendations based on stable practices
- Include limitations disclaimer in output

**Quality Indicators**:
- Header includes: "*Knowledge gap analysis based on training data (no external verification)*"
- Explicit focus on patterns that can be confidently assessed
- Conservative recommendations based on proven patterns
- Clear limitations about what couldn't be verified

### Step 5: Targeted Knowledge Patch Generation

#### Knowledge Patch Format
Generate minimal, focused patches for identified gaps:

```markdown
## [Technology] Knowledge Gap Patch

**Gap Type**: [version/api/pattern/config]
**Impact**: [breaking/enhancement/optimization]

### Current Pattern (Found in Codebase)
[Actual code pattern discovered]

### Updated Pattern (Current Best Practice)
[Context7-verified or conservatively recommended pattern]

### Migration Steps
1. [Specific step]
2. [Specific step]
3. [Specific step]

### Integration Notes
[How this fits with existing codebase patterns]
```

#### Patch Quality Standards
- **Specific**: Target exact knowledge gaps, not general concepts
- **Minimal**: Only include what's needed to bridge the gap
- **Actionable**: Provide concrete steps to address gaps
- **Integrated**: Show how updates fit with existing code
- **Current**: Use latest available information when possible

## Knowledge Gap Categories

### Priority 1: Breaking Changes
- API deprecations and removals
- Major version differences
- Security vulnerabilities in patterns
- Performance critical updates

### Priority 2: Feature Enhancements
- New features that improve existing patterns
- Performance optimizations
- Developer experience improvements
- Modern alternatives to current patterns

### Priority 3: Best Practice Evolution
- Style guide updates
- Configuration improvements
- Testing pattern updates
- Documentation improvements

## Output Format Standards

### Enhanced with Context7
```markdown
# Knowledge Gap Patches

*Enhanced with Context7 current documentation - ${timestamp}*

## High Priority Gaps
[Specific technology gaps with current solutions]

## Enhancement Opportunities
[Non-breaking improvements available]

## Migration Guidance
[Step-by-step upgrade paths]
```

### Training Data Fallback
```markdown
# Potential Knowledge Gaps

*Based on training data analysis (no external verification)*

## Identified Patterns
[Patterns that can be confidently assessed]

## Conservative Recommendations
[Safe updates based on proven practices]

## Limitations
[What couldn't be verified without current documentation]
```

## Implementation Notes

### For Agent Usage
Agents should:
1. Apply gap identification methodology from gap-identification.md
2. Use Context7 integration patterns from context7-integration.md
3. Follow quality standards throughout gap analysis
4. Reference codebase analysis methodology for discovery techniques

### For Direct LLM Usage
Any LLM can:
1. Follow this methodology sequentially for gap patching
2. Apply dynamic approach without predefined templates
3. Integrate Context7 when available, fallback gracefully when not
4. Focus on minimal, targeted knowledge updates

### Methodology Stability
Regardless of technology evolution:
- Core gap identification methods remain stable
- Context7 integration scales with any technology
- Minimal patch approach reduces context pollution
- Evidence-based analysis ensures relevance
- Focus on specific gaps rather than comprehensive coverage

## Success Criteria

### Effective Knowledge Gap Patching
1. **Targeted Updates**: Addresses specific knowledge limitations
2. **Current Information**: Uses latest available documentation
3. **Minimal Context**: Reduces information overload
4. **Actionable Guidance**: Provides concrete improvement steps
5. **Integration Quality**: Updates fit seamlessly with existing patterns

### Quality Validation
- Gap patches address actual knowledge limitations
- Recommendations are current and applicable
- Context footprint is minimal and focused
- Migration paths are clear and tested
- Integration maintains project consistency