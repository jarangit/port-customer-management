import "./App.css";
import { CustomerFilters } from "@/features/customer/components/customer-filter";
import { CustomerHeader } from "@/features/customer/components/customer-header";
import { CustomerTable } from "@/features/customer/components/customer-table";
import { customers } from "@/features/customer/data/customer";

function App() {
  return (
    <>
      <div>Hello, world!</div>
      <CustomerHeader />
      <CustomerFilters />
      <CustomerTable customers={customers} />
    </>
  );
}

export default App;
