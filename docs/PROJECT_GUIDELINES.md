# Project Guidelines

This document defines how to write code for the Customer Management portfolio project.

## Project Goal

Build a realistic customer management CRUD frontend that is easy to review in a portfolio.

The project should show practical frontend skill, not unnecessary architecture.

## Development Principles

- Keep the app simple and readable.
- Prefer clear component names over generic names.
- Use TypeScript types for domain data and exported component props.
- Keep customer-specific code inside `src/features/customer/`.
- Use shadcn/ui for common UI primitives instead of writing them manually.
- Create custom components only when they represent project-specific UI, behavior, or layout.
- Avoid adding libraries unless they clearly improve this project.

## Tech Stack Responsibilities

- React: build UI with function components.
- TypeScript: define domain data, props, and form values clearly.
- Vite: run and build the frontend app.
- Tailwind CSS: style app and composed components.
- TanStack Query: handle API requests, caching, loading states, and server state.
- React Hook Form: handle customer create and edit forms.
- Zod: validate form input and shared schemas.
- React Router: handle app routes and URL query parameters for filters/search when useful.

## Product Architecture Decisions

- Use a mock API layer for the first version.
- Use TanStack Query hooks instead of reading mock data directly in pages.
- Use REST-like routes: `/customers`, `/customers/new`, `/customers/:customerId`, `/customers/:customerId/edit`.
- Use URL query parameters for customer list `search` and `status` filters.
- Use separate pages for create and edit forms.
- Navigate to the customer detail page after create or edit succeeds.
- Use a confirmation dialog before deleting customers.
- Keep customer status as `active` or `inactive` until there is a product reason to add more.
- Use `@/` path alias for source imports.
- Use Vitest and React Testing Library for behavior-focused tests.

## Source Structure

```txt
src/
  components/
    ui/
    atoms/
    molecules/
    organisms/
    templates/
  features/
    customer/
      components/
      data/
      hooks/
      types/
```

## Feature Structure

Customer feature code should live in `src/features/customer/`.

Use this structure when needed:

```txt
src/features/customer/
  components/   # customer-specific UI components
  data/         # mock data or static fixtures
  hooks/        # customer-specific hooks
  types/        # customer domain types
```

Do not move shared app components into the customer feature unless they are only meaningful for customers.

## Naming Rules

- File names: kebab-case, for example `customer-table.tsx`.
- React components: PascalCase, for example `CustomerTable`.
- TypeScript types: PascalCase, for example `CustomerStatus`.
- Hooks: camelCase with `use` prefix, for example `useCustomerFilters`.
- Prefer domain names like `CustomerStatusBadge` over generic names like `StatusBadge` when the component is customer-specific.

## Component Rules

- Keep components small and focused.
- Do not create abstractions before there are repeated patterns.
- Keep one-off customer UI in `src/features/customer/components/`.
- Move reusable project-specific UI to `src/components/atoms/`, `src/components/molecules/`, or `src/components/organisms/`.
- Keep generic primitives in `src/components/ui/` and generate them with shadcn/ui.

## State Rules

- Start with local React state when the feature is small.
- Add hooks only when state logic becomes shared or hard to read inside a component.
- Use TanStack Query for API data and server state.
- Use local React state for UI-only state like open dialogs or selected rows.
- Use React Router URL query parameters for shareable filter/search state when useful.
- Do not add global state unless multiple unrelated parts of the app need the same client-only data.
- Mock data is acceptable until API integration is needed.

## Routing Rules

- Customer list route: `/customers`.
- Customer create route: `/customers/new`.
- Customer detail route: `/customers/:customerId`.
- Customer edit route: `/customers/:customerId/edit`.
- Keep list search and status filters in URL query parameters when implemented.

## Import Rules

- Prefer `@/` imports for source files.
- Use relative imports only for nearby files in the same small folder when clearer.
- Do not use deep fragile relative imports like `../../../components/...`.

## Validation Rules

- Use React Hook Form for create and edit customer forms.
- Use Zod for validation schemas.
- Validate required customer fields.
- Validate email format.
- Show clear user feedback for invalid input.
- Keep validation readable and close to the form unless it becomes reusable.

## Accessibility Rules

- Use semantic HTML where possible.
- Inputs must have labels or accessible names.
- Buttons must describe their action.
- Dialogs and menus should use shadcn/ui primitives for accessibility.
- Do not rely on color alone to communicate status.

## Review Checklist

Before finishing a change, check:

- The code matches the project goal.
- The component is in the right folder.
- Generic UI uses shadcn/ui when possible.
- Types are clear.
- The UI works on small and large screens.
- The change is easy for a portfolio reviewer to understand.
