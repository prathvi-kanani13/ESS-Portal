"use client"; // This component should run in the browser (client-side), not only on the server.

import { flexRender, getCoreRowModel, useReactTable, } from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, } from "@/components/ui/dropdown-menu";
import { ChevronDown, MoreHorizontal, Search } from "lucide-react";

type Document = {
  id: string;
  name: string;
  mobileNo: number;
  DocumentNo: number;
  dateofBirth: string;
  lifeCertificate: "Pending" | "Completed";
};

const data: Document[] = [
  {
    id: "01",
    name: "Father Name",
    mobileNo: 8326578998,
    DocumentNo: 832,
    dateofBirth: "Jan 1, 2020",
    lifeCertificate: "Pending",
  },
  {
    id: "02",
    name: "Mother Name",
    DocumentNo: 637,
    mobileNo: 6376565657,
    dateofBirth: "Jan 2, 2020",
    lifeCertificate: "Completed",
  },
];

const columns: ColumnDef<Document>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "mobileNo", header: "Mobile No" },
  { accessorKey: "dateofBirth", header: "Date of Birth" },
  {
    accessorKey: "lifeCertificate",
    header: "Life Certificate",
    cell: ({ row }) => (
      <Badge
        variant={row.original.lifeCertificate === "Pending" ? "destructive" : "secondary"}
        className={`px-3 py-1 rounded-lg text-[18px] font-medium 
        ${row.original.lifeCertificate === "Completed"
            ? "bg-green-100 text-green-700 hover:bg-green-200"
            : "bg-red-100 text-red-700 hover:bg-red-200"
          }`}
      >
        {row.original.lifeCertificate}
      </Badge>
    ),
  },
];

export default function Family() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md bg-white mx-6 my-6 px-6 py-6 shadow-sm">
      <div className="flex items-center justify-between px-4 py-4 border-b-2 border-[#E5E9EB]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 text-[#252C32] text-[20px] font-medium border-none"
            >
              Show All <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[140px] p-0 rounded-lg shadow-lg border-[#F0F0F0] bg-[#F9F9F9]"
            align="end"
          >
            <DropdownMenuItem className="w-full py-2 justify-center text-[#8F8F8F] text-base font-medium cursor-pointer hover:bg-gray-100">
              Show All
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-200 h-[1px] my-0" />

            <DropdownMenuItem className="w-full py-2 justify-center text-[#8F8F8F] text-base font-medium cursor-pointer hover:bg-gray-100">
              Pending Only
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-200 h-[1px] my-0" />

            <DropdownMenuItem className="w-full py-2 justify-center text-[#8F8F8F] text-base font-medium cursor-pointer hover:bg-gray-100">
              Complete Only
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-10">
          <button className="text-[#252C32] text-[20px] font-medium">
            Properties
          </button>
          <button className="text-[#252C32] text-[20px] font-medium">
            Filter
          </button>
          <button className="text-[#252C32] text-[20px] font-medium">
            Sort
          </button>
          <button className="flex items-center gap-3 text-[#252C32] text-[20px] font-medium">
            <Search className="h-5 w-5 text-[#B0BABF] font-bold" /> Search
          </button>
          <button className="text-gray-600 hover:text-black">
            <MoreHorizontal className="h-5 w-5" />
          </button>
          <Button className="bg-[#377DFF] text-white text-[18px] px-6 py-5">
            New +
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="px-5 py-3 text-[19px] font-medium text-[#6E7C87] border-b-2 border-[#E5E9EB]"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              className="hover:bg-gray-50 border-b-2 border-[#E5E9EB]"
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className="px-5 py-2 text-[18px] text-[#252C32] font-medium"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
