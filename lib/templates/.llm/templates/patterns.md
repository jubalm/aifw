# Code Patterns & Conventions

## File Organization
### Directory Structure
[Describe how files and folders are organized]
```
Example:
src/
├── components/
│   ├── ui/           # Basic UI elements (Button, Input)
│   └── features/     # Feature-specific components
├── hooks/            # Custom hooks
├── utils/            # Helper functions
└── types/            # TypeScript definitions
```

### Naming Conventions
- **Components**: [e.g., PascalCase, kebab-case files]
- **Files**: [e.g., camelCase.ts, kebab-case.tsx]
- **Variables**: [e.g., camelCase, descriptive names]
- **Functions**: [e.g., verb + noun pattern like getUserData]

## Code Style
### Language Conventions
- [e.g., Function components over class components]
- [e.g., TypeScript strict mode enabled]
- [e.g., ESLint + Prettier for formatting]

### Import Patterns
- [e.g., Absolute imports from src/ using @ alias]
- [e.g., Group imports: external, internal, relative]
- [e.g., Import types separately with 'type' keyword]

### Component Patterns
[Describe how components are typically written]
```typescript
Example:
interface Props {
  title: string;
  children: ReactNode;
}

export function Card({ title, children }: Props) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```

## Architecture Patterns
### State Management
- [e.g., Local state with useState, global with Zustand]
- [e.g., Server state with React Query]
- [e.g., Form state with React Hook Form]

### Data Flow
- [e.g., Props down, events up pattern]
- [e.g., Context for theme/auth, not general state]
- [e.g., Custom hooks for complex logic]

### API Integration
- [e.g., API calls in separate service files]
- [e.g., Error boundaries for error handling]
- [e.g., Loading states with React Query]

## Testing Strategy
### Test Structure
- [e.g., Tests co-located with components]
- [e.g., Unit tests for utils, integration for components]
- [e.g., Jest + React Testing Library]

### Testing Patterns
- [e.g., Test behavior, not implementation]
- [e.g., Mock external dependencies]
- [e.g., Use data-testid for complex selectors]

### Quality Gates
- [e.g., 80% test coverage required]
- [e.g., All PRs must have tests]
- [e.g., E2E tests for critical flows]

## Styling Conventions
### CSS Approach
- [e.g., Tailwind CSS with custom design system]
- [e.g., CSS modules for component-specific styles]
- [e.g., styled-components for dynamic styling]

### Design Patterns
- [e.g., Mobile-first responsive design]
- [e.g., 8px grid system for spacing]
- [e.g., Consistent color palette from design tokens]

## Error Handling
### Error Patterns
- [e.g., Try-catch for async operations]
- [e.g., Error boundaries for React component errors]
- [e.g., Toast notifications for user-facing errors]

### Logging
- [e.g., Console.log for development, Sentry for production]
- [e.g., Structured logging with context]

## Anti-Patterns to Avoid
- [e.g., Don't use class components for new code]
- [e.g., Don't put business logic in components]
- [e.g., Don't use any type in TypeScript]
- [e.g., Don't inline styles, use CSS classes]
- [e.g., Don't ignore TypeScript errors]

## Development Workflow
### Code Review
- [e.g., All changes go through PR review]
- [e.g., Check for test coverage]
- [e.g., Ensure TypeScript compilation passes]

### Git Conventions
- [e.g., Conventional commits format]
- [e.g., Feature branches from main]
- [e.g., Squash merge to main]