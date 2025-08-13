# Universal Context Generation Methodology

This document provides the complete methodology for generating LLM-optimized context, supporting any template structure through template-agnostic analysis and quality-assured generation.

## Core Philosophy

### Universal Principles
- **Template Agnostic**: Works with any template structure (domain narratives, WHAT/HOW/WHY, custom formats)
- **Evidence-Based**: Every statement grounded in discoverable codebase analysis
- **LLM Optimized**: Dense, structured format optimized for AI comprehension and reasoning
- **Quality Assured**: Integrated quality standards throughout generation process
- **Enhancement Ready**: Seamless integration with available tools (Context7, etc.)

### Generation Process Overview
1. **Template Analysis**: Read and understand any template structure
2. **Content Classification**: Identify what type of content each section needs
3. **Evidence Gathering**: Apply appropriate codebase analysis methodology
4. **Quality Integration**: Apply standards throughout generation
5. **Enhancement Integration**: Use available tools for current best practices

## Universal Generation Workflow

### Step 1: Template Analysis and Classification
**Template-Agnostic Approach**: Works with any template structure

#### Template Structure Discovery
1. **Read template file**: Scan `.llm/templates/` directory to identify available templates
2. **Understand sections**: Identify what each template section requires
3. **Classify content type**: Determine if sections need facts, implementation, rationale, or mixed content
4. **Map to analysis**: Connect template requirements to appropriate codebase analysis methods

#### Content Type Classification
- **Facts/Current State (WHAT)**: Technology versions, current configuration, project status
- **Implementation/Process (HOW)**: Code organization, development practices, workflows
- **Rationale/Decisions (WHY)**: Technology choices, architectural reasoning, trade-offs
- **Domain Narratives**: Complete stories spanning technical, business, and user aspects
- **Hybrid Content**: Mixed content types within single template

### Step 2: Quality-Assured Analysis Preparation
#### Enhancement Tool Detection
- Check for available enhancement tools (Context7, documentation APIs)
- Test tool accessibility and functionality
- Prepare fallback methodology for unavailable tools

#### Evidence Standards Setup
- **Version Specificity**: All technologies must include exact version numbers
- **Source Attribution**: Claims must reference specific files or analysis results
- **Current Accuracy**: Information must reflect actual project state, not assumptions
- **Boundary Compliance**: Content must stay within template scope

### Step 3: Targeted Analysis Execution
Apply methodology from codebase analysis, targeted to content classification:

#### For Facts/Current State Content (WHAT)
**Analysis Focus**: Current project reality and technology facts
- **Technology Stack**: Package management analysis for exact versions
- **Environment Configuration**: Development setup, deployment configuration
- **Current State**: Project phase inference from git/version analysis
- **External Integrations**: Service connections with evidence
- **Constraints**: Only factual constraints discoverable from code/config

**Quality Standards**:
- All version numbers verified from package files
- No explanations of WHY technologies were chosen
- No implementation details (belongs in HOW content)
- Current state reflects actual project analysis

#### For Implementation/Process Content (HOW)
**Analysis Focus**: Code organization and development practices
- **Directory Structure**: Real file system analysis with counts
- **Code Organization**: Import patterns, naming conventions, co-location strategies
- **Development Workflow**: Scripts from package.json, git hooks, automation
- **Testing Strategy**: Test frameworks, patterns, coverage from actual configs
- **Build Process**: Build tools and configuration from actual setup

**Quality Standards**:
- Directory structure matches actual project
- File counts and patterns verified through analysis
- No technology lists without implementation context
- Development workflow based on discovered scripts/configs
- No explanations of WHY patterns were chosen

#### For Rationale/Decisions Content (WHY)
**Analysis Focus**: Technology choices and architectural reasoning
- **Decision Structure**: Decision/Why/Alternatives/Trade-offs format
- **Technology Choices**: Infer rationale from architecture, commit messages
- **Constraint Analysis**: Business/team/technical constraints from codebase evidence
- **Trade-off Documentation**: Visible compromises and their reasoning
- **Enhancement Integration**: Context7 insights for current alternatives

**Quality Standards**:
- Decisions follow structured format (Decision/Why/Alternatives/Trade-offs)
- Rationale inferred from discoverable evidence
- No current state facts (belongs in WHAT content)
- No implementation details (belongs in HOW content)

#### For Domain Narrative Content (Complete Stories)
**Analysis Focus**: Complete domain capability stories

**Authentication Domain**:
- Technical Implementation, User Flows, Security Policies, Integration Patterns
- Business Rules, Performance & Reliability, Future Plans

**Data Management Domain**:
- Technical Architecture, Data Models, Access Patterns, Security & Privacy
- Integration Points, Performance, Future Plans

**User Experience Domain**:
- Technical Architecture, User Interface, User Flows, Performance
- Development Experience, Integration, Future Plans

**Integrations Domain**:
- Technical Implementation, Service Integration, Security & Reliability
- Data Exchange, Performance, Development, Future Plans

**Business Logic Domain**:
- Domain Model, Business Processes, Implementation, Integration
- Configuration, Analytics, Future Plans

**Operations Domain**:
- Environment Management, Service Setup, Health Checks, Deployment Strategies
- Backup & Recovery, Troubleshooting, Security & Compliance, Metrics

**Quality Standards for Domain Narratives**:
- Complete story from technical implementation to business value
- Cross-cutting concerns captured within domain context
- Integration points between domains clearly documented
- Evidence-based content throughout narrative

#### For Hybrid Content Templates
**Section-Based Approach**:
- Analyze each section independently
- Apply appropriate content type methodology per section
- Maintain clear boundaries within template
- Use section headers to indicate content type shifts

### Step 4: Quality-Assured Enhancement Integration
#### Context7 Available
When Context7 MCP tools are accessible:

**Usage Requirements**:
- Query Context7 for technologies discovered in codebase analysis
- Cross-reference patterns with current framework documentation
- Validate that discovered approaches are still recommended
- Include modern alternatives for any deprecated patterns found

**Quality Indicators**:
- Header includes: "*Analysis enhanced with Context7 current documentation*"
- Decision rationale includes current architectural recommendations
- Pattern analysis notes modern vs legacy approaches
- Technology versions validated against current support status

#### Context7 Unavailable
When Context7 MCP tools are not accessible:

**Fallback Standards**:
- Rely on codebase analysis and built-in training knowledge
- Focus on patterns actually observed in the codebase
- Include limitations disclaimer in output
- Avoid speculation about current best practices

**Quality Indicators**:
- Header includes: "*Analysis based on codebase discovery + training data*"
- Explicit focus on observed patterns rather than assumed best practices
- Conservative recommendations based on stable, well-established practices

### Step 5: Quality-Assured Content Generation
#### LLM Optimization Standards
- **Information Density**: Dense, factual content optimized for LLM consumption
- **Evidence Integration**: Include specific evidence for every claim (file paths, version numbers)
- **Parsing Optimization**: Use bullet points over prose for better parsing
- **Project Specificity**: Focus on current project reality, not generic examples

#### Content Quality Requirements
- **No Placeholder Content**: All content must be project-specific
- **Version Specificity**: All technologies include exact version numbers
- **Boundary Compliance**: Content stays within identified template scope
- **Evidence Grounding**: Every claim supported by discoverable analysis

## Integrated Quality Standards

### Information Density Standards
- **Good**: "React 18.2.0, TypeScript 5.2.1, Vite 4.5.0"
- **Bad**: "The project utilizes React along with TypeScript and uses Vite as the build tool"

### Evidence-Based Standards
- **Good**: "Jest 29.1.0 with React Testing Library 13.4.0 (package.json:devDependencies)"
- **Bad**: "Uses Jest for testing"

### Specificity Standards
- **Good**: "Components in src/components/ with co-located tests in __tests__ folders (15 components analyzed)"
- **Bad**: "Components are organized in a structured way"

### Current Information Standards
- Always use actual project data, never placeholders
- Include version numbers from actual package files
- Reference real directory structures and file counts
- Quote actual configuration values

### Template Boundary Standards
- **Facts Content**: No WHY explanations, no HOW implementations
- **Implementation Content**: No WHY rationale, no WHAT technology lists without context
- **Rationale Content**: No WHAT current state facts, no HOW implementation details
- **Domain Narratives**: Complete stories with clear domain boundaries

### Common Quality Issues and Fixes
#### Generic Content Issue
- **Problem**: Content could apply to any project
- **Fix**: Replace with project-specific analysis results
- **Example**: "Modern React application" → "E-commerce platform with 47 product components, Stripe integration"

#### Missing Version Specificity
- **Problem**: Technologies listed without versions
- **Fix**: Extract exact versions from package files
- **Example**: "Uses React and TypeScript" → "React 18.2.0, TypeScript 5.2.1"

#### Boundary Violations
- **Problem**: WHY content in WHAT templates, etc.
- **Fix**: Move content to appropriate template type
- **Example**: Technology choices explained in facts content → move to rationale content

## Template-Agnostic Flexibility

### Template Evolution Handling
#### Adding New Templates
When new templates are introduced:
1. **Read new template**: Understand its focus and required sections
2. **Identify content type**: Determine if it needs facts, process, rationale, or hybrid
3. **Map analysis methods**: Choose appropriate codebase analysis techniques
4. **Apply quality standards**: Use existing quality metrics for new content type

#### Modifying Existing Templates
When current templates change structure:
1. **Identify changes**: Compare new template against current methodology
2. **Adjust analysis scope**: Modify codebase analysis to match new requirements
3. **Update content focus**: Shift content generation to new structure
4. **Maintain quality**: Apply same quality standards to new format

#### Template Consolidation or Splitting
- **Consolidation**: Combine analysis from multiple templates while maintaining boundaries
- **Splitting**: Divide content according to new boundaries without gaps
- **Backward Compatibility**: Support both old and new formats during transition

### Universal Section Mapping
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

### Domain Narrative Construction (When Applicable)

#### Narrative Structure Principles
- **Complete Story Arc**: Current implementation, business context, user impact, integration patterns, future evolution
- **Cross-Cutting Concerns**: Security, performance, compliance span across technical and business considerations
- **Evidence Grounding**: All narrative elements supported by codebase analysis
- **Future Continuity**: Planned developments, known limitations, evolution roadmap

#### Domain-Specific Narrative Structures (When Templates Require Complete Domain Stories)

**Authentication Domain Structure**:
- Current System Overview, Implementation Deep Dive, User Experience
- Business Integration, Challenges & Evolution

**Data Management Domain Structure**:
- Data Architecture Story, Technical Implementation, Business Data Rules
- Integration Patterns, Scaling & Evolution

**User Experience Domain Structure**:
- Interface Architecture, User Journey Mapping, Technical Implementation
- Development Process, Future Experience Vision

**Integrations Domain Structure**:
- Integration Ecosystem, Technical Patterns, Business Value
- Reliability & Performance, Integration Roadmap

**Business Logic Domain Structure**:
- Domain Model Story, Process Implementation, Rule Engine
- Business Intelligence, Business Evolution

**Operations Domain Structure**:
- Environment Management, Service Setup, Health Checks
- Deployment Strategies, Backup & Recovery, Troubleshooting
- Security & Compliance, Metrics & KPIs

## Quality Assurance

### Narrative Completeness
- Each domain tells a complete story from technical implementation to business value
- Cross-cutting concerns (security, performance, compliance) are captured within domain context
- Integration points between domains are clearly documented
- Future evolution and roadmap sections include realistic, evidence-based plans

### Evidence Standards
- All technical claims supported by codebase analysis or configuration discovery
- Business logic described based on actual implementation patterns
- User flows documented from actual UI/UX analysis
- Performance and reliability statements grounded in observed patterns

### Domain Coherence
- **Authentication domain**: Complete auth story without business logic scattered elsewhere
- **Data management domain**: Complete data story without auth patterns mixed in  
- **User experience domain**: Complete UX story with appropriate integration references
- **Integrations domain**: Complete external service story with clear boundaries
- **Business logic domain**: Complete business story with appropriate technical context

### Cross-Domain Integration
- Clear references between domains where they interact (e.g., auth in API design)
- No duplicate information across domains - each owns its complete story
- Integration patterns described from the perspective of each relevant domain

### Enhancement Status
When enhancement tools are available, include:
- "*Complete [domain] story enhanced with Context7 current documentation*"
- Current best practices integrated throughout domain narrative
- Modern alternatives noted for any discovered legacy patterns

When enhancement tools are unavailable, include:
- "*Complete [domain] story based on codebase discovery + training data*"
- Focus on patterns actually observed in the codebase
- Conservative recommendations based on stable practices

## Domain Narrative Output Standards

### Domain File Headers
Include complete domain context metadata:
```markdown
# [Domain Name]
*Complete [domain] story: technical implementation, business rules, user impact, and evolution*
*Analysis enhanced with Context7 current documentation*
[or]
*Analysis based on codebase discovery + training data*
```

### Narrative Structure
Each domain file follows consistent storytelling format:
- **Current System Overview** (what exists today)
- **Technical Implementation** (how it's built)
- **Business Integration** (why it matters, how it serves business needs)
- **User Impact** (how it affects user experience)
- **Integration Patterns** (how it connects to other domains/systems)
- **Performance & Reliability** (how it scales, handles errors)
- **Current Challenges** (known limitations, technical debt)
- **Future Evolution** (planned improvements, roadmap)

### Evidence Integration
Weave evidence throughout the narrative:
```markdown
## Current Authentication System

### Authentication Strategy
**Primary Method**: JWT tokens with HTTP-only cookies (from middleware/auth.js)
**Provider**: NextAuth.js 4.24.5 (package.json) with Google OAuth integration
**Session Management**: 7-day token expiration with sliding refresh (config/auth.js:12)

The system implements OAuth 2.0 flows with three primary providers...
```

## Implementation Notes

### For Agent Usage
Agents should:
1. Read this comprehensive methodology file
2. Apply appropriate sections based on template analysis
3. Follow quality standards throughout generation
4. Reference codebase analysis methodology for discovery techniques

### For Direct LLM Usage
Any LLM can:
1. Follow this methodology sequentially
2. Apply template-agnostic approach for any structure
3. Integrate quality standards throughout process
4. Use enhancement tools when available, fallback gracefully when not

### Methodology Stability
Regardless of template evolution:
- Core analysis methods remain stable
- Quality standards adapt to new content types
- Enhancement integration scales with any template
- Evidence-based approach persists across all formats