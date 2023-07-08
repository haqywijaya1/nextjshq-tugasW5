"use client"; //
import { Search } from "lucide-react";

export const SearchBar = ({ onSearchChange }) => {
  return (
    <div className="bg-slate-100 p-3 rounded-full flex items-center gap-2">
      <Search size={16} />
      <input
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search content..."
      />
    </div>
  );
};