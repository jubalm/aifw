# AIFW - AI Framework

**The LLM-First Development Framework**

AIFW creates optimized project context for AI development tools. Humans make decisions, LLMs execute with perfect context awareness.

## Quick Start

```bash
# Interactive setup
npx jubalm/aifw init

# Direct Claude Code setup
npx jubalm/aifw init --claude-code
```

## What It Does

AIFW sets up:

### Universal `.llm/` Structure
- **LLM-optimized context files** - Dense, structured documentation designed for machine consumption
- **Meta-instructions** - Teaches LLMs how to write optimal context
- **Skeleton templates** - Ready for AI agents to populate with real project data

### Platform-Specific Integration
- **Claude Code**: Specialized agents for context generation and project analysis
- **More platforms coming**: Cursor, VSCode, and other AI development tools

## Philosophy

**Humans make decisions. LLMs execute.**

Traditional documentation is written for humans. AIFW documentation is written for LLMs - dense, structured, and optimized for AI consumption. This creates:

- **Zero Context Loss**: AI agents always understand your project perfectly
- **Current Standards**: Context informed by up-to-date documentation via Context7 MCP
- **Consistency**: All code follows established patterns automatically
- **Self-Organization**: System creates exactly the specialists you need

## For Claude Code Users

After running `npx jubalm/aifw init --claude-code`:

1. **Install Context7 MCP** for up-to-date documentation:
   ```bash
   claude mcp add context7 -- npx -y @upstash/context7-mcp
   ```

2. **Generate comprehensive project context**:
   ```
   @aifw-delegator generate comprehensive project context
   ```

3. **Create specialized development agents**:
   ```
   @aifw-delegator create specialized development agents
   ```

## Framework Structure

```
.llm/                           # Universal LLM framework
├── README.md                   # Human framework documentation  
└── context/                    # LLM-optimized context files
    ├── _meta.md               # Instructions for writing context
    ├── project.md             # Project facts and constraints
    ├── patterns.md            # Code conventions and patterns
    └── decisions.md           # Technology choices and policies

.claude/                        # Claude Code specific
└── agents/                     # Specialized AI agents
    ├── aifw-delegator.md      # Delegation and coordination agent
    ├── context-builder.md     # Context generation worker
    └── agent-builder.md       # Agent creation worker
```

## Benefits

- **Always Fresh**: Runs latest version from GitHub via NPX
- **No Installation**: No global packages, no version conflicts
- **Extensible**: Ready for future AI platforms
- **Evidence-Based**: All context derived from actual codebase analysis

## License

MIT

---

Transform your development from explaining context to making decisions while perfectly-informed agents execute flawlessly.