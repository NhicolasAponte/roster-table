"use client";

import { Button } from "@/components/ui/button";
import { Employee } from "@/data/schema-definitions";
import { ColumnDef } from "@tanstack/react-table";

export const employeeColumns: ColumnDef<Employee>[] = [
  {
    accessorKey: "full_name",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Full Name
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.original.full_name}</div>;
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
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row.original.hire_date}</div>;
    },
  },
];
