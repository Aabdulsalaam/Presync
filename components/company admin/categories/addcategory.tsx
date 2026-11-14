
"use client";

import { useState } from "react";
import { X, ChevronDown, Check, Plus } from "lucide-react";

export type CategoryType =
  | "Departments"
  | "Roles"
  | "Teams"
  | "Locations";

export interface NewCategory {
  name: string;
  type: CategoryType;
  color: string;
  background: string;
}

interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (category: NewCategory) => void;
}

const categoryTypes: CategoryType[] = [
  "Departments",
  "Roles",
  "Teams",
  "Locations",
];

const colors = [
  { color: "#8B5CF6", background: "#F3E8FF" },
  { color: "#00C853", background: "#DCFCE7" },
  { color: "#FF4444", background: "#FEE2E2" },
  { color: "#D6B900", background: "#FEF9C3" },
  { color: "#9333EA", background: "#E9E5FF" },
  { color: "#737373", background: "#F3F4F6" },
  { color: "#06B6D4", background: "#CFFAFE" },
  { color: "#FF8800", background: "#FFEDD5" },
  { color: "#008B72", background: "#CCFBF1" },
  { color: "#84CC16", background: "#ECFCCB" },
];

export default function AddCategoryModal({
  isOpen,
  onClose,
  onAdd,
}: AddCategoryModalProps) {
  const [name, setName] = useState("");
  const [type, setType] = useState<CategoryType | "">("");
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  if (!isOpen) return null;

  const handleClose = () => {
    setName("");
    setType("");
    setSelectedColor(colors[0]);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !type) return;

    onAdd({
      name: name.trim(),
      type,
      color: selectedColor.color,
      background: selectedColor.background,
    });

    setName("");
    setType("");
    setSelectedColor(colors[0]);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-[480px] overflow-y-auto rounded-xl bg-white p-5 shadow-2xl sm:p-6">

        {/* HEADER */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[24px] font-semibold tracking-tight text-black sm:text-[28px]">
            Add New Category
          </h2>

          <button
            type="button"
            onClick={handleClose}
            className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* CATEGORY NAME */}
          <div>
            <label
              htmlFor="categoryName"
              className="mb-2 block text-[13px] font-medium text-[#171717]"
            >
              Category Name
            </label>

            <input
              id="categoryName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter category name"
              required
              autoFocus
              className="h-[46px] w-full rounded-xl border border-[#D1D5DB] px-3 text-[13px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#4968F5] focus:ring-2 focus:ring-[#4968F5]/10"
            />
          </div>

          {/* CATEGORY TYPE */}
          <div>
            <label
              htmlFor="categoryType"
              className="mb-2 block text-[13px] font-medium text-[#171717]"
            >
              Type
            </label>

            <div className="relative">
              <select
                id="categoryType"
                value={type}
                onChange={(e) =>
                  setType(e.target.value as CategoryType | "")
                }
                required
                className="h-[44px] w-full appearance-none rounded-xl border border-[#D1D5DB] bg-white px-3 pr-10 text-[13px] text-slate-700 outline-none transition focus:border-[#4968F5] focus:ring-2 focus:ring-[#4968F5]/10"
              >
                <option value="" disabled>
                  Select option
                </option>

                {categoryTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={15}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>
          </div>

          {/* COLOR PALETTE */}
          <div>
            <label className="mb-3 block text-[13px] font-medium text-[#171717]">
              Choose Category Color
            </label>

            <div className="space-y-3">
              {[colors.slice(0, 5), colors.slice(5, 10)].map(
                (colorRow, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="relative flex items-center justify-around rounded-xl border px-1 py-2"
                    style={{
                      borderColor:
                        rowIndex === 0 ? "#2563EB" : "#EC4899",
                      backgroundColor:
                        rowIndex === 0 ? "#DBEAFE" : "#FCE7F3",
                    }}
                  >
                    {colorRow.map((item) => {
                      const selected =
                        selectedColor.color === item.color;

                      return (
                        <button
                          key={item.color}
                          type="button"
                          onClick={() => setSelectedColor(item)}
                          aria-label={`Select ${item.color} category color`}
                          aria-pressed={selected}
                          className="relative flex h-[62px] w-[52px] shrink-0 items-center justify-center rounded-xl border-2 transition hover:-translate-y-1"
                          style={{
                            backgroundColor: item.background,
                            borderColor: item.color,
                            boxShadow: selected
                              ? `0 0 0 2px white, 0 0 0 4px ${item.color}`
                              : "none",
                          }}
                        >
                          {selected && (
                            <Check
                              size={19}
                              style={{ color: item.color }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )
              )}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-3 pt-1">
            <button
              type="button"
              onClick={handleClose}
              className="flex h-[44px] flex-1 items-center justify-center rounded-xl border border-[#D1D5DB] bg-white text-[13px] font-semibold text-[#404040] transition hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!name.trim() || !type}
              className="flex h-[44px] flex-1 items-center justify-center gap-2 rounded-xl bg-[#4968F5] text-[13px] font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Plus size={15} />
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
