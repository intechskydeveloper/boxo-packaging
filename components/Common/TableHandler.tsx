"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Trash2, Pencil } from "lucide-react";

type Spec = {
  key: string;
  value: string;
};

export default function SpecificationsTable({
  initialData = [],
  onChange,
}: {
  initialData?: Spec[];
  onChange?: (data: Spec[]) => void;
}) {
  const [specs, setSpecs] = useState<Spec[]>(initialData);
  const [keyInput, setKeyInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAddOrUpdate = () => {
    if (!keyInput.trim() || !valueInput.trim()) return;

    let newSpecs;
    if (editingIndex !== null) {
      // update existing row
      newSpecs = specs.map((s, i) =>
        i === editingIndex ? { key: keyInput, value: valueInput } : s
      );
      setEditingIndex(null);
    } else {
      // add new row
      newSpecs = [...specs, { key: keyInput, value: valueInput }];
    }

    setSpecs(newSpecs);
    onChange?.(newSpecs);

    setKeyInput("");
    setValueInput("");
  };

  const handleDelete = (index: number) => {
    const newSpecs = specs.filter((_, i) => i !== index);
    setSpecs(newSpecs);
    onChange?.(newSpecs);

    // if deleting the row being edited, reset form
    if (editingIndex === index) {
      setEditingIndex(null);
      setKeyInput("");
      setValueInput("");
    }
  };

  const handleEdit = (index: number) => {
    setKeyInput(specs[index].key);
    setValueInput(specs[index].value);
    setEditingIndex(index);
  };

  return (
    <Card className="w-full max-w-3xl p-4 py-2 mt-4">
      <Table className="border-gray-500/50">
        <TableHeader>
          <TableRow className="hover:bg-transparent border-b">
            <TableHead>Specification</TableHead>
            <TableHead>Value</TableHead>
            <TableHead className="w-24 text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Input Row */}
          <TableRow className="hover:bg-transparent border-b">
            <TableCell>
              <Input
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                placeholder="e.g. Material"
                className="border-gray-500/50"
              />
            </TableCell>
            <TableCell>
              <Input
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
                placeholder="e.g. Cardboard"
                className="border-gray-500/50"
              />
            </TableCell>
            <TableCell className="text-center">
              <Button
                size="icon"
                onClick={handleAddOrUpdate}
                type="button" // 👈 prevent form submit
              >
                <Plus className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>

          {specs.map((spec, index) => (
            <TableRow key={index} className="hover:bg-transparent border-b">
              <TableCell>{spec.key}</TableCell>
              <TableCell>{spec.value}</TableCell>
              <TableCell className="flex justify-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => handleEdit(index)}
                  type="button"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => handleDelete(index)}
                  type="button"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
