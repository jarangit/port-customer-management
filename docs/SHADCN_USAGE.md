# shadcn/ui Usage

This project uses shadcn/ui for common UI primitives.

The goal is to avoid hand-building generic UI components and focus on product-specific customer management behavior.

## Main Rule

Use shadcn/ui first for common UI primitives.

Only create custom components when the UI has project-specific meaning, composition, or behavior.

## shadcn/ui Folder

All shadcn/ui generated components must live in:

```txt
src/components/ui/
```

Do not put product-specific components in this folder.

## Use shadcn/ui For

- Button
- Input
- Label
- Textarea
- Select
- Checkbox
- Dialog
- Alert Dialog
- Dropdown Menu
- Table
- Badge
- Card
- Tabs
- Toast or Sonner
- Form primitives when needed

## Create Project Components For

- Customer status display
- Customer table composition
- Customer create and edit forms
- Customer delete confirmation flow
- Customer filters
- Dashboard layout
- Empty states
- Business-specific action menus

## Good Examples

Use shadcn/ui primitive:

```tsx
import { Button } from "@/components/ui/button";

export function AddCustomerButton() {
  return <Button type="button">Add customer</Button>;
}
```

Create a project-specific component:

```tsx
import { Badge } from "@/components/ui/badge";

interface CustomerStatusBadgeProps {
  status: "active" | "inactive";
}

export function CustomerStatusBadge({ status }: CustomerStatusBadgeProps) {
  return <Badge variant={status === "active" ? "default" : "secondary"}>{status}</Badge>;
}
```

## Bad Examples

Do not write a custom generic button:

```tsx
export function Button() {
  return <button className="rounded px-4 py-2">Click</button>;
}
```

Do not put a customer-specific component inside `src/components/ui/`:

```txt
src/components/ui/customer-status-badge.tsx
```

## Installation Notes

If shadcn/ui is not configured yet, configure it before adding generated components.

Use the official shadcn/ui CLI and keep the generated files in `src/components/ui/`.

After setup, prefer adding only the components needed for the current feature.

## Styling Rules

- Follow the existing design tokens from shadcn/ui and Tailwind CSS.
- Avoid large one-off CSS files when utility classes are enough.
- Keep component styling close to the component.
- Do not override shadcn/ui internals unless necessary.

## Accessibility Rules

- Prefer shadcn/ui Dialog, Dropdown Menu, Select, and Alert Dialog for interactive overlays.
- Keep labels connected to inputs.
- Use accessible names for icon-only buttons.
- Keep keyboard navigation working.

## Decision Checklist

Before creating UI, ask:

1. Does shadcn/ui already provide this primitive?
2. Is this component generic or project-specific?
3. Should this live in `src/components/ui/`, Atomic Design folders, or `src/features/customer/components/`?
4. Can this be simpler by composing existing shadcn/ui components?
5. Is the component accessible by default?
