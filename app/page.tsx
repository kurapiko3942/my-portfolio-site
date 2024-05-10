
import { DataTable } from "@/components/elements/ListTable/dataTable";
import Header from "@/components/layouts/header/Header";
import { Payment, columns } from "../components/elements/ListTable/columns"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}
 

  

export default async function Home() {
  const data = await getData()
  return (
    <main className="flex min-h-screen flex-col ">
      <Header/>
      <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
