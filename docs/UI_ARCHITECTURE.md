# UI Architecture

This project uses Atomic Design for project-specific components and shadcn/ui for generic UI primitives.

## Main Rule

Do not write every UI component by hand.

Use shadcn/ui for common primitives. Use Atomic Design for components that belong to this app's product experience.

## Folder Roles

```txt
src/components/ui/
```

Generated shadcn/ui primitives only.

Examples:

- `button.tsx`
- `input.tsx`
- `dialog.tsx`
- `select.tsx`
- `table.tsx`
- `dropdown-menu.tsx`

```txt
src/components/atoms/
```

Small project-specific components.

Examples:

- `customer-status-badge.tsx`
- `field-error.tsx`
- `empty-message.tsx`

```txt
src/components/molecules/
```

Small composed UI groups made from atoms and shadcn/ui primitives.

Examples:

- `search-field.tsx`
- `status-filter.tsx`
- `customer-actions-menu.tsx`

```txt
src/components/organisms/
```

Larger reusable sections.

Examples:

- `app-header.tsx`
- `dashboard-shell.tsx`

```txt
src/components/templates/
```

Page-level layout shells.

Examples:

- `dashboard-template.tsx`
- `content-page-template.tsx`

```txt
src/features/customer/components/
```

Customer-specific components that are not meant to be reused across unrelated features.

Examples:

- `customer-table.tsx`
- `customer-filter.tsx`
- `customer-form.tsx`
- `customer-delete-dialog.tsx`

## Atomic Design Decision Guide

Use this guide before creating a component:

1. Is it a generic primitive like Button, Input, Table, Dialog, Select, or Dropdown? Use shadcn/ui in `src/components/ui/`.
2. Is it very small and project-specific? Use `src/components/atoms/`.
3. Does it combine a few primitives into a small group? Use `src/components/molecules/`.
4. Is it a large reusable section? Use `src/components/organisms/`.
5. Is it only for the customer feature? Use `src/features/customer/components/`.
6. Is it a page layout shell? Use `src/components/templates/`.

## Composition Example

```txt
CustomerPage
  DashboardTemplate
    CustomerHeader
    CustomerFilter
      Input from shadcn/ui
      Select from shadcn/ui
    CustomerTable
      Table from shadcn/ui
      CustomerStatusBadge
      CustomerActionsMenu
```

## Customer Feature Guidance

Customer-specific UI can stay inside `src/features/customer/components/` even if it is large.

Move a component to shared Atomic Design folders only when it is useful outside the customer feature.

## Avoid

- Do not create a custom button when shadcn/ui Button works.
- Do not create a custom input when shadcn/ui Input works.
- Do not place generated shadcn/ui files outside `src/components/ui/`.
- Do not place business-specific customer components in `src/components/ui/`.
- Do not split components only to satisfy Atomic Design. Split only when it improves readability or reuse.

## Responsive UI

- Build mobile-first when styling.
- Tables should remain readable on small screens.
- Forms should work well on mobile.
- Actions should be reachable by keyboard and touch.
