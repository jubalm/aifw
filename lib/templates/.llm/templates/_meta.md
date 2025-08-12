# LLM Context Writing Guide

## Your Task
Replace skeleton content in project.md, patterns.md, and decisions.md with actual project information. Use dense, factual content optimized for LLM consumption.

## Writing Style
- **Dense facts, minimal prose**: "Uses React 18, TypeScript 5.2, Vite for builds" not "The project utilizes React version 18 along with TypeScript version 5.2 and uses Vite as the build tool"
- **Bullet points over paragraphs**: List information clearly
- **Specific over general**: "Jest with React Testing Library" not "testing framework"
- **Current information**: Use actual project data, not placeholders

## Content Examples

### Good Project Context:
```
## What This Project Is
E-commerce web app for selling custom t-shirts. Currently in MVP phase with basic product catalog and checkout.

## Technology Stack
- Frontend: React 18, TypeScript, Tailwind CSS
- Backend: Node.js, Express, PostgreSQL
- Deployment: Vercel frontend, Railway backend
- Payment: Stripe integration
```

### Good Pattern Examples:
```
## File Organization
- Components in src/components/ with co-located tests
- Custom hooks in src/hooks/
- API calls in src/api/ organized by domain
- Types in src/types/ with shared interfaces

## Code Conventions
- Function components with TypeScript interfaces
- Tailwind for styling, no CSS modules
- React Query for server state
- Zod for runtime type validation
```

### Good Decision Examples:
```
## Why We Chose These Technologies
- React: Team familiar, good ecosystem
- TypeScript: Catch errors early, better DX
- Tailwind: Faster styling than custom CSS
- PostgreSQL: Relational data needs, team expertise
```

## File-Specific Guidelines

### project.md: Focus on WHAT & CURRENT STATE (Facts Only)
**Answer**: What is this project? What technologies and versions? What's the current state? What dependencies?
**Include**: Technology stack with versions, project purpose, current phase, key dependencies, environment setup
**Avoid**: Explaining WHY technologies were chosen, documenting HOW code is organized

### patterns.md: Focus on HOW & IMPLEMENTATION (Process & Structure)  
**Answer**: How is code organized? How do development practices work? What implementation patterns are used?
**Include**: Directory structure, naming conventions, testing practices, code style, development workflow
**Avoid**: Explaining WHY patterns were chosen, listing technologies without implementation context

### decisions.md: Focus on WHY & RATIONALE (Reasoning & Trade-offs)
**Answer**: Why were these technologies chosen? Why this architecture? What alternatives were considered?
**Include**: Technology choice rationale, architecture decisions, trade-offs, constraints that influenced choices
**Avoid**: Documenting current state facts, explaining implementation details

## Quality Check
Before finishing, ensure:
- No placeholder text remains
- Information is specific to this actual project  
- Content is dense but readable
- **No overlap**: Each file covers distinct aspects (WHAT vs HOW vs WHY)
- **Clear boundaries**: project.md = current facts, patterns.md = implementation, decisions.md = rationale
- **No duplication**: Same information doesn't appear in multiple files