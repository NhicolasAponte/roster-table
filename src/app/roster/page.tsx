import { columns, Payment } from "./basic-columns";
import { BasicTable } from "./basic-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "my.email@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "some.email@example.com",
    },
    {
      id: "728ed52h",
      amount: 300,
      status: "success",
      email: "test@example.com",
    },
    {
      id: "728ed52i",
      amount: 400,
      status: "failed",
      email: "another.email@email.com",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <BasicTable columns={columns} data={data} />
    </div>
  );
}
