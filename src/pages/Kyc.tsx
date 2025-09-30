"use client"; // This component should run in the browser (client-side), not only on the server.

import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, } from "@/components/ui/dropdown-menu";
import { ChevronDown, MoreHorizontal, Search } from "lucide-react";

type Document = {
  id: string;
  name: string;
  file: string;
  documentNo: number;
  date: string;
  status: "Pending" | "Completed";
};

const data: Document[] = [
  {
    id: "01",
    name: "Companys Offer",
    file: "https://www.producthunt.com",
    documentNo: 832,
    date: "Jan 1, 2020",
    status: "Pending",
  },
  {
    id: "02",
    name: "Companys Appointment Letter",
    file: "https://www.producthunt.com",
    documentNo: 637,
    date: "Jan 2, 2020",
    status: "Pending",
  },
  {
    id: "03",
    name: "Last 03 Month Bank Statement",
    file: "https://www.producthunt.com",
    documentNo: 459,
    date: "Jan 3, 2020",
    status: "Completed",
  },
  {
    id: "04",
    name: "10th Mark sheet",
    file: "https://www.producthunt.com",
    documentNo: 547,
    date: "Jan 4, 2020",
    status: "Completed",
  },
  {
    id: "05",
    name: "12th Mark sheet",
    file: "https://www.producthunt.com",
    documentNo: 675,
    date: "Jan 5, 2020",
    status: "Completed",
  },
];

const columns: ColumnDef<Document>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  {
    accessorKey: "file",
    header: "View File",
    cell: ({ row }) => (
      <a
        href={row.original.file}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {row.original.file}
      </a>
    ),
  },
  { accessorKey: "documentNo", header: "Document No" },
  { accessorKey: "date", header: "Date" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={row.original.status === "Pending" ? "destructive" : "secondary"}
        className={`px-3 py-1 rounded-lg text-[18px] font-medium 
        ${row.original.status === "Completed"
            ? "bg-green-100 text-green-700 hover:bg-green-200"
            : "bg-red-100 text-red-700 hover:bg-red-200"
          }`}
      >
        {row.original.status}
      </Badge>
    ),
  },
];

export default function Kyc() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mx-6 my-6">
      <h1 className="text-2xl md:text-2xl font-semibold text-[#181819E5] mb-4">
        KYC Document
      </h1>

      <div className="rounded-md bg-white px-6 py-6 shadow-sm">
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
    </div>
  );
}
