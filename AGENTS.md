# Agent Instructions

Read this file before editing the project.

## Project Intent

Customer Management is a frontend portfolio project. The app should demonstrate a realistic CRUD interface for managing customers without overengineering.

The main goal is to show clean React, TypeScript, UI composition, and practical frontend decision-making.

## Product Scope

- Customer list
- Search and filtering
- Create customer
- Edit customer
- Delete customer
- Basic form validation
- Responsive business-dashboard UI

## Core Rules

- Use shadcn/ui for common UI primitives when possible.
- Do not hand-build generic UI primitives like Button, Input, Dialog, Select, Table, or Dropdown unless the project has a specific need.
- Keep shadcn/ui generated components in `src/components/ui/` only.
- Use Atomic Design for project-specific components.
- Use TanStack Query for API calls and server state.
- Use React Hook Form for customer forms.
- Use Zod for form validation schemas.
- Use React Router for routes and URL query state.
- Prefer small, readable components over deep abstractions.
- Keep customer business logic inside `src/features/customer/`.
- Do not add new libraries unless they clearly improve the portfolio project.
- Do not add backward compatibility code unless there is a real persisted-data or external-consumer need.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- TanStack Query
- React Hook Form
- Zod
- React Router

## Required Reading

- `README.md`: project overview and portfolio goals
- `docs/ARCHITECTURE_DECISIONS.md`: routing, data, forms, delete flow, testing, and import decisions
- `docs/PROJECT_GUIDELINES.md`: coding and structure rules
- `docs/UI_ARCHITECTURE.md`: Atomic Design rules
- `docs/SHADCN_USAGE.md`: shadcn/ui usage rules

## Preferred Structure

```txt
src/
  components/
    ui/          # shadcn/ui generated primitives only
    atoms/       # smallest project-specific UI components
    molecules/   # small composed UI groups
    organisms/   # larger sections and feature blocks
    templates/   # page-level layout shells
  features/
    customer/
      components/
      data/
      hooks/
      types/
```

## Product Decisions

- Use a mock API layer with TanStack Query for the first portfolio version.
- Use REST-like routes: `/customers`, `/customers/new`, `/customers/:customerId`, `/customers/:customerId/edit`.
- Use URL query parameters for list search and status filters.
- Use separate pages for create and edit forms.
- Navigate to the customer detail page after create or edit succeeds.
- Use confirmation dialogs before delete actions.
- Keep customer status simple: `active` and `inactive`.
- Use Vitest and React Testing Library for tests.
- Use `@/` path alias for source imports.

## Naming Rules

- Use kebab-case for file names: `customer-table.tsx`.
- Use PascalCase for React components: `CustomerTable`.
- Use clear names that describe product meaning, not visual shape only.
- Prefer `customer` domain names over generic names when the component is customer-specific.

## UI Decision Rule

Before creating a component, ask:

1. Is this a generic UI primitive? Use shadcn/ui in `src/components/ui/`.
2. Is this a small project-specific display component? Put it in `src/components/atoms/`.
3. Is this a composed control group? Put it in `src/components/molecules/`.
4. Is this a full app section? Put it in `src/components/organisms/` or the feature folder.
5. Is this only used by the customer feature? Keep it in `src/features/customer/components/`.

## Quality Bar

- TypeScript types should be explicit for exported props and domain data.
- Components should be accessible by default.
- UI should work on desktop and mobile.
- Keep code simple enough for portfolio reviewers to understand quickly.
