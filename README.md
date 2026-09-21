# Customer Management

Customer Management is a frontend portfolio project for building a clean CRUD interface to manage customer records.

The goal is to show practical frontend skills through a real business-style UI: customer listing, filtering, adding, editing, deleting, and basic data validation.

## Project Goals

- Build a customer management CRUD app that feels realistic and portfolio-ready.
- Practice React, TypeScript, component structure, and frontend state management.
- Design a clear UI for viewing and managing customer information.
- Show good code organization by separating customer features into their own folder.
- Keep the app simple enough to understand, but complete enough to demonstrate frontend skills.

## Portfolio Focus

This project is intended to demonstrate:

- Feature-based folder structure
- Reusable UI components
- Type-safe customer data models
- Search and status filtering
- Form handling for create and edit flows
- Basic validation and user feedback
- Responsive layout for desktop and mobile
- Clean visual design suitable for a business dashboard

## Core Features

### Current

- Customer header section
- Customer search and status filter UI
- Customer table UI
- Mock customer data model

### Planned

- Display customer status badges
- Add customer form
- Edit customer form
- Delete customer action
- Search by customer name or email
- Filter by customer status
- Empty state when no customers match the filter
- Form validation for required fields and email format
- Responsive styling

## Tech Stack

- React: UI rendering
- TypeScript: type safety
- Vite: development server and build tooling
- Tailwind CSS: styling
- TanStack Query: API calls and server state
- React Hook Form: form state and form submission
- Zod: schema validation
- React Router: routing and URL query state
- Lucide React: icons

## Project Structure

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
        customer-filter.tsx
        customer-header.tsx
        customer-table.tsx
      data/
        customer.ts
```

## Documentation

- `AGENTS.md`: instructions for AI agents working in this project
- `docs/ARCHITECTURE_DECISIONS.md`: routing, data, forms, delete flow, testing, and import decisions
- `docs/PROJECT_GUIDELINES.md`: coding rules, naming rules, and project structure
- `docs/UI_ARCHITECTURE.md`: Atomic Design structure and UI placement rules
- `docs/SHADCN_USAGE.md`: rules for using shadcn/ui instead of hand-built primitives

## UI Approach

This project uses shadcn/ui for common UI primitives and Atomic Design for project-specific components.

Generated shadcn/ui components should live in `src/components/ui/`. Customer-specific components should stay in `src/features/customer/components/` unless they become useful across the app.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Notes

This project starts with local mock data. A future version may connect to an API or use browser storage to persist customer records.
