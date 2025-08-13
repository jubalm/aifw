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
│   └── context-generation.md   # Complete generation methodology (integrated)
├── templates/             # Template-agnostic templates (discovered dynamically)
│   ├── business-logic.md       # Complete business domain story template
│   ├── data-management.md      # Complete data architecture story template
│   ├── integrations.md         # Complete external services story template (includes auth)
│   ├── operations.md           # Complete deployment & operations story template
│   └── user-experience.md      # Complete user interface story template
└── context/               # Generated context files (template-agnostic)
    ├── business-logic.md       # Your project's complete business story
    ├── data-management.md      # Your project's complete data story
    ├── integrations.md         # Your project's complete integration story
    ├── operations.md           # Your project's complete operations story
    └── user-experience.md      # Your project's complete UX story

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
- **context-generation.md**: Complete integrated methodology (includes quality standards, template flexibility, enhancement integration)

### 2. Template-Agnostic Templates
The `.llm/templates/` folder provides template structures discovered dynamically by the universal methodology:
- **Template Discovery**: Methodology scans templates directory to work with any structure
- **Current Templates**: business-logic.md, data-management.md, integrations.md (includes auth), operations.md, user-experience.md
- **Template Evolution**: Framework automatically adapts to template changes without breaking

### 3. Generated Context Files
The `.llm/context/` folder contains complete stories about your project's capabilities:
- Template-agnostic generation works with any template structure
- Each file tells complete story from technical implementation to business value
- Cross-cutting concerns captured within relevant context
- Evidence-based content derived from actual codebase analysis
- Universal methodology ensures consistent quality across all templates

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
1. Tell your LLM: "Read .llm/tasks/context-generation.md for complete methodology"
2. Then: "Apply methodology to generate context for available templates in .llm/templates/"
3. Methodology handles template discovery, analysis, and generation automatically
4. Save each generated file to .llm/context/ folder
```

#### Copy-Paste (Web LLMs)
For ChatGPT, Gemini, etc.:
1. Copy content from `.llm/tasks/context-generation.md`
2. Paste with: "Apply this methodology to analyze my project and generate context"
3. Methodology includes template discovery, so it will work with any template structure
4. Save responses to appropriate `.llm/context/` files
5. Methodology handles quality standards and template flexibility automatically

### Using Generated Context

#### With Any LLM
```
"Read the project context from .llm/context/ folder"
"Generate code following the patterns documented there"
"Make decisions consistent with the documented approach"
```

#### For Development Tasks
```
"Based on context files in .llm/context/, implement [specific feature]"
"Using .llm/context/data-management.md, create a new data model following our patterns"
"According to .llm/context/user-experience.md, build a component that matches our design system"
"From .llm/context/integrations.md, add integration following our established patterns"
"Using .llm/context/business-logic.md, implement workflow validation rules"
"Following .llm/context/operations.md, set up deployment pipeline"
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
- [ ] Each context file tells a complete story from implementation to business value
- [ ] All technical claims supported by codebase analysis
- [ ] Cross-cutting concerns captured within relevant context
- [ ] Integration points between contexts clearly documented
- [ ] No duplicate information across context files
- [ ] Universal methodology applied consistently

### Common Issues and Fixes

#### Incomplete Context Stories
**Problem**: Context file missing key aspects (technical, business, or user impact)
**Fix**: Re-apply universal methodology for complete analysis
**Example**: Integration context missing auth flows → apply methodology to capture complete integration story including authentication

#### Cross-Context Content Duplication
**Problem**: Same information appearing in multiple context files
**Fix**: Assign ownership to most relevant context, reference from others
**Example**: Database security appears in both data-management.md and integrations.md → own in data-management, reference in integrations

#### Generic Context Content
**Problem**: Context file could apply to any project in same category
**Fix**: Ground in specific codebase analysis and project evidence using universal methodology
**Example**: "Standard OAuth flow" → "Google OAuth with NextAuth.js 4.24.5, custom callback handling in /api/auth/[...nextauth].js"

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
**Template Changes**: Universal methodology automatically adapts to template changes
**New Templates**: Add templates to `.llm/templates/` - methodology discovers and handles them
**Template Structure Changes**: Methodology's template-agnostic design handles evolution gracefully
**Framework Updates**: Core methodology remains stable across framework evolution

## Advanced Usage

### Template Customization
- Modify `.llm/templates/` files for project-specific needs
- Add new templates for specialized context (API docs, deployment, etc.)
- Universal methodology automatically adapts to template changes
- Template-agnostic design in `.llm/tasks/context-generation.md` handles any structure

### Integration with Other Tools
- **Documentation generators**: Use context files as input for human docs
- **Linting/formatting**: Include context validation in CI/CD
- **Project scaffolding**: Use context to generate consistent project structures

### Platform-Specific Automation
- **Claude Code**: Full automation with task-referential agents
- **Any LLM**: Direct application of universal methodology
- **Future Platforms**: Universal methodology supports any AI development environment

## Framework Philosophy

### Template-Agnostic Design
- Universal methodology works with any template structure
- Complete stories optimized for AI reasoning regardless of template format
- Cross-cutting concerns captured coherently within appropriate context
- Evidence-based content grounded in actual project analysis
- Holistic understanding enabling sophisticated LLM decision-making

### Universal Compatibility
- Works with any LLM or AI development tool
- Consolidated platform-agnostic methodology in `.llm/tasks/context-generation.md`
- Task-referential agents for enhanced Claude Code automation
- Template-agnostic design supports any template evolution

### Future-Proof Architecture
- Universal methodology handles any template evolution automatically
- Enhancement tool integration built into consolidated methodology
- Task-based architecture keeps agents synchronized with methodology evolution
- Evidence-based approach remains stable regardless of template or framework changes

---

**Transform your development from explaining context to making decisions while perfectly-informed LLMs execute flawlessly.**