import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Customer } from "../data/customer";

interface CustomerTableProps {
  customers: Customer[];
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function CustomerTable({ customers }: CustomerTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="hidden md:table-cell">Phone</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="hidden sm:table-cell">Joined</TableHead>
          <TableHead className="w-12 text-right">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {customers.map((customer) => (
          <TableRow key={customer.id}>
            <TableCell>
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground"
                >
                  {getInitials(customer.name)}
                </span>
                <span className="font-medium">{customer.name}</span>
              </div>
            </TableCell>
            <TableCell className="text-muted-foreground">
              {customer.email}
            </TableCell>
            <TableCell className="hidden text-muted-foreground md:table-cell">
              {customer.phone}
            </TableCell>

            <TableCell>
              <Badge
                variant={customer.status === "active" ? "default" : "secondary"}
              >
                {customer.status}
              </Badge>
            </TableCell>

            <TableCell className="hidden text-muted-foreground sm:table-cell">
              {customer.joinedAt}
            </TableCell>

            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label={`Actions for ${customer.name}`}
                  >
                    <MoreHorizontal aria-hidden="true" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View details</DropdownMenuItem>
                  <DropdownMenuItem>Edit customer</DropdownMenuItem>
                  <DropdownMenuItem variant="destructive">
                    Delete customer
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
