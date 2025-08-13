# Business Logic & Domain Rules

## Domain Overview

### Business Domain
**Industry/Sector**: [e.g., E-commerce, Healthcare, SaaS, Content Management, Fintech]
**Core Value Proposition**: [e.g., Online marketplace for handmade goods, Patient management system, Project collaboration platform]
**Target Users**: [e.g., Small business owners, Healthcare providers, Development teams, Content creators]

### Business Model
**Revenue Streams**: [e.g., Subscription fees, Transaction fees, One-time purchases, Advertising revenue]
**Pricing Strategy**: [e.g., Freemium with paid tiers, Per-seat pricing, Usage-based billing, Marketplace commission]
**Key Metrics**: [e.g., Monthly recurring revenue, User acquisition cost, Customer lifetime value, Conversion rates]

## Core Business Entities & Rules

### Primary Business Entities
**[Customize based on actual domain - Examples for different domains:]**

**E-commerce Example**:
```
Products: Inventory management, Pricing rules, Category hierarchies
Orders: Order lifecycle, Payment processing, Fulfillment workflows
Customers: Account management, Loyalty programs, Purchase history
Vendors: Seller onboarding, Commission calculations, Payout schedules
```

**SaaS Example**:
```
Organizations: Multi-tenant structure, Subscription management, User roles
Projects: Workspace organization, Collaboration rules, Access controls
Features: Feature flags, Usage limits, Billing tiers
Integrations: Third-party connections, Data sync rules, API limits
```

### Business Rules & Constraints
**Core Business Logic**:
- **[Domain-specific rules]**: [e.g., "Users can only edit posts they created", "Orders require payment before fulfillment"]
- **Validation Rules**: [e.g., "Email addresses must be unique per organization", "Subscription limits apply per billing cycle"]
- **Workflow Constraints**: [e.g., "Refunds require manager approval for amounts > $500", "Content must be approved before publishing"]

**Calculation Logic**:
```typescript
// Examples of business logic implementation patterns
calculateOrderTotal(items, discounts, taxRate, shippingCost)
determineSubscriptionPrice(plan, users, addons, discounts)  
validateUserPermissions(user, resource, action)
processWorkflowTransition(currentState, action, permissions)
```

## Business Processes & Workflows

### User Lifecycle
**Onboarding Process**:
1. **Registration**: [e.g., Account creation, Email verification, Profile setup, Initial preferences]
2. **Activation**: [e.g., First login, Guided tour, Initial configuration, Welcome sequence]
3. **Engagement**: [e.g., Core feature usage, Achievement milestones, Progress tracking]
4. **Retention**: [e.g., Re-engagement campaigns, Feature adoption, Success metrics]

**User Management**:
- **Role Assignment**: [e.g., Admin, Manager, User roles with specific permissions and capabilities]
- **Access Control**: [e.g., Resource-based permissions, Team memberships, Hierarchical access]
- **Account Lifecycle**: [e.g., Suspension policies, Deletion procedures, Data retention]

### Core Business Workflows
**[Primary Business Process - Customize based on domain]**:

**Order Processing Workflow** (E-commerce):
1. **Order Creation**: Validate inventory → Calculate pricing → Process payment
2. **Fulfillment**: Generate picking list → Update inventory → Create shipping label  
3. **Delivery**: Track shipment → Send notifications → Confirm delivery
4. **Post-Purchase**: Review prompts → Support follow-up → Loyalty points

**Content Publishing Workflow** (CMS):
1. **Content Creation**: Draft creation → Media upload → SEO optimization
2. **Review Process**: Editor assignment → Content review → Approval/rejection
3. **Publishing**: Scheduled publishing → Index updates → Social sharing
4. **Maintenance**: Performance monitoring → Content updates → Archive management

### State Transitions
**Entity State Management**:
```typescript
// Example state transition patterns
Order States: draft → pending → paid → processing → shipped → delivered → completed
User States: invited → active → suspended → inactive → deleted  
Content States: draft → review → approved → published → archived
Subscription States: trial → active → past_due → canceled → expired
```

**State Transition Rules**: [e.g., "Orders can only be canceled before processing", "Published content can be edited but requires re-approval"]

## Business Rules Implementation

### Validation & Constraints
**Data Validation Rules**:
- **Business Domain Validation**: [e.g., SKU format requirements, Price validation rules, Date range constraints]
- **Relationship Constraints**: [e.g., "Users must belong to at least one organization", "Orders require valid shipping address"]
- **Temporal Constraints**: [e.g., "Subscriptions can't be backdated", "Content can't be published in the past"]

**Permission & Access Rules**:
```typescript
// Example permission logic patterns
canEditPost(user, post): user.id === post.authorId || user.role === 'admin'
canViewOrder(user, order): user.id === order.customerId || user.hasRole('support')
canAccessWorkspace(user, workspace): workspace.members.includes(user.id) && user.isActive
```

### Business Logic Services
**Domain Services**: [e.g., PricingService, InventoryService, NotificationService, WorkflowEngine]
**Calculation Engines**: [e.g., Tax calculation, Shipping cost calculation, Discount application, Commission calculation]
**Rule Engines**: [e.g., Promotion eligibility, Content recommendation, Risk assessment, Approval workflows]

## Integration with Business Systems

### External Business Tools
**CRM Integration**: [e.g., Salesforce customer sync, HubSpot lead management, Custom CRM data exchange]
**ERP Systems**: [e.g., Inventory management, Financial reporting, Supply chain integration]
**Analytics & BI**: [e.g., Data warehouse exports, Business intelligence dashboards, Custom reporting]

### Business Data Flow
**Data Synchronization**: [e.g., Customer data sync with marketing tools, Order data export to fulfillment systems]
**Reporting & Analytics**: [e.g., Revenue reporting, User engagement metrics, Operational dashboards]
**Compliance & Audit**: [e.g., Transaction logging, Audit trail generation, Regulatory reporting]

## Business Configuration & Customization

### Configurable Business Rules
**Feature Flags**: [e.g., Experimental features, A/B testing, Gradual rollouts, Emergency toggles]
**Business Settings**: [e.g., Tax rates, Shipping zones, Pricing tiers, Workflow configurations]
**Tenant Customization**: [e.g., White-label branding, Custom workflows, Organization-specific rules]

**Configuration Examples**:
```typescript
// Example configuration patterns
TaxConfiguration: { region: 'US-CA', rate: 0.0875, includeShipping: true }
WorkflowConfiguration: { approvalRequired: true, approverCount: 2, timeoutDays: 7 }
FeatureConfiguration: { plan: 'enterprise', limits: { users: 1000, storage: '100GB' } }
```

## Business Intelligence & Analytics

### Key Business Metrics
**Performance Metrics**: [e.g., Revenue per user, Conversion rates, Customer acquisition cost, Churn rate]
**Operational Metrics**: [e.g., Order processing time, Support ticket resolution, System uptime, Error rates]
**User Behavior**: [e.g., Feature adoption, User engagement, Session duration, Retention cohorts]

### Reporting & Dashboards
**Business Reporting**: [e.g., Revenue dashboards, User growth metrics, Operational KPIs]
**Real-time Monitoring**: [e.g., Live transaction monitoring, System health dashboards, Alert systems]
**Historical Analysis**: [e.g., Trend analysis, Cohort studies, Performance benchmarking]

## Compliance & Governance

### Regulatory Requirements
**Data Protection**: [e.g., GDPR compliance, CCPA requirements, Industry-specific regulations]
**Financial Compliance**: [e.g., PCI DSS for payments, SOX compliance, Tax reporting requirements]
**Industry Standards**: [e.g., HIPAA for healthcare, SOC 2 for SaaS, Industry-specific certifications]

### Business Governance
**Approval Workflows**: [e.g., Purchase approvals, Content publishing, User access changes, Configuration updates]
**Audit Requirements**: [e.g., User action logging, Data change tracking, System access logs, Business transaction records]
**Risk Management**: [e.g., Fraud detection, Security monitoring, Compliance checking, Error tracking]

## Business Logic Architecture

### Code Organization
**Domain Layer**: [e.g., Business entities, Domain services, Business rules, Value objects]
**Application Layer**: [e.g., Use cases, Application services, Command handlers, Query handlers]
**Infrastructure Layer**: [e.g., Data repositories, External service integrations, Configuration management]

**Patterns & Practices**:
- **Domain-Driven Design**: [e.g., Aggregates, Entities, Value objects, Domain events]
- **CQRS**: [e.g., Command/Query separation, Read models, Event sourcing]
- **Event-Driven**: [e.g., Business event publishing, Event handlers, Saga patterns]

## Current Business Challenges

### Known Business Issues
- [e.g., Manual approval processes causing delays, Complex pricing rules difficult to maintain]
- [e.g., Inconsistent business logic across different parts of application]
- [e.g., Business rules scattered throughout codebase, difficult to change]

### Business Technical Debt
- [e.g., Hard-coded business rules that should be configurable, Legacy business logic that needs refactoring]
- [e.g., Missing validation for edge cases, Incomplete audit logging for business transactions]
- [e.g., Business logic mixed with presentation logic, No centralized rule engine]

### Future Business Plans
- [e.g., Implement automated approval workflows, Add configurable business rule engine]
- [e.g., Enhance analytics and reporting capabilities, Implement advanced user segmentation]
- [e.g., Add multi-currency support, Implement marketplace seller features]
- [e.g., Improve compliance automation, Add advanced fraud detection]