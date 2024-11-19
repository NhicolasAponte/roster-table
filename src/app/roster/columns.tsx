"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Employee } from "@/data/schema-definitions";
// import { Employee } from "@/data/schema-definitions";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

interface ColumnsProps<TData> {
  setTableData: React.Dispatch<React.SetStateAction<TData[]>>;
}

export const employeeColumns = <TData extends Employee>({
  setTableData,
}: ColumnsProps<TData>): ColumnDef<TData>[] => [
  {
    accessorKey: "full_name",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Full Name
          <ArrowUpDown size={16} />
        </Button>
      );
    },
    cell: ({ cell }) => {
      return (
        <Input
          value={cell.getValue() as string}
          onChange={(event) => {
            const newValue = event.target.value;
            const rowIndex = cell.row.index;
            setTableData((prevData) => {
              return prevData.map((row, index) =>
                index === rowIndex ? { ...row, full_name: newValue } : row
              );
            });
          }}
        />
      );
    },
  },
  {
    accessorKey: "department",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Department
          <ArrowUpDown size={16} />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.original.department}</div>;
    },
  },
  {
    accessorKey: "position",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Position
          <ArrowUpDown size={16} />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.original.position}</div>;
    },
  },
  {
    accessorKey: "station",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Station
          <ArrowUpDown size={16} />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.original.station}</div>;
    },
  },
  {
    accessorKey: "employment_type",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Employment Type
          <ArrowUpDown size={16} />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.original.employment_type}</div>;
    },
  },
  {
    accessorKey: "hire_date",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Hire Date
          <ArrowUpDown size={16} />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.original.hire_date}</div>;
    },
  },
];
