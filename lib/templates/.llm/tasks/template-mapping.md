# Template Mapping and Flexibility Guide

This document explains how to work with any template structure and handle template evolution gracefully.

## Template-Agnostic Approach

### Core Principle
The methodology in these task files should work with any template structure, not just the current 3-pillar system (project/patterns/decisions). Templates may evolve, merge, split, or be completely restructured.

### Universal Mapping Strategy
1. **Read template structure**: Understand what the template asks for
2. **Identify focus area**: Determine if template wants facts, implementation, rationale, or mixed content
3. **Apply appropriate analysis**: Use codebase analysis to gather relevant information
4. **Generate targeted content**: Create content that matches template expectations

## Current Template System

### project.md - Facts and Current State (WHAT)
**Template Focus**: Current project reality and technology facts
**Analysis Mapping**:
- Technology stack discovery → Technology Stack section
- Environment analysis → Development Environment section  
- Dependency analysis → Key Dependencies section
- Current state inference → Project Phase/Active Work sections

**Content Guidelines**:
- Extract exact versions from package files
- Document current development phase from git/version analysis
- List external integrations with evidence
- Avoid explaining WHY technologies were chosen
- Avoid documenting HOW code is organized

### patterns.md - Implementation and Process (HOW)
**Template Focus**: Code organization and development practices
**Analysis Mapping**:
- Directory structure analysis → File Organization section
- Import pattern discovery → Code Style section
- Development script analysis → Development Workflow section
- Testing infrastructure → Testing Strategy section

**Content Guidelines**:
- Document actual directory structures with file counts
- Describe observed naming conventions and patterns
- Explain development processes from package.json scripts
- Detail testing approaches from discovered configurations
- Avoid explaining WHY patterns were chosen
- Avoid listing technologies without implementation context

### decisions.md - Rationale and Trade-offs (WHY)
**Template Focus**: Technology choices and architectural reasoning
**Analysis Mapping**:
- Technology choice inference → Technology Choices section
- Architecture analysis → Architecture Decisions section
- Constraint discovery → Business/Technical Constraints section
- Trade-off identification → Lessons Learned section

**Content Guidelines**:
- Use Decision/Why/Alternatives/Trade-offs structure
- Infer rationale from commit messages, code comments, architecture
- Document constraints from business context, team size, timeline
- Include Context7 insights for current alternatives when available
- Avoid documenting current state facts
- Avoid explaining implementation details

## Template Evolution Handling

### Adding New Templates
When new templates are introduced:

#### Analysis Steps
1. **Read new template**: Understand its focus and required sections
2. **Identify content type**: Determine if it needs facts, process, rationale, or hybrid
3. **Map analysis methods**: Choose appropriate codebase analysis techniques
4. **Apply quality standards**: Use existing quality metrics for new content type

#### Content Adaptation
- Use existing analysis methodology with new focus areas
- Apply appropriate enhancement tools (Context7) for new content types
- Maintain evidence-based approach regardless of template structure
- Follow LLM optimization principles for new output formats

### Modifying Existing Templates
When current templates change structure:

#### Adaptation Process
1. **Identify changes**: Compare new template against current mapping
2. **Adjust analysis scope**: Modify codebase analysis to match new requirements
3. **Update content focus**: Shift content generation to new structure
4. **Maintain quality**: Apply same quality standards to new format

#### Backward Compatibility
- Support both old and new template formats during transition
- Use template detection to determine appropriate generation approach
- Provide clear migration guidance for existing projects

### Template Consolidation or Splitting
When templates are merged or divided:

#### Consolidation Handling
- Combine analysis from multiple current templates
- Maintain clear section boundaries within consolidated template
- Avoid content duplication while ensuring completeness
- Apply mixed content quality standards

#### Split Handling
- Divide current template content according to new boundaries
- Ensure no content gaps in the split templates
- Maintain appropriate analysis depth for each new template
- Update boundary guidelines for new template separation

## Flexible Content Generation

### Dynamic Template Reading
```markdown
## Template Analysis Process
1. **Structure Discovery**: Read template to identify required sections
2. **Content Type Classification**: Determine facts/process/rationale focus
3. **Analysis Scope Definition**: Select relevant codebase analysis methods
4. **Enhancement Tool Application**: Apply Context7 or other tools as appropriate
5. **Content Generation**: Create content matching template expectations
```

### Universal Section Mapping
Map common template sections to analysis methods:

#### Technology/Stack Sections
- **Analysis Method**: Package management and configuration analysis
- **Content Type**: Current technology facts with versions
- **Enhancement**: Context7 validation of technology currency

#### Organization/Structure Sections  
- **Analysis Method**: Directory and file pattern analysis
- **Content Type**: Actual project organization with evidence
- **Enhancement**: Modern organizational pattern recommendations

#### Decision/Choice Sections
- **Analysis Method**: Architecture inference and constraint discovery
- **Content Type**: Rationale with Decision/Why/Alternatives/Trade-offs structure
- **Enhancement**: Context7 current architectural recommendations

#### Process/Workflow Sections
- **Analysis Method**: Script and configuration analysis
- **Content Type**: Development practices from discovered tools/configs
- **Enhancement**: Modern workflow pattern validation

### Hybrid Template Support
For templates that mix content types:

#### Section-Based Approach
- Analyze each section independently
- Apply appropriate content type guidelines per section
- Maintain clear boundaries within the template
- Use section headers to indicate content type shifts

#### Quality Assurance for Mixed Templates
- Validate that each section follows appropriate quality standards
- Ensure no content duplication between sections
- Maintain evidence-based approach throughout
- Apply enhancement tools appropriately for each content type

## Future Template Considerations

### Emerging Template Patterns
Be prepared to support:
- **Component-specific templates**: Focus on specific technology stacks
- **Scale-specific templates**: Different approaches for small vs large projects
- **Domain-specific templates**: Templates for specific industries or use cases
- **Integration-specific templates**: Templates focused on external service integration

### Template Ecosystem Evolution
- **Plugin-based templates**: User-defined custom template structures
- **Dynamic templates**: Templates that adjust based on project analysis
- **Hierarchical templates**: Nested template structures for complex projects
- **Cross-platform templates**: Templates optimized for different LLM platforms

### Methodology Stability
Regardless of template evolution:
- **Core analysis methods remain stable**: Codebase discovery techniques are universal
- **Quality standards adapt**: Apply same rigor to new template types
- **Enhancement integration scales**: Context7 and other tools work with any content type
- **Evidence-based approach persists**: All content grounded in discoverable facts

## Implementation Guidelines

### Template Detection
```markdown
## Template Analysis Workflow
1. **Read template file**: Understand structure and section requirements
2. **Classify content needs**: Identify facts/process/rationale focus areas
3. **Select analysis methods**: Choose appropriate codebase analysis techniques
4. **Apply enhancement tools**: Use Context7 or other available tools
5. **Generate content**: Create LLM-optimized content matching template structure
6. **Validate quality**: Ensure content meets standards for identified content types
```

### Error Handling
- **Unknown template structures**: Default to comprehensive analysis with warning
- **Missing template sections**: Generate based on available analysis
- **Template conflicts**: Prioritize evidence-based content over template assumptions
- **Enhancement tool failures**: Gracefully degrade to codebase analysis only

### Quality Assurance
- Apply appropriate quality metrics based on content type identification
- Maintain evidence-based approach regardless of template structure
- Ensure LLM optimization principles are followed for any output format
- Validate boundary compliance for mixed-content templates