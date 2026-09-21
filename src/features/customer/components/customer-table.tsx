import type { Customer } from "../data/customer";

interface CustomerTableProps {
  customers: Customer[];
}

export function CustomerTable({ customers }: CustomerTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Status</th>
          <th>Joined</th>
          <th aria-label="Actions" />
        </tr>
      </thead>

      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>

            <td>
              {/* <CustomerStatus status={customer.status} /> */}
            </td>

            <td>{customer.joinedAt}</td>

            <td>
              <button aria-label={`Actions for ${customer.name}`}>⋮</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
