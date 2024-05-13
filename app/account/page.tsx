
import { DataTable } from "@/components/elements/ListTable/dataTable";
import Header from "@/components/layouts/header/Header";
import { Works, columns } from "../../components/elements/ListTable/columns"
import * as React from "react"
async function getData(): Promise<Works[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      createDate: 100,
      Category: "WebApp",
      Name: "PortFolioSite",
    },
    // ...
  ]
}

export default async function Home() {
  // 認証関連関数-----------
  
  

  
  // -----------------------

  const tableData = await getData()  // テーブル用のデータ
  
  return (
    <main className="flex min-h-screen flex-col ">
      <Header/>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={tableData} />
      </div>
    </main>
  );
}
