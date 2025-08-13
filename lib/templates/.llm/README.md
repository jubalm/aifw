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
├── templates/             # Domain narrative templates
│   ├── authentication.md      # Complete authentication story template
│   ├── data-management.md      # Complete data architecture story template
│   ├── user-experience.md      # Complete user interface story template
│   ├── integrations.md         # Complete external services story template
│   └── business-logic.md       # Complete domain rules story template
└── context/               # Generated domain narratives
    ├── authentication.md      # Your project's complete auth story
    ├── data-management.md      # Your project's complete data story
    ├── user-experience.md      # Your project's complete UX story
    ├── integrations.md         # Your project's complete integration story
    └── business-logic.md       # Your project's complete business story

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

### 2. Domain Narrative Templates
The `.llm/templates/` folder provides complete story structures for each major system domain:
- **authentication.md**: Complete auth story (flows, security, implementation, policies)
- **data-management.md**: Complete data story (models, access, storage, performance)
- **user-experience.md**: Complete UX story (interfaces, flows, components, optimization)
- **integrations.md**: Complete integration story (APIs, services, webhooks, reliability)
- **business-logic.md**: Complete business story (rules, processes, workflows, intelligence)

### 3. Generated Domain Narratives
The `.llm/context/` folder contains complete stories about your project's major capabilities:
- Each domain tells a complete story from technical implementation to business value
- Cross-cutting concerns (security, performance) captured within relevant domain context
- Evidence-based narratives derived from actual codebase analysis
- Complete system understanding optimized for LLM reasoning

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
1. Tell your LLM: "Read .llm/tasks/codebase-analysis.md and analyze this project for domain narratives"
2. Then: "Generate complete authentication story using .llm/templates/authentication.md"  
3. Repeat for data-management.md, user-experience.md, integrations.md, business-logic.md
4. Save each domain narrative to .llm/context/ folder
```

#### Copy-Paste (Web LLMs)
For ChatGPT, Gemini, etc.:
1. Copy content from `.llm/tasks/codebase-analysis.md`
2. Paste in chat with: "Analyze my project following this methodology"
3. Copy relevant domain template from `.llm/templates/`
4. Paste with: "Generate complete domain story using this template structure"
5. Save response to appropriate `.llm/context/` file
6. Repeat for each domain (authentication, data-management, user-experience, integrations, business-logic)

### Using Generated Context

#### With Any LLM
```
"Read the project context from .llm/context/ folder"
"Generate code following the patterns documented there"
"Make decisions consistent with the documented approach"
```

#### For Development Tasks
```
"Based on .llm/context/authentication.md, implement secure user registration flow"
"Using .llm/context/data-management.md, create a new data model following our patterns"
"According to .llm/context/user-experience.md, build a component that matches our design system"
"From .llm/context/integrations.md, add webhook handling for new external service"
"Using .llm/context/business-logic.md, implement workflow validation rules"
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
- [ ] Each domain tells a complete story from implementation to business value
- [ ] All technical claims supported by codebase analysis
- [ ] Cross-cutting concerns (security, performance) captured within domain context
- [ ] Integration points between domains clearly documented
- [ ] No duplicate information across domains - each owns its complete story

### Common Issues and Fixes

#### Incomplete Domain Stories
**Problem**: Domain narrative missing key aspects (technical, business, or user impact)
**Fix**: Re-analyze domain using complete discovery methodology
**Example**: Authentication domain missing user flows → add complete login/registration/password reset stories

#### Cross-Domain Content Duplication
**Problem**: Same information appearing in multiple domain narratives
**Fix**: Assign ownership to most relevant domain, reference from others
**Example**: Database security appears in both data-management.md and authentication.md → own in data-management, reference in authentication

#### Generic Domain Content
**Problem**: Domain narrative could apply to any project in same category
**Fix**: Ground in specific codebase analysis and project evidence
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

### Domain Narrative Design
- Complete stories for each major system capability optimized for AI reasoning
- Cross-cutting concerns captured coherently within domain context  
- Evidence-based narratives grounded in actual project analysis
- Holistic understanding enabling sophisticated LLM decision-making

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