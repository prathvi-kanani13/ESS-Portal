"use client";

import { flexRender, getCoreRowModel, useReactTable, type ColumnDef, } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, } from "@/components/ui/dropdown-menu";
import { Calendar as CalendarIcon, ChevronDown, } from "lucide-react";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

type PaySlip = {
    id: string;
    month: string;
};

const data: PaySlip[] = [
    { id: "01", month: "September 2025" },
    { id: "02", month: "August 2025" },
];

const columns: ColumnDef<PaySlip>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "month",
        header: "Month",
    },
    {
        id: "action",
        header: "Action",
        cell: () => (
            <span className="text-[18px] font-medium text-[#377DFF] cursor-pointer hover:underline block text-right">
                Download
            </span>
        ),
    },
];

export default function PaySlip() {
    const [tableData] = useState<PaySlip[]>(data);
    const [fromDate, setFromDate] = useState<Date | undefined>();
    const [toDate, setToDate] = useState<Date | undefined>();

    const table = useReactTable({
        data: tableData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="mx-6 my-6">
            <h1 className="text-2xl md:text-3xl font-semibold text-[#252C32] mb-4">
                Pay Slip List
            </h1>

            <div className="rounded-md bg-white px-6 py-6 shadow-sm">
                <div className="flex items-end gap-4 mb-6">
                    <div className="flex flex-col relative">
                        <label
                            htmlFor="from-date"
                            className="mb-2 text-sm font-medium text-gray-600"
                        >
                            From Date
                        </label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <div className="relative w-[160px]">
                                    <Input
                                        id="from-date"
                                        type="text"
                                        readOnly
                                        value={fromDate ? format(fromDate, "dd-MM-yyyy") : ""}
                                        placeholder="DD-MM-YYYY"
                                        className="pr-8 cursor-pointer"
                                    />
                                    <CalendarIcon className="h-4 w-4 text-[#234088] absolute right-2 top-[10px] cursor-pointer" />
                                </div>
                            </PopoverTrigger>

                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={fromDate}
                                    onSelect={setFromDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="flex flex-col relative">
                        <label
                            htmlFor="to-date"
                            className="mb-2 text-sm font-medium text-gray-600"
                        >
                            To Date
                        </label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <div className="relative w-[160px]">
                                    <Input
                                        id="to-date"
                                        type="text"
                                        readOnly
                                        value={toDate ? format(toDate, "dd-MM-yyyy") : ""}
                                        placeholder="DD-MM-YYYY"
                                        className="pr-8 cursor-pointer"
                                    />
                                    <CalendarIcon className="h-4 w-4 text-[#234088] absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer" />
                                </div>
                            </PopoverTrigger>

                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={toDate}
                                    onSelect={setToDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <Button className="bg-[#3A5FBE] hover:bg-[#2c4ea3] text-white text-[16px] font-medium px-6 py-5">
                        Apply
                    </Button>
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
                            className="w-[160px] p-0 rounded-lg shadow-lg border-[#F0F0F0] bg-[#F9F9F9]"
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
                </div>

                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead
                                        key={header.id}
                                        className={`px-5 py-3 text-[19px] font-medium text-[#6E7C87] border-b-2 border-[#E5E9EB]
                                        ${header.column.id === "action"
                                                ? "text-right"
                                                : "text-left"
                                            }`}
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
                                        className={`px-5 py-2 text-[18px] font-medium text-[#252C32] 
                                        ${cell.column.id === "action"
                                                ? "text-right"
                                                : "text-left"
                                            }`}
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
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
