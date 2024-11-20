"use client";

import { Button } from "@/components/ui/button";
import { Employee } from "@/data/schema-definitions";
// import { Employee } from "@/data/schema-definitions";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { EditableCell } from "./editable-cell";

interface ColumnsProps {
  setTableData: React.Dispatch<React.SetStateAction<Employee[]>>;
}

export const employeeColumns = ({
  setTableData,
}: ColumnsProps): ColumnDef<Employee>[] => [
  {
    accessorKey: "full_name",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-6"
        >
          Full Name
          <ArrowUpDown size={16} />
        </Button>
      );
    },
    cell: ({ cell }) => {
      return <EditableCell cell={cell} setTableData={setTableData} />;
    },
  },
  {
    accessorKey: "department",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-6"
        >
          Department
          <ArrowUpDown size={16} />
        </Button>
      );
    },
    cell: ({ cell }) => {
      return <EditableCell cell={cell} setTableData={setTableData} />;
    },
  },
  {
    accessorKey: "position",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-6"
        >
          Position
          <ArrowUpDown size={16} />
        </Button>
      );
    },
    cell: ({ cell }) => {
      return <EditableCell cell={cell} setTableData={setTableData} />;
    },
  },
  {
    accessorKey: "station",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-6"
        >
          Station
          <ArrowUpDown size={16} />
        </Button>
      );
    },
    cell: ({ cell }) => {
      return <EditableCell cell={cell} setTableData={setTableData} />;
    },
  },
  {
    accessorKey: "employment_type",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-6"
        >
          Employment Type
          <ArrowUpDown size={16} />
        </Button>
      );
    },
    cell: ({ cell }) => {
      return <EditableCell cell={cell} setTableData={setTableData} />;
    },
  },
  {
    accessorKey: "hire_date",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-6"
        >
          Hire Date
          <ArrowUpDown size={16} />
        </Button>
      );
    },
    cell: ({ cell }) => {
      return <EditableCell cell={cell} setTableData={setTableData} />;
    },
  },
];
