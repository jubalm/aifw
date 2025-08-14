# AIFW Knowledge Gap Patcher

**AI Framework for Workflows - Pure Discovery Approach**

This framework identifies and patches specific knowledge gaps in LLM understanding through targeted codebase analysis and Context7 integration. No templates, no static documentation - just smart gap identification.

## Quick Start

### For Any LLM
```
"Apply gap identification methodology from .llm/tasks/gap-identification.md"
"Use Context7 integration patterns from .llm/tasks/context7-integration.md when available"
"Generate minimal knowledge patches for identified gaps only"
```

### For Claude Code Users (Enhanced with Context7)
```bash
@aifw-meta identify and patch knowledge gaps
```

### Manual Gap Analysis
1. Read gap identification methodology from `.llm/tasks/gap-identification.md`
2. Apply codebase analysis from `.llm/tasks/codebase-analysis.md`
3. Use Context7 integration when available
4. Generate targeted knowledge patches only

## Framework Structure

```
.llm/
├── README.md              # This guide
├── tasks/                 # Universal methodology (any LLM can read)
│   ├── gap-identification.md    # How to identify knowledge gaps
│   ├── context7-integration.md  # Context7 MCP enhancement methodology
│   ├── codebase-analysis.md     # How to analyze for gap detection
│   └── context-generation.md    # Core gap patching methodology
└── context/               # Generated gap patches (as needed)
    └── [technology]-gaps.md     # Specific knowledge gap patches

.claude/                   # Claude Code automation (optional)
└── agents/                # Specialized automation agents
    ├── aifw-meta.md       # Coordination and delegation
    └── aifw-gap-patcher.md # Knowledge gap detection worker
```

## How AIFW Knowledge Gap Patcher Works

### 1. Dynamic Technology Discovery
Instead of predefined templates, the framework discovers technologies in use:
- **Package Analysis**: Scans package.json, requirements.txt, etc. for versions
- **Import Pattern Analysis**: Identifies libraries and frameworks actually used
- **Configuration Discovery**: Finds build tools, linting, styling configurations
- **Version Gap Detection**: Compares discovered versions with modern patterns

### 2. Knowledge Gap Identification
Identifies specific areas where LLM knowledge may be outdated:
- **Version Gaps**: Newer versions of familiar libraries with breaking changes
- **API Evolution**: Deprecated patterns still in use
- **Pattern Modernization**: Better alternatives to current implementations
- **Configuration Updates**: Modern setup patterns for discovered technologies

### 3. Context7 Enhanced Analysis
When Context7 MCP is available:
- **Current Documentation**: Queries latest documentation for discovered technologies
- **Pattern Validation**: Cross-references codebase patterns with current best practices
- **Migration Guidance**: Gets specific upgrade paths for identified gaps
- **Security Updates**: Identifies security improvements in newer versions

### 4. Targeted Knowledge Patches
Generates minimal, focused patches only for identified gaps:
```markdown
## React useEffect Knowledge Gap Patch

**Gap Type**: pattern
**Technology**: React 18
**Impact**: enhancement

### Current Pattern (Found in Codebase)
useEffect(() => { fetchData() }, []) // Missing cleanup

### Updated Pattern (Current Best Practice)  
useEffect(() => {
  const controller = new AbortController()
  fetchData(controller.signal)
  return () => controller.abort()
}, [])

### Migration Steps
1. Add AbortController to data fetching effects
2. Pass signal to fetch requests
3. Return cleanup function
```

## Common Workflows

### Initial Gap Analysis
```bash
# Automated (Claude Code with Context7)
@aifw-meta identify and patch knowledge gaps

# Manual (Any LLM)
"Apply gap identification methodology from .llm/tasks/gap-identification.md to analyze this codebase"
```

### Technology-Specific Gap Detection
```bash
# React patterns
"Check for React 18 vs React 17 pattern gaps in this codebase"

# Next.js routing
"Identify Next.js Pages Router vs App Router gaps"

# Tailwind CSS
"Find Tailwind CSS 2.x vs 3.x configuration gaps"
```

### Using Gap Patches
```bash
# Development with gap awareness
"Based on identified gaps in .llm/context/, implement [feature] using current best practices"

# Pattern updates
"Apply the React useEffect gap patch to update this component"

# Migration planning
"Using identified gaps, create migration plan for Next.js App Router"
```

## Gap Categories

### Priority 1: Breaking Changes
- API deprecations and removals
- Major version differences affecting functionality
- Security vulnerabilities in current patterns
- Performance critical updates

### Priority 2: Enhancement Opportunities
- New features that improve existing patterns
- Performance optimizations available
- Developer experience improvements
- Modern alternatives to current approaches

### Priority 3: Best Practice Evolution
- Style guide updates
- Configuration improvements
- Testing pattern modernization
- Tooling updates

## Context7 Integration

### Setup (Recommended)
```bash
# Enhanced analysis with current documentation
claude mcp add context7 -- npx -y @upstash/context7-mcp
```

### Benefits When Available
- **Current Information**: Real-time access to latest documentation
- **Pattern Validation**: Verify discovered patterns against current recommendations  
- **Migration Guidance**: Get specific upgrade paths from official docs
- **Security Updates**: Latest security best practices

### Graceful Fallback
Works perfectly without Context7:
- Uses training data knowledge for gap identification
- Conservative recommendations based on proven patterns
- Notes: "*Gap analysis based on training data (no external verification)*"
- Focus on patterns that can be confidently identified as outdated

## Quality Standards

### Effective Gap Patching
- **Targeted**: Addresses specific knowledge limitations only
- **Current**: Uses latest available information when possible
- **Minimal**: Reduces context pollution and information overload
- **Actionable**: Provides concrete steps to address identified gaps
- **Integrated**: Shows how updates fit with existing codebase patterns

### Gap Identification Accuracy
- **Specific**: Target exact knowledge gaps, not general concepts
- **Relevant**: Focus on gaps that impact the specific project
- **Validated**: Use Context7 when available for verification
- **Conservative**: Avoid false positives when uncertain

## Framework Evolution

### No Static Templates
Instead of maintaining comprehensive templates that become outdated:
- **Dynamic Discovery**: Identifies what's actually in use
- **Targeted Updates**: Patches only identified knowledge gaps
- **Self-Updating**: Context7 integration provides current information
- **Minimal Footprint**: Reduces context pollution

### Advantages Over Template Approach
- **Always Current**: Context7 provides latest best practices
- **Project-Specific**: Only addresses actual gaps in the codebase
- **Lightweight**: Minimal context instead of comprehensive documentation
- **Adaptable**: Works with any technology stack without predefined templates

## Troubleshooting

### Gap Detection Issues
**No gaps identified**: May indicate very current codebase or conservative analysis
**Too many gaps**: Prioritize by impact (breaking > enhancement > style)
**False positives**: Verify with Context7 or use conservative fallback

### Context7 Issues
**Context7 not available**: Framework works fine with training data analysis
**Outdated Context7 responses**: Technology documentation may be evolving rapidly
**Rate limiting**: Use batch queries and caching strategies

### Integration Issues
**Gap patches don't apply**: Verify codebase analysis accuracy
**Conflicting recommendations**: Prioritize by project-specific context
**Migration complexity**: Break down large gaps into smaller, manageable steps

## Advanced Usage

### Custom Gap Detection
- Modify gap identification methodology for specific technology focuses
- Add domain-specific knowledge gap categories
- Integrate with project-specific linting or analysis tools

### Automation Integration
- **CI/CD Integration**: Run gap analysis on dependency updates
- **Pull Request Checks**: Identify knowledge gaps in code changes
- **Documentation Updates**: Generate gap patches for team knowledge sharing

### Platform-Specific Enhancement
- **Claude Code**: Full automation with Context7 integration
- **Other LLMs**: Manual application of gap identification methodology
- **Future Tools**: Universal methodology supports any AI development environment

## Success Metrics

### Effective Knowledge Gap Patching
1. **Reduced Context Pollution**: Only necessary information provided
2. **Current Best Practices**: Leverages latest available documentation
3. **Actionable Improvements**: Clear migration paths for identified gaps
4. **Project Relevance**: Gaps directly applicable to actual codebase
5. **Measurable Impact**: Better code generation from LLMs

### Quality Indicators
- Gap patches address actual knowledge limitations
- Recommendations are current and applicable when Context7 available
- Context footprint is minimal and focused
- Migration paths are clear and testable
- Integration maintains project consistency

---

**Transform comprehensive documentation into targeted knowledge enhancement - providing LLMs exactly what they need to know, when they need to know it.**