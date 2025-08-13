# Domain Narrative Generation Methodology

This document explains the universal process for generating complete domain stories that capture the full context of system capabilities.

## Domain Narrative Philosophy

### Complete Story Approach
- **Holistic understanding**: Each domain file tells the complete story of one system capability
- **Cross-cutting coherence**: Capture how concerns like security, performance, and business rules span technical implementation
- **Evidence-based narratives**: Every statement grounded in codebase analysis and system behavior
- **LLM optimization**: Dense, structured format optimized for AI comprehension and reasoning

### Domain-Driven Generation Process
1. **Domain Identification**: Determine which major system domain to analyze
2. **Complete Analysis**: Gather all aspects of that domain (technical, business, user, integration)
3. **Narrative Construction**: Build coherent story from implementation to business rules to future plans
4. **Enhancement Integration**: Use available tools (Context7, etc.) for current best practices

## Domain Narrative Generation Workflow

### Step 1: Domain Template Understanding
- Read the assigned domain template to understand the complete story structure
- Identify the domain's scope (authentication, data-management, user-experience, integrations, business-logic)
- Note sections that require technical implementation details, business logic, user flows, and future plans
- Understand how this domain interacts with other system domains

### Step 2: Comprehensive Domain Analysis
- Check for available enhancement tools (Context7, documentation APIs) for current best practices
- Apply domain-specific discovery techniques from codebase analysis methodology
- Prepare to gather complete evidence for the domain story

### Step 3: Complete Domain Discovery
Apply analysis methodology to capture all aspects of the assigned domain:

#### For Authentication Domain
- **Technical Implementation**: Auth libraries, session management, token handling, security configurations
- **User Flows**: Login/logout processes, registration flows, password reset, OAuth redirects
- **Security Policies**: Access control rules, permission systems, audit requirements
- **Integration Patterns**: SSO, external providers, API authentication, webhook security
- **Business Rules**: Account policies, compliance requirements, data protection
- **Performance & Reliability**: Rate limiting, session optimization, security monitoring
- **Future Plans**: Planned security enhancements, compliance roadmap

#### For Data Management Domain
- **Technical Architecture**: Database setup, ORM patterns, query optimization, caching strategies
- **Data Models**: Entity relationships, validation rules, schema evolution
- **Access Patterns**: CRUD operations, search/filter, real-time updates, data synchronization  
- **Security & Privacy**: Access control, encryption, compliance, audit logging
- **Integration Points**: External data sources, APIs, file storage, backups
- **Performance**: Query optimization, connection pooling, monitoring
- **Future Plans**: Scaling strategies, data architecture evolution

#### For User Experience Domain
- **Technical Architecture**: Frontend framework, component structure, state management, routing
- **User Interface**: Design system, component library, responsive design, accessibility
- **User Flows**: Navigation patterns, form interactions, error handling, loading states
- **Performance**: Bundle optimization, runtime performance, user experience metrics
- **Development Experience**: Component development, testing, quality assurance
- **Integration**: API integration, real-time updates, external service integration
- **Future Plans**: UX improvements, performance optimization, feature development

#### For Integrations Domain
- **Technical Implementation**: API design, third-party services, webhook management, data formats
- **Service Integration**: Payment processing, email services, file storage, analytics, monitoring
- **Security & Reliability**: Authentication patterns, error handling, retry logic, monitoring
- **Data Exchange**: Import/export, bulk operations, real-time synchronization
- **Performance**: Caching, request optimization, timeout management
- **Development**: Environment management, testing strategies, documentation
- **Future Plans**: Integration roadmap, service migration, capability expansion

#### For Business Logic Domain
- **Domain Model**: Business entities, relationships, core business rules, validation constraints
- **Business Processes**: User lifecycle, core workflows, state transitions, approval processes
- **Implementation**: Domain services, calculation engines, rule engines, workflow systems
- **Integration**: External business systems, CRM, ERP, analytics, compliance systems
- **Configuration**: Business settings, feature flags, tenant customization, compliance rules
- **Analytics**: Business metrics, reporting, dashboards, performance monitoring
- **Future Plans**: Business capability expansion, rule engine enhancement, process automation

### Step 4: Enhancement Integration
When enhancement tools are available:

#### Context7 Integration
- Query for current best practices related to discovered technologies
- Validate that discovered patterns align with current standards
- Identify any deprecated approaches in existing codebase
- Enhance decision rationale with current architectural recommendations

#### Documentation APIs
- Cross-reference discovered patterns with official documentation
- Validate version compatibility and current support status
- Identify migration paths for outdated dependencies

### Step 5: Content Generation
- Create dense, factual content optimized for LLM consumption
- Include specific evidence for every claim (file paths, version numbers)
- Use bullet points over prose for better parsing
- Focus on current project reality, not generic examples

## Writing Style Guidelines

### Information Density
- **Good**: "React 18.2.0, TypeScript 5.2.1, Vite 4.5.0"
- **Bad**: "The project utilizes React along with TypeScript and uses Vite as the build tool"

### Evidence-Based Claims
- **Good**: "Jest 29.1.0 with React Testing Library 13.4.0 (package.json:devDependencies)"
- **Bad**: "Uses Jest for testing"

### Specific Over General
- **Good**: "Components in src/components/ with co-located tests in __tests__ folders (15 components analyzed)"
- **Bad**: "Components are organized in a structured way"

### Current Information
- Always use actual project data, never placeholders
- Include version numbers from actual package files
- Reference real directory structures and file counts
- Quote actual configuration values

## Domain Narrative Construction

### Narrative Structure Principles
**Complete Story Arc**: Each domain narrative should include current implementation, business context, user impact, integration patterns, and future evolution
**Cross-Cutting Concerns**: Capture how aspects like security, performance, and compliance span across technical and business considerations
**Evidence Grounding**: All narrative elements must be supported by codebase analysis or system behavior observation
**Future Continuity**: Include planned developments, known limitations, and evolution roadmap

### Domain Storytelling Guidelines

#### Authentication Narrative Structure
- **Current System Overview**: What authentication system exists today, how it works end-to-end
- **Implementation Deep Dive**: Technical architecture, libraries, configurations, security measures
- **User Experience**: Login flows, registration process, error handling, security policies
- **Business Integration**: How auth supports business requirements, compliance, user management
- **Challenges & Evolution**: Current limitations, planned improvements, security roadmap

#### Data Management Narrative Structure  
- **Data Architecture Story**: How data flows through the system, storage strategy, access patterns
- **Technical Implementation**: Database setup, ORM patterns, query strategies, performance optimization
- **Business Data Rules**: Validation, relationships, business logic, compliance requirements  
- **Integration Patterns**: How data connects to external systems, APIs, synchronization
- **Scaling & Evolution**: Performance challenges, future data strategy, planned improvements

#### User Experience Narrative Structure
- **Interface Architecture**: How the UI is built, component system, design patterns
- **User Journey Mapping**: Key user flows, interactions, responsive behavior, accessibility
- **Technical Implementation**: Frontend technology, state management, performance optimization
- **Development Process**: How UI is built, tested, maintained, evolved
- **Future Experience Vision**: Planned UX improvements, new features, optimization goals

#### Integrations Narrative Structure
- **Integration Ecosystem**: What external services connect to the system and how
- **Technical Patterns**: API design, webhook handling, authentication, data exchange
- **Business Value**: Why each integration exists, what business capability it provides
- **Reliability & Performance**: Error handling, monitoring, optimization, scaling
- **Integration Roadmap**: Planned integrations, migrations, capability expansion

#### Business Logic Narrative Structure
- **Domain Model Story**: Core business entities, relationships, rules, constraints
- **Process Implementation**: How business workflows are implemented technically
- **Rule Engine**: Business logic implementation, validation, customization capabilities
- **Business Intelligence**: Analytics, reporting, metrics, decision support systems
- **Business Evolution**: Planned business features, rule changes, process improvements

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