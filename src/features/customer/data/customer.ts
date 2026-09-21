export type CustomerStatus = "active" | "inactive";

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: CustomerStatus;
  joinedAt: string;
}

export const customers: Customer[] = [
  {
    id: "cus_001",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    phone: "+66 81 234 5678",
    status: "active",
    joinedAt: "2026-09-12",
  },
  {
    id: "cus_002",
    name: "James Lee",
    email: "james@example.com",
    phone: "+66 82 345 6789",
    status: "active",
    joinedAt: "2026-09-08",
  },
  {
    id: "cus_003",
    name: "Emma Thompson",
    email: "emma@example.com",
    phone: "+66 83 456 7890",
    status: "inactive",
    joinedAt: "2026-08-27",
  },
];
