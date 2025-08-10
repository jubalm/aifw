# LLM Context File Writing Guidelines

## Format Optimization
- Maximum information density per token
- Structured lists, minimal prose
- Key-value pairs when applicable
- Bullet points over paragraphs
- No human explanations or introductory text

## Structure Patterns
- Use consistent section headers
- Prioritize facts over descriptions
- Include relationships between components
- Use structured data formats
- Maintain clear hierarchies

## Content Types

### project.md
- PROJECT_TYPE: classification
- TECH_STACK: [technologies]
- ARCHITECTURE: pattern_name
- CONSTRAINTS: [limitations]
- OBJECTIVES: current_goals
- STATE: active_work

### patterns.md
- FILE_ORGANIZATION: structure_rules
- CODE_CONVENTIONS: syntax_preferences
- NAMING: convention_rules
- ARCHITECTURE_PATTERNS: [patterns_used]
- ANTI_PATTERNS: [avoid_these]
- TESTING: approach_and_tools

### decisions.md
- TECHNOLOGY_CHOICES: {tech: reason}
- ARCHITECTURE_DECISIONS: {decision: rationale}
- POLICIES: [rules_and_constraints]
- EXTERNAL_INTEGRATIONS: [services_and_apis]

## Update Triggers
- Major dependency changes → regenerate all files
- Architecture changes → update decisions.md + patterns.md
- New team members → refresh project.md
- Technology additions → update all relevant files

## Relationship Notation
- Dependencies: A → B (A depends on B)
- Data flow: A ⇒ B (data flows from A to B)
- Composition: A { B, C } (A contains B and C)
- Alternatives: A | B (either A or B)

## LLM Consumption Rules
- Lead with most critical information
- Group related facts together
- Use consistent terminology
- Avoid redundancy across files
- Include cross-references when helpful