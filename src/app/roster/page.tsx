import { employees } from "@/lib/placeholder-data";
import { DataTable } from "./data-table";

export default async function RosterPage() {
  const employeesWithFullName = employees.map((employee) => {
    return {
      ...employee,
      full_name: `${employee.first_name} ${employee.last_name}`,
    };
  });

  return (
    <div className="container mx-auto py-10">
      <div className="border rounded-md my-2 p-4">employee table</div>
      <DataTable data={employeesWithFullName} />
    </div>
  );
}
