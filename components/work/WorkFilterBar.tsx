"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FilterCategory =
  | "All"
  | "Websites"
  | "Web Applications"
  | "Mobile Apps"
  | "UI/UX Design"
  | "Other";

interface WorkFilterBarProps {
  activeCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const CATEGORIES: FilterCategory[] = [
  "All",
  "Websites",
  "Web Applications",
  "Mobile Apps",
  "UI/UX Design",
  "Other",
];

export default function WorkFilterBar({
  activeCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
}: WorkFilterBarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-8 pt-2 select-none">
      
      {/* Filter Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory(category)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 shrink-0 cursor-pointer ${
                isActive
                  ? "bg-[#111111] text-white shadow-sm ring-1 ring-black"
                  : "bg-white text-[#555555] hover:text-[#111111] border border-[#E8E8E2] hover:border-gray-400"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Sort Dropdown */}
      <div className="relative flex items-center gap-2 self-end sm:self-auto shrink-0">
        <span className="text-xs text-[#777777] font-medium">Sort by</span>
        <div className="relative">
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1.5 rounded-full border border-[#E8E8E2] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111111] shadow-2xs hover:border-gray-400 transition-colors cursor-pointer"
          >
            <span>{sortBy}</span>
            <ChevronDown className="h-3.5 w-3.5 text-gray-500" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-1.5 z-30 w-28 rounded-xl border border-gray-200 bg-white py-1 shadow-lg text-xs">
              {["Latest", "Oldest", "Featured"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onSortChange(option);
                    setDropdownOpen(false);
                  }}
                  className="w-full px-3 py-1.5 text-left font-medium text-gray-700 hover:bg-gray-50 hover:text-black"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
