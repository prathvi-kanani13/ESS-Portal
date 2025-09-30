"use client"; // This component should run in the browser (client-side), not only on the server.

import { flexRender, getCoreRowModel, useReactTable, } from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, } from "@/components/ui/dropdown-menu";
import { ChevronDown, ClipboardList, Code, Loader, Palette, ShieldCheck, } from "lucide-react";
import { Card } from "@/components/ui/card";

type Document = {
  id: string;
  dateOfCreation: string;
  title: string;
  assignBy: string;
  timeLog: number;
  status: "Pending" | "Completed";
};

const data: Document[] = [
  {
    id: "01",
    dateOfCreation: "2025-10-01",
    title: "SAAS Development",
    assignBy: "John Doe",
    timeLog: 8,
    status: "Pending",
  },
  {
    id: "02",
    dateOfCreation: "2025-10-02",
    title: "ESS Portal Bug Fixing",
    assignBy: "Jane Doe",
    timeLog: 6,
    status: "Completed",
  },
];

const columns: ColumnDef<Document>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "dateOfCreation", header: "Date of Creation" },
  { accessorKey: "title", header: "Title" },
  { accessorKey: "assignBy", header: "Assign By" },
  { accessorKey: "timeLog", header: "Time Log" },
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

export default function Pms() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mx-6 my-6">
      <h1 className="text-2xl md:text-3xl font-semibold text-[#252C32] mb-4">
        PMS
      </h1>
      <div className="rounded-md bg-white px-6 py-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-6">

          <Card className="rounded-xl shadow-md bg-[#FBEDE7] border-none h-15 flex flex-row items-center justify-between px-6">
            <h3 className="text-md font-semibold text-[#181819E5]">
              IN PLANNING
            </h3>
            <div>
              <ClipboardList className="h-5 w-5 text-[#FF6422]" />
            </div>
          </Card>

          <Card className="rounded-xl shadow-md bg-[#E1F5FD] border-none h-15 flex flex-row items-center justify-between px-6">
            <h3 className="text-md font-semibold text-[#181819E5]">
              DESIGN COMPLETED
            </h3>
            <div className="relative">
              <Palette className="h-5 w-5 text-[#4A4DE6]" />
            </div>
          </Card>

          <Card className=" rounded-xl shadow-md bg-[#F2E7FC] border-none h-15 flex flex-row items-center justify-between px-6">
            <h3 className="text-md font-semibold text-[#181819E5]">
              IN DEVELOPMENT
            </h3>
            <div className="relative">
              <Code className="h-5 w-5 text-[#8C18E2]" />
            </div>
          </Card>

          <Card className=" rounded-xl shadow-md bg-[#4CAF5026] border-none h-15 flex flex-row items-center justify-between px-6">
            <h3 className="text-md font-semibold text-[#181819E5]">
              IN PROGRESS
            </h3>
            <div className="relative">
              <Loader className="h-5 w-5 text-[#4CAF50]" />
            </div>
          </Card>

          <Card className=" rounded-xl shadow-md bg-[#4CAF5026] border-none h-15 flex flex-row items-center justify-between px-6">
            <h3 className="text-md font-semibold text-[#181819E5]">
              GIVEN TO QA TEAM
            </h3>
            <div className="relative">
              <ShieldCheck className="h-5 w-5 text-[#4CAF50]" />
            </div>
          </Card>
        </div>

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
            {/* <button className="text-[#252C32] text-[20px] font-medium">
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
            </button> */}
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
