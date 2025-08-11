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

### project.md: Focus on WHAT and WHERE
Answer: What is this project? What technologies? What's the current state? What are the constraints?

### patterns.md: Focus on HOW
Answer: How is code organized? How do we style? How do we test? What patterns do we follow?

### decisions.md: Focus on WHY
Answer: Why did we choose these technologies? Why this architecture? What trade-offs were made?

## Quality Check
Before finishing, ensure:
- No placeholder text remains
- Information is specific to this actual project  
- Content is dense but readable
- Each file serves its specific purpose
- Cross-references are accurate