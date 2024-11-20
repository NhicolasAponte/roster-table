"use client";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fuzzyFilter } from "@/lib/utils";
import {
  //   ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { employeeColumns } from "./columns";
import { Employee } from "@/data/schema-definitions";
import { Button } from "@/components/ui/button";

// TData: generic type for the data that will be displayed in the table
// TValue: generic type for the value of the data that will be displayed in the table 
interface DataTableProps {
  //columns: ColumnDef<TData, TValue>[];
  data: Employee[];
}

export function DataTable({
  data,
}: DataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [tableData, setTableData] = useState(data);

  const table = useReactTable({
    data: tableData,
    columns: employeeColumns({ setTableData }),
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: fuzzyFilter,
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div>
      <div className="flex justify-between">
        <Input
          placeholder="Search ..."
          onChange={(event) => table.setGlobalFilter(event.target.value)}
          className="max-w-sm mb-2"
        />
        <Button variant={"secondary"}>
            Add New Employee
        </Button>
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-center">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-center">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={employeeColumns.length}
                  className="h-8 text-center"
                >
                  No data
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
