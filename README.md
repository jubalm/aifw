# AIFW - AI Framework

**The LLM-First Development Framework**

AIFW creates documentation optimized for AI consumption. Dense, structured, machine-readable format designed for perfect LLM comprehension, not human readability.

## Philosophy

**Humans make decisions. LLMs execute.**

Traditional documentation is written for humans. AIFW documentation is written for LLMs - optimized for AI consumption with:

- **Dense Information**: Maximum context in minimal tokens
- **Structured Format**: Consistent patterns LLMs can parse perfectly  
- **Evidence-Based**: Generated from actual codebase analysis
- **Current Standards**: Enhanced with up-to-date patterns when possible

## Quick Start

```bash
# Domain narrative architecture (testing)
npx jubalm/aifw#domain-narratives init

# Original WHAT/HOW/WHY architecture (stable)
npx jubalm/aifw init

# Tell any LLM:
"Generate comprehensive project context using AIFW templates"
```

This creates `.llm/context/` with optimized documentation your LLM can instantly understand.

## Universal Compatibility

AIFW works with any LLM or AI development tool:

### Any LLM
```
"Read the project context from .llm/context/ folder"
"Generate code following the patterns documented there"
```

### Claude Code (Enhanced)
Automated context generation with specialized agents:
```bash
# Test domain narratives
npx jubalm/aifw#domain-narratives init --claude-code
@aifw-meta generate comprehensive project context

# Use stable version
npx jubalm/aifw init --claude-code
@aifw-meta generate comprehensive project context
```

### Other Platforms
Manual context generation using provided templates. Scripts coming for Cursor, VSCode, and other AI tools.

## Framework Structure

```
.llm/                            # Universal LLM framework
├── README.md                    # Setup instructions
├── templates/                   # Generation templates
│   ├── project.md              # Project overview template
│   ├── patterns.md             # Code patterns template
│   └── decisions.md            # Technology decisions template
└── context/                     # Generated LLM-optimized files
    ├── project.md              # Project facts and constraints
    ├── patterns.md             # Code conventions and patterns
    └── decisions.md            # Technology choices and policies

.claude/                         # Claude Code specific (optional)
└── agents/                      # Automated generation agents
    ├── aifw-meta.md            # Meta-coordination
    ├── aifw-context-builder.md # Context generation worker
    └── aifw-agent-builder.md   # Specialized agent creator
```

## Team Benefits

- **Shared Context**: Team members using different LLMs share the same project understanding
- **Onboarding**: New developers' AI tools instantly understand the project
- **Consistency**: All AI interactions based on the same factual foundation
- **Flexibility**: Use your preferred LLM without losing context quality

## Context7 Integration

For enhanced analysis with current best practices:

```bash
# Recommended for up-to-date patterns
claude mcp add context7 -- npx -y @upstash/context7-mcp
```

AIFW works without Context7 but will use training data patterns instead of current documentation.

## Benefits

- **Always Fresh**: Runs latest version from GitHub via NPX
- **No Installation**: No global packages, no version conflicts
- **Platform Agnostic**: Works with any LLM or AI development tool
- **Evidence-Based**: All context derived from actual codebase analysis

## License

MIT

---

Transform your development from explaining context to making decisions while perfectly-informed LLMs execute flawlessly.