"use client";
import { Input } from "@/components/ui/input";
import { Cell } from "@tanstack/react-table";
import { useState } from "react";

interface EditableCellProps<TData, TValue> {
  cell: Cell<TData, TValue>;
  setTableData: React.Dispatch<React.SetStateAction<TData[]>>;
}

export const EditableCell = <TData, TValue>({
  cell,
  setTableData,
}: EditableCellProps<TData, TValue>) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(cell.getValue() as string);

  function handleBlur() {
    setIsEditing(false);

    const rowIndex = cell.row.index;
    const columnId = cell.column.id;
    console.log("rowIndex", rowIndex);
    console.log("columnId", columnId);
    setTableData((prevData) => {
      return prevData.map((row, index) =>
        index === rowIndex ? { ...row, [columnId]: value } : row
      );
    });
  }

  return isEditing ? (
    <Input
      value={cell.getValue() as string}
      onChange={(event) => setValue(event.target.value)}
      onBlur={handleBlur}
      autoFocus
    />
  ) : (
    <div onClick={() => setIsEditing(true)}>{value}</div>
  )
};
