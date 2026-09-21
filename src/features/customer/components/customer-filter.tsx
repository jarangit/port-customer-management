export function CustomerFilters() {
  return (
    <div>
      <input type="search" placeholder="Search by name or email..." />

      <select defaultValue="all">
        <option value="all">All status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
}
