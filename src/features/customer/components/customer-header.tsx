import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CustomerHeader() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          Customers
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage and view your customer information.
        </p>
      </div>

      <Button type="button" className="w-full sm:w-auto">
        <Plus aria-hidden="true" />
        Add customer
      </Button>
    </header>
  );
}
