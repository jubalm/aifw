# Implementation Pattern Generation Methodology

This document provides the complete methodology for generating LLM-optimized implementation guidance, focusing on actionable code patterns, examples, and step-by-step development instructions.

## Core Philosophy

### Implementation-First Principles
- **Actionable Over Descriptive**: Generate "how to build X" guidance instead of "what X does" descriptions
- **Code Examples Over Explanations**: Provide concrete, working code patterns from actual codebase
- **Template-Agnostic**: Works with any implementation pattern template structure
- **Evidence-Based**: Every pattern grounded in actual codebase analysis
- **LLM Optimized**: Structured for AI to generate working, production-ready code
- **Quality Assured**: Integrated standards for implementation guidance

### Generation Process Overview
1. **Pattern Template Analysis**: Read and understand implementation pattern templates
2. **Codebase Pattern Discovery**: Extract actual implementation patterns from project
3. **Implementation Guide Creation**: Build step-by-step development guidance
4. **Code Example Integration**: Include working code examples and boilerplate
5. **Enhancement Integration**: Use available tools for current best practices

## Implementation Pattern Generation Workflow

### Step 1: Pattern Template Analysis
**Implementation-Focused Approach**: Works with implementation pattern templates

#### Template Structure Discovery
1. **Read pattern template**: Scan `.llm/templates/` directory to identify available implementation patterns
2. **Understand pattern sections**: Identify what implementation guidance each template section requires
3. **Map to pattern discovery**: Connect template requirements to codebase pattern analysis methods

#### Implementation Pattern Categories
- **component-patterns**: React/Vue components, hooks, UI implementation patterns
- **api-patterns**: Backend endpoints, middleware, database operation patterns
- **data-patterns**: Database schemas, queries, state management patterns
- **style-patterns**: CSS frameworks, component styling, responsive design patterns
- **integration-patterns**: External APIs, auth providers, third-party service patterns

### Step 2: Quality-Assured Pattern Discovery
#### Enhancement Tool Detection
- Check for available enhancement tools (Context7, documentation APIs)
- Test tool accessibility and functionality
- Prepare fallback methodology for unavailable tools

#### Implementation Evidence Standards
- **Code Completeness**: All patterns must include complete, working code examples
- **File Path References**: Reference specific files and line numbers from actual codebase
- **Dependency Accuracy**: Include exact package versions and import patterns
- **Pattern Completeness**: Show full implementation including imports, types, and integration

### Step 3: Pattern Discovery and Extraction
Apply codebase analysis methodology to extract implementation patterns:

#### Component Pattern Discovery
**Analysis Focus**: How components are actually built and structured
- **Component Architecture**: File organization, naming conventions, export patterns
- **Props and Types**: Interface definitions, prop handling, TypeScript usage
- **Styling Patterns**: CSS approaches, variant handling, responsive design
- **Hook Usage**: State management, side effects, custom hook patterns
- **Event Handling**: User interaction patterns, form handling, validation
- **Testing Patterns**: Component testing approaches and examples

**Quality Standards**:
- Include complete component implementations with all imports
- Show actual file structure and organization
- Provide variant and styling examples
- Include testing patterns for each component type

#### API Pattern Discovery
**Analysis Focus**: How APIs are implemented and consumed
- **Route Structure**: File organization, HTTP method handling, middleware
- **Request/Response**: Data validation, transformation, error handling
- **Database Integration**: Query patterns, transaction handling, ORM usage
- **Authentication**: Auth middleware, permission checking, token handling
- **Client-Side API**: HTTP client setup, error handling, state management
- **Testing Patterns**: API testing approaches and examples

**Quality Standards**:
- Include complete API route implementations
- Show middleware usage and configuration
- Provide client-side integration examples
- Include comprehensive error handling patterns

#### Data Pattern Discovery
**Analysis Focus**: How data is structured and managed
- **Database Schemas**: Model definitions, relationships, constraints
- **Query Patterns**: CRUD operations, complex queries, performance optimization
- **Validation**: Schema validation, input sanitization, error handling
- **State Management**: Local and global state patterns, persistence
- **Caching**: Implementation patterns, cache invalidation, performance
- **Testing Patterns**: Data testing approaches and examples

**Quality Standards**:
- Include complete schema definitions and relationships
- Show actual query implementations with error handling
- Provide state management examples with real usage
- Include migration and seeding patterns

#### Style Pattern Discovery
**Analysis Focus**: How styling is implemented and organized
- **CSS Framework Setup**: Configuration, theme definitions, utility usage
- **Component Styling**: Styling approaches, variant systems, responsive design
- **Layout Patterns**: Grid systems, container patterns, spacing
- **Animation**: Implementation patterns, performance considerations
- **Theme Management**: Dark mode, customization, CSS variables
- **Testing Patterns**: Visual testing, style validation

**Quality Standards**:
- Include complete styling system setup
- Show component styling with all variants
- Provide responsive design examples
- Include theme and customization patterns

#### Integration Pattern Discovery
**Analysis Focus**: How external services are integrated
- **Authentication Providers**: Setup, configuration, callback handling
- **Payment Systems**: Implementation, webhook handling, error management
- **File Storage**: Upload patterns, security, performance optimization
- **Email Services**: Template management, delivery, error handling
- **Analytics**: Event tracking, conversion measurement, privacy
- **Testing Patterns**: Integration testing, mocking, environment handling

**Quality Standards**:
- Include complete service integration setup
- Show configuration and environment management
- Provide error handling and fallback patterns
- Include testing strategies for external dependencies

### Step 4: Implementation Guide Creation
#### Context7 Available
When Context7 MCP tools are accessible:

**Usage Requirements**:
- Query Context7 for technologies discovered in pattern analysis
- Cross-reference implementation patterns with current best practices
- Validate that discovered patterns align with current framework recommendations
- Include modern alternatives for any deprecated patterns found

**Quality Indicators**:
- Header includes: "*Implementation patterns enhanced with Context7 current documentation*"
- Pattern examples include current best practice notes
- Alternative implementation approaches noted where relevant
- Technology versions validated against current support status

#### Context7 Unavailable
When Context7 MCP tools are not accessible:

**Fallback Standards**:
- Rely on codebase pattern analysis and built-in training knowledge
- Focus on implementation patterns actually observed in the codebase
- Include limitations disclaimer in output
- Conservative recommendations based on stable, proven patterns

**Quality Indicators**:
- Header includes: "*Implementation patterns based on codebase discovery + training data*"
- Explicit focus on observed patterns rather than assumed best practices
- Conservative recommendations based on stable, well-established patterns

### Step 5: Implementation Guide Assembly
#### LLM Optimization for Implementation
- **Code-First Content**: Lead with working code examples, follow with explanation
- **Complete Examples**: Include all imports, types, and integration code
- **Step-by-Step Instructions**: Provide actionable implementation steps
- **Integration Guidance**: Show how patterns connect with other system parts

#### Implementation Guide Quality Requirements
- **Working Code Examples**: All patterns must include complete, testable implementations
- **File Structure Clarity**: Show exact file organization and naming conventions
- **Dependency Specificity**: Include exact package versions and configuration
- **Integration Completeness**: Show how patterns integrate with existing codebase

## Implementation Pattern Quality Standards

### Code Example Standards
- **Good**: Complete component with imports, types, and usage example
- **Bad**: Code snippet without context or imports

### Implementation Specificity Standards
- **Good**: "Button component using cva for variants, Tailwind for styling, with size='sm'|'md'|'lg' props (src/components/ui/Button.tsx:15)"
- **Bad**: "Button component with variants"

### Pattern Completeness Standards
- **Good**: Full implementation including setup, usage, testing, and common variations
- **Bad**: Single code example without context or integration guidance

### Project Integration Standards
- Always show how patterns integrate with actual project structure
- Include real file paths and import statements
- Reference actual dependency configurations and versions
- Show connection points with other patterns

### Implementation Guide Boundaries
- **Component Patterns**: UI components, hooks, interaction patterns, styling
- **API Patterns**: Backend routes, middleware, database operations, authentication
- **Data Patterns**: Database schemas, queries, validation, state management
- **Style Patterns**: CSS frameworks, component styling, responsive design
- **Integration Patterns**: External services, authentication providers, third-party APIs

### Common Implementation Issues and Fixes
#### Incomplete Code Examples
- **Problem**: Code snippets without imports or types
- **Fix**: Provide complete, executable examples with all dependencies
- **Example**: `<Button>Click me</Button>` → Complete Button component with interface, styling, and usage

#### Missing Integration Context
- **Problem**: Patterns shown in isolation without showing how they connect
- **Fix**: Include integration examples and connection points
- **Example**: API route without showing how frontend calls it → Include both backend route and frontend usage

#### Generic Implementation Guidance
- **Problem**: Could apply to any project of same type
- **Fix**: Ground in actual project patterns and specific implementation details
- **Example**: "Create a button component" → "Create Button component following project's cva pattern with primary/secondary variants"

## Pattern Template Flexibility

### Template Evolution Handling
#### Adding New Pattern Templates
When new implementation pattern templates are introduced:
1. **Read pattern template**: Understand its implementation focus and required sections
2. **Map to pattern discovery**: Connect template sections to codebase pattern analysis methods
3. **Apply pattern extraction**: Use existing pattern discovery techniques for new template type
4. **Maintain implementation focus**: Ensure new templates prioritize actionable guidance

#### Modifying Existing Pattern Templates
When current pattern templates change structure:
1. **Identify pattern changes**: Compare new template against current implementation methodology
2. **Adjust pattern scope**: Modify pattern discovery to match new requirements
3. **Update implementation focus**: Shift pattern generation to new structure
4. **Maintain quality**: Apply same implementation quality standards to new format

#### Pattern Template Consolidation or Splitting
- **Consolidation**: Combine pattern analysis from multiple templates while maintaining clear boundaries
- **Splitting**: Divide pattern content according to new boundaries without gaps
- **Backward Compatibility**: Support both old and new pattern formats during transition

### Implementation Pattern Section Mapping
#### Component Pattern Sections
- **Analysis Method**: Component file analysis, hook usage discovery, styling pattern extraction
- **Content Type**: Complete component implementations with variants and usage examples
- **Enhancement**: Context7 validation of current component patterns and best practices

#### API Pattern Sections
- **Analysis Method**: Route file analysis, middleware discovery, database query pattern extraction
- **Content Type**: Complete API implementations with error handling and client integration
- **Enhancement**: Modern API pattern recommendations and security best practices

#### Data Pattern Sections
- **Analysis Method**: Schema analysis, query pattern discovery, state management extraction
- **Content Type**: Complete data implementations with validation and performance patterns
- **Enhancement**: Current database and state management best practices

#### Style Pattern Sections
- **Analysis Method**: CSS framework analysis, component styling discovery, responsive pattern extraction
- **Content Type**: Complete styling implementations with variants and responsive design
- **Enhancement**: Modern CSS and styling framework recommendations

#### Integration Pattern Sections
- **Analysis Method**: External service analysis, authentication discovery, webhook pattern extraction
- **Content Type**: Complete integration implementations with error handling and security
- **Enhancement**: Current integration patterns and security best practices

#### Implementation Pattern Template Structures

**Component Pattern Template Structure**:
- Component Architecture, Implementation Examples, Styling Patterns
- Hook Usage, Testing Patterns, Integration Guide

**API Pattern Template Structure**:
- Route Structure, Request/Response Handling, Middleware Implementation
- Database Integration, Error Handling, Testing Patterns

**Data Pattern Template Structure**:
- Schema Definitions, Query Patterns, Validation Implementation
- State Management, Caching Strategies, Testing Patterns

**Style Pattern Template Structure**:
- Framework Setup, Component Styling, Layout Patterns
- Responsive Design, Theme Management, Testing Patterns

**Integration Pattern Template Structure**:
- Service Setup, Authentication Patterns, Error Handling
- Webhook Implementation, Security Patterns, Testing Patterns

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
Regardless of pattern template evolution:
- Core pattern discovery methods remain stable
- Implementation quality standards adapt to new pattern types
- Enhancement integration scales with any implementation pattern
- Code-first, evidence-based approach persists across all pattern formats
- Focus on actionable implementation guidance remains constant

## Implementation Success Criteria

### Generated Implementation Guides Should Enable
1. **Immediate Development**: LLMs can generate working code using the patterns
2. **Consistent Architecture**: New features follow established project patterns
3. **Complete Integration**: Generated code integrates seamlessly with existing codebase
4. **Production Ready**: Generated code includes error handling, testing, and best practices
5. **Maintainable**: Generated code follows project conventions and quality standards

### Validation Questions for Implementation Guides
- Can an LLM generate a working component using this pattern guide?
- Does the guide show how to integrate with other project patterns?
- Are all necessary imports, types, and dependencies included?
- Does the guide include testing patterns and error handling?
- Would the generated code pass the project's quality standards?