# Architecture Decisions

This document records product and architecture decisions for the Customer Management portfolio project.

## App Direction

- Build a clean SaaS-style customer management dashboard.
- Use an enterprise-clean structure without heavy enterprise complexity.
- Prefer decisions that show realistic frontend work in a large organization.

## Data Source

- Use a mock API layer for the first portfolio version.
- Use TanStack Query for API calls, caching, loading states, and server state.
- Do not read mock data directly inside page components once API hooks exist.

## Routing

Use REST-like routes:

```txt
/customers
/customers/new
/customers/:customerId
/customers/:customerId/edit
```

Route responsibilities:

- `/customers`: customer list, search, and filters.
- `/customers/new`: create customer form.
- `/customers/:customerId`: customer detail page.
- `/customers/:customerId/edit`: edit customer form.

After create or edit succeeds, navigate to the customer detail page.

## URL Query State

Use React Router URL query parameters for customer list state that should be shareable.

Initial query parameters:

- `search`: customer name or email search text.
- `status`: `active`, `inactive`, or omitted for all statuses.

Use local state only for UI-only state, such as open menus or selected rows.

## Forms

- Use React Hook Form for create and edit customer forms.
- Use Zod for customer form schemas.
- Keep schema names domain-specific, for example `customerFormSchema`.
- Keep form value types explicit, for example `CustomerFormValues`.

## Delete Flow

- Use a confirmation dialog before deleting a customer.
- Prefer shadcn/ui Alert Dialog for delete confirmation.
- If deleting from a detail page, navigate back to `/customers` after success.
- If deleting from a list row, keep the user on `/customers` and refresh the query.

## Customer Status

Use a simple status model for the first version:

```ts
type CustomerStatus = "active" | "inactive";
```

Do not add more statuses until there is a product reason.

## Testing

- Use Vitest for the test runner.
- Use React Testing Library for component behavior tests.
- Prefer tests for customer filters, form validation, route behavior, and CRUD flows.
- Do not test implementation details or shadcn/ui internals.

## Imports

Use the `@/` path alias for source imports.

Examples:

```ts
import { CustomerTable } from "@/features/customer/components/customer-table";
import { Button } from "@/components/ui/button";
```

Relative imports are acceptable only for nearby files in the same small folder when they are easier to read.
