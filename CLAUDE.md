# AIFW - AI Framework for Workflows

## Project Overview

AIFW is a **knowledge gap patcher** framework that identifies and patches specific gaps in LLM understanding through targeted codebase analysis and Context7 integration. This repository recently evolved from a template-based comprehensive documentation generator to a pure discovery approach that eliminates context pollution.

**Core Philosophy**: Instead of creating comprehensive documentation, AIFW identifies where LLM knowledge is outdated and provides minimal, targeted patches. Think "surgical knowledge updates" rather than "complete system documentation."

## Architecture Evolution

**Recent Transformation** (Dec 2024): The framework underwent a major architectural shift:
- **Before**: Template-based comprehensive documentation generation (~3,352 lines of static templates)
- **After**: Pure discovery knowledge gap patcher with Context7 integration
- **Result**: Minimal context pollution, always-current information, project-specific relevance

### Current Architecture
```
lib/templates/.llm/
├── README.md              # Framework guide
├── tasks/                 # Universal methodology (any LLM)
│   ├── gap-identification.md    # How to identify knowledge gaps
│   ├── context7-integration.md  # Context7 MCP enhancement
│   ├── codebase-analysis.md     # Gap-focused analysis
│   └── context-generation.md    # Core gap patching methodology
└── context/               # Generated gap patches (minimal, as-needed)
```

**No Static Templates**: Framework dynamically discovers technologies and identifies gaps rather than maintaining outdated comprehensive templates.

## Development Guidelines

### Package Distribution Model
- **NPX-based**: `npx jubalm/aifw init` - always runs latest version from GitHub
- **No Global Installation**: Eliminates version conflicts and dependency issues  
- **Branch Testing**: Use `npx jubalm/aifw#branch-name init` for testing branches
- **Universal Compatibility**: Works with any LLM platform, enhanced for Claude Code

### Current Branch Structure
- `main`: Stable release version
- `implementation-first`: Recent transformation to knowledge gap patcher (current active development)
- Feature branches: Temporary development branches

### Code Conventions
- **Universal Methodology**: All core logic in `.llm/tasks/` files that any LLM can read
- **Platform Agnostic**: Claude Code gets automation via `.claude/agents/`, but core framework works everywhere
- **Evidence-Based**: Everything grounded in actual codebase analysis, not assumptions
- **Minimal Context**: Focus on specific gaps, not comprehensive coverage

## Important Commands

### Development
```bash
# Test current implementation-first branch
npx jubalm/aifw#implementation-first init

# Test with Claude Code automation
npx jubalm/aifw#implementation-first init --claude-code
@aifw-meta identify and patch knowledge gaps

# Manual usage (any LLM)
"Apply gap identification methodology from .llm/tasks/gap-identification.md"
```

### Repository Operations
```bash
# Current working branch
git branch  # Should show implementation-first

# Testing framework evolution
cd /path/to/test-project
npx jubalm/aifw#implementation-first init
# Review generated .llm/ structure
```

## Context7 Integration

**Critical Enhancement**: Context7 MCP provides real-time access to current documentation

### Setup (Strongly Recommended)
```bash
claude mcp add context7 -- npx -y @upstash/context7-mcp
```

### How It Works
1. **Gap Detection**: Framework identifies outdated patterns in codebase
2. **Context7 Query**: Fetches current best practices for identified technologies
3. **Targeted Patching**: Generates minimal knowledge updates for specific gaps
4. **Graceful Fallback**: Works without Context7 using training data (conservative mode)

### Integration Points
- `gap-identification.md`: Methodology for identifying what to query
- `context7-integration.md`: Specific patterns for Context7 usage  
- `codebase-analysis.md`: How to analyze for Context7 enhancement opportunities

## Framework Philosophy

### Knowledge Gap Patcher Principles
- **Gap-Targeted Enhancement**: Address specific knowledge limitations, not comprehensive docs
- **Minimal Context Pollution**: Provide only what's needed to bridge identified gaps
- **Dynamic Discovery**: Work with any technology stack without predefined templates
- **Always Current**: Context7 integration provides latest best practices
- **Universal LLM Support**: Core methodology works with any AI platform

### Advantages Over Template Approach
- **Project-Specific**: Only addresses actual gaps in the codebase
- **Always Current**: Context7 provides latest documentation when available  
- **Lightweight**: Minimal context instead of comprehensive documentation
- **Self-Updating**: No static templates to maintain and update
- **Adaptable**: Works with any technology stack discovered dynamically

## Development Workflow

### When Working on AIFW Core
1. **Understand Gap Philosophy**: Read `.llm/tasks/gap-identification.md` first
2. **Test with Real Projects**: Always test methodology changes against actual codebases
3. **Verify Context7 Integration**: Ensure Context7 patterns work correctly
4. **Maintain Universal Compatibility**: Core methodology must work with any LLM

### Adding New Functionality
- **Methodology First**: Document approach in `.llm/tasks/` before coding
- **Evidence-Based**: Ground new features in actual gap identification needs
- **Platform Agnostic**: Core logic in universal methodology files
- **Claude Code Enhancement**: Automation in `.claude/agents/` (optional layer)

### Introducing New Tools (NEW CAPABILITY)
- **Use tool-introduction.md**: For completely new tools not yet in codebase
- **Compatibility Assessment**: Check integration with existing stack
- **Context7 Enhanced Setup**: Get current setup guidance when available
- **Pattern Establishment**: Create baseline for future gap detection
- **Example**: Adding shadcn/ui, Framer Motion, Vitest to existing project

### Testing Framework Changes
```bash
# Test framework evolution locally
npm link  # In aifw repository

# Test in target project  
cd /path/to/test-project
npx /Users/jubalm/Development/claude-meta init  # Local testing

# Test published branch
npx jubalm/aifw#implementation-first init
```

## Key Files and Their Purposes

- **`gap-identification.md`**: Core methodology for finding knowledge gaps in existing code
- **`tool-introduction.md`**: Methodology for introducing completely new tools (NEW)
- **`context7-integration.md`**: Context7 MCP integration patterns and fallback strategies
- **`codebase-analysis.md`**: How to analyze codebases for gap detection (not comprehensive patterns)  
- **`context-generation.md`**: Overall gap patching workflow and quality standards
- **`.claude/agents/`**: Claude Code automation layer (optional enhancement)

## Common Misconceptions

**This is NOT**:
- A comprehensive documentation generator
- A template-based system (anymore)
- A replacement for understanding your codebase  
- Limited to Claude Code (works with any LLM)

**This IS**:
- A knowledge gap identification system
- A Context7-enhanced analysis framework
- A minimal context approach
- A universal LLM compatibility solution

## Recent Changes (Implementation-First Branch)

- ✅ Deleted all static template files (~3,352 lines removed)
- ✅ Created gap identification methodology 
- ✅ Integrated Context7 MCP patterns
- ✅ Transformed core methodology to focus on gaps vs comprehensive docs
- ✅ Updated documentation to reflect pure discovery approach
- ✅ Added tool introduction methodology (addresses new tooling workflow gap)

The framework now operates as intended: providing LLMs exactly what they need to know, when they need to know it, without context pollution. NEW: Now handles both existing tool gap detection AND new tool introduction workflows.