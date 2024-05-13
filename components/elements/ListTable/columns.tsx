"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Works = {
  id: string
  createDate: number
  Category: "WebApp" | "MobileApp" | "Nobel" | "Game"| "Video" | "Comics" | "Others"
  Name: string
}

export const columns: ColumnDef<Works>[] = [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "CreateDate",
    header: "CreateDate",
  },
]
