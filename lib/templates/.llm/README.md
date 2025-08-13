# AIFW Project Reference Guide

**Your local guide to LLM-optimized development**

This framework creates documentation designed for AI consumption. Dense, structured, machine-readable format optimized for perfect LLM comprehension.

## Quick Start

### For Any LLM
```
"Generate comprehensive project context using AIFW templates in .llm/templates/"
"Read methodology from .llm/tasks/ for analysis approach"
"Output context files to .llm/context/ folder"
```

### For Claude Code Users (Enhanced Automation)
```bash
@aifw-meta generate comprehensive project context
```

### Manual Context Generation
1. Read methodology from `.llm/tasks/` folder
2. Analyze your codebase following the guidelines
3. Use templates in `.llm/templates/` for structure
4. Generate context files in `.llm/context/`

## Framework Structure

```
.llm/
├── README.md              # This reference guide
├── tasks/                 # Universal methodology (any LLM can read)
│   ├── codebase-analysis.md    # How to discover project reality
│   ├── context-generation.md   # Universal generation process
│   ├── quality-standards.md    # What makes good context
│   └── template-mapping.md     # Working with any template structure
├── templates/             # Structure guides for output
│   ├── project.md         # Project facts and constraints
│   ├── patterns.md        # Code conventions and patterns
│   └── decisions.md       # Technology choices and rationale
└── context/               # Generated LLM-optimized files
    ├── project.md         # Your project's current reality
    ├── patterns.md        # Your project's implementation patterns
    └── decisions.md       # Your project's technology decisions

.claude/                   # Claude Code automation (optional)
└── agents/                # Specialized automation agents
    ├── aifw-meta.md       # Coordination and delegation
    ├── aifw-context-builder.md # Context generation worker
    └── aifw-agent-builder.md   # Specialized agent creator
```

## How AIFW Works

### 1. Universal Methodology
The `.llm/tasks/` folder contains platform-agnostic instructions that any LLM can follow:
- **codebase-analysis.md**: How to discover project reality through file analysis
- **context-generation.md**: Universal process for creating optimized context
- **quality-standards.md**: What constitutes high-quality LLM documentation
- **template-mapping.md**: How to work with evolving template structures

### 2. Template Structure
The `.llm/templates/` folder provides structure for consistent output:
- **project.md**: Facts about current project state (WHAT)
- **patterns.md**: Implementation details and processes (HOW)  
- **decisions.md**: Technology choices and rationale (WHY)

### 3. Generated Context
The `.llm/context/` folder contains your project's AI-ready documentation:
- Dense, structured information optimized for machine consumption
- Evidence-based content derived from actual codebase analysis
- Current project reality, not generic examples

## Common Workflows

### Initial Setup
```bash
# Already done if you ran: npx jubalm/aifw init
# Context files will be generated in .llm/context/
```

### Context Generation

#### Automated (Claude Code)
```bash
@aifw-meta generate comprehensive project context
# Analyzes project, coordinates parallel generation
# Creates all context files automatically
```

#### Manual (Any LLM)
```
1. Tell your LLM: "Read .llm/tasks/codebase-analysis.md and analyze this project"
2. Then: "Generate project context using .llm/templates/project.md structure"  
3. Repeat for patterns.md and decisions.md
4. Save output to .llm/context/ folder
```

#### Copy-Paste (Web LLMs)
For ChatGPT, Gemini, etc.:
1. Copy content from `.llm/tasks/codebase-analysis.md`
2. Paste in chat with: "Analyze my project following this methodology"
3. Copy relevant template from `.llm/templates/`
4. Paste with: "Generate context using this template structure"
5. Save response to appropriate `.llm/context/` file

### Using Generated Context

#### With Any LLM
```
"Read the project context from .llm/context/ folder"
"Generate code following the patterns documented there"
"Make decisions consistent with the documented approach"
```

#### For Development Tasks
```
"Based on .llm/context/patterns.md, create a new component that follows our conventions"
"Using .llm/context/decisions.md, recommend the best approach for [specific problem]"
"According to .llm/context/project.md, what's our current tech stack?"
```

### Context Updates

#### When to Update
- New frameworks or major dependencies added
- Architecture or pattern changes
- Team workflow modifications
- Major feature additions that change project structure

#### How to Update
**Automated**: Re-run `@aifw-meta generate comprehensive project context`
**Manual**: Re-analyze changed areas and update relevant context files

## Enhancement: Context7 Integration

### Recommended Setup
```bash
# For enhanced analysis with current best practices
claude mcp add context7 -- npx -y @upstash/context7-mcp
```

### Benefits When Available
- **Current Standards**: Analysis enhanced with up-to-date documentation
- **Pattern Validation**: Cross-reference code patterns with latest framework versions
- **Modern Alternatives**: Recommendations for outdated approaches discovered

### Graceful Degradation
AIFW works perfectly without Context7:
- Uses codebase analysis + built-in training knowledge
- Generated files note: "*Analysis based on codebase discovery + training data*"
- Focus on patterns actually observed in codebase

## Quality Assurance

### Context Validation Checklist
- [ ] No placeholder text in generated files
- [ ] All version numbers verified from actual package files
- [ ] Directory structures match actual project
- [ ] Technology claims supported by file evidence
- [ ] Content follows template boundaries (WHAT/HOW/WHY)

### Common Issues and Fixes

#### Generic Content
**Problem**: Context could apply to any project
**Fix**: Re-analyze with focus on project-specific evidence
**Example**: "React application" → "E-commerce platform with 47 product components"

#### Missing Specificity
**Problem**: Technologies listed without versions
**Fix**: Extract exact versions from package.json, requirements.txt, etc.
**Example**: "Uses React" → "React 18.2.0 (package.json:dependencies)"

#### Boundary Violations
**Problem**: Wrong content type in template
**Fix**: Move content to appropriate template
**Example**: Technology rationale in project.md → move to decisions.md

## Team Collaboration

### Shared Context Benefits
- **Universal Understanding**: All team members' LLMs understand the project identically
- **Onboarding Efficiency**: New developers' AI tools instantly grasp project context
- **Consistency**: All AI interactions based on same factual foundation
- **Platform Flexibility**: Use any LLM without losing context quality

### Mixed Team Scenarios
- **Claude Code users**: Get automated context generation and specialized agents
- **Other AI tools**: Use manual process with same methodology and templates
- **Traditional developers**: Can read context files for project understanding

### Context Maintenance
- Designate team member for context updates
- Include context updates in major feature planning
- Review context files during architecture reviews
- Update templates as project patterns evolve

## Troubleshooting

### Context Generation Issues
**Empty or generic output**: LLM didn't follow methodology → provide clearer instructions
**Missing versions**: LLM didn't analyze package files → specify file analysis requirements
**Wrong focus**: Content in wrong template → clarify template boundaries (WHAT/HOW/WHY)

### Enhancement Tool Issues
**Context7 not working**: Check MCP installation and Claude Code configuration
**Outdated recommendations**: Context7 may need library ID resolution
**No enhancement available**: Framework works fine with codebase analysis only

### Template Evolution
**New project needs**: Customize templates in `.llm/templates/` as needed
**Template conflicts**: Resolve by clarifying content boundaries in local templates
**Version mismatches**: Update templates when AIFW framework updates

## Advanced Usage

### Template Customization
- Modify `.llm/templates/` files for project-specific needs
- Add new templates for specialized context (API docs, deployment, etc.)
- Maintain template-agnostic approach using `.llm/tasks/template-mapping.md`

### Integration with Other Tools
- **Documentation generators**: Use context files as input for human docs
- **Linting/formatting**: Include context validation in CI/CD
- **Project scaffolding**: Use context to generate consistent project structures

### Platform-Specific Automation
- **Claude Code**: Full automation with intelligent agents
- **Cursor/VSCode**: Future scripts planned for enhanced integration
- **Other platforms**: Build custom automation around `.llm/tasks/` methodology

## Framework Philosophy

### LLM-First Design
- Documentation optimized for AI consumption, not human readability
- Dense, structured format for maximum context in minimal tokens
- Evidence-based content grounded in actual project analysis
- Current standards integration when enhancement tools available

### Universal Compatibility
- Works with any LLM or AI development tool
- Platform-agnostic methodology in `.llm/tasks/`
- Enhanced automation for platforms that support it (Claude Code)
- Manual fallback procedures for any development environment

### Future-Proof Architecture
- Template-agnostic methodology handles template evolution
- Enhancement tool integration adapts to new analysis capabilities
- Evidence-based approach remains stable regardless of framework changes
- Universal structure supports emerging AI development platforms

---

**Transform your development from explaining context to making decisions while perfectly-informed LLMs execute flawlessly.**