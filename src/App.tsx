import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CustomerFilters } from "@/features/customer/components/customer-filter";
import { CustomerHeader } from "@/features/customer/components/customer-header";
import { CustomerTable } from "@/features/customer/components/customer-table";
import { customers } from "@/features/customer/data/customer";

function App() {
  return (
    <div className="min-h-screen bg-muted/40">
      <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-8 sm:px-6">
        <CustomerHeader />

        <Card>
          <CardHeader>
            <CardTitle>All customers</CardTitle>
            <CardDescription>
              {customers.length} customers • Search by name or email, or filter
              by status.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CustomerFilters />
            <CustomerTable customers={customers} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
