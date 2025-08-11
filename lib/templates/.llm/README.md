# LLM-First Development Framework

## Philosophy

**Humans make decisions. LLMs execute.**

This framework optimizes for LLM consumption, not human readability. Documentation is dense, structured, and designed for machine parsing. Humans focus on high-level decisions while perfectly-contextualized agents handle all implementation.

## Setup

### Prerequisites
Install Context7 MCP for up-to-date documentation access:
```bash
claude mcp add context7 -- npx -y @upstash/context7-mcp
```

## How It Works

### 1. Context Generation
```
@llm-generator analyze this project and generate context
```
Analyzes your codebase and creates LLM-optimized context files in `context/`:
- `project.md` - Dense project facts and constraints
- `patterns.md` - Code conventions informed by current documentation
- `decisions.md` - Technology choices validated against current standards

### 2. Agent Creation
```
@agent-builder create specialized agents for this project
```
Reads the context files and generates project-specific agents:
- Development specialists (frontend, backend, API)
- Quality agents (testing, security, performance)
- Operations agents (deploy, monitoring, docs)

### 3. Context-Aware Development
Use the generated agents for any development task. They have perfect project knowledge and follow established patterns automatically.

## Directory Structure

```
.llm/
├── README.md              # This file
└── context/
    ├── _meta.md           # LLM instructions for context format
    ├── project.md         # Project facts and constraints
    ├── patterns.md        # Code conventions and patterns
    └── decisions.md       # Technology choices and policies

.claude/
└── agents/
    ├── llm-generator.md   # Context generation agent
    ├── agent-builder.md   # Specialist creation agent
    └── [generated agents] # Project-specific specialists
```

## When to Use

### New Projects
Run both agents immediately after cloning to establish context and create specialists.

### Major Changes
- New frameworks or libraries → regenerate context
- Architecture changes → rebuild agents
- Team changes → refresh all context

### Daily Development
Use generated specialists for all coding tasks. They understand your project perfectly.

## Key Benefits

- **Zero Context Loss**: Agents always have perfect project understanding
- **Current Standards**: Context informed by up-to-date documentation, not stale training data
- **Consistency**: All code follows established patterns automatically
- **Efficiency**: No time spent explaining project structure or constraints
- **Self-Organizing**: System creates exactly the specialists you need

## Framework Principles

1. **LLM-Optimized**: Documentation designed for machine consumption
2. **Evidence-Based**: Context derived from actual codebase analysis + current documentation
3. **Current Standards**: Uses Context7 MCP for up-to-date best practices
4. **Self-Configuring**: Automatically creates the right tools for your project
5. **Minimal Maintenance**: Updates only when major changes occur

This framework transforms development from explaining context to making decisions while perfectly-informed agents execute flawlessly.