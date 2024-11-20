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

    // NOTE TODO: call server action here
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleBlur();
    }
  }

  return isEditing ? (
    <Input
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      autoFocus
      className="focus-visible:ring-0 px-1"
    />
  ) : (
    <div onClick={() => setIsEditing(true)}>{value}</div>
  );
};
