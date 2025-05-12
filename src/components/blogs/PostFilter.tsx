import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface PostFilterProps {
  setFilters: Dispatch<SetStateAction<Record<string, unknown>>>;
  initialFilters?: string[];
}

const PostFilter = ({ setFilters, initialFilters = [] }: PostFilterProps) => {
  const filterFields = ["Technology", "Projects", "Others"];
  const [activeFilterMap, setActiveFilterMap] = useState<
    Record<string, boolean>
  >(
    filterFields.reduce((acc, field) => {
      acc[field] = initialFilters.includes(field);
      return acc;
    }, {} as Record<string, boolean>)
  );

  const onFilterChange = (field: string) => {
    setActiveFilterMap((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  useEffect(() => {
    const activeFilters = Object.keys(activeFilterMap).filter(
      (key) => activeFilterMap[key]
    );

    setFilters((prev) => {
      const newFilters = { ...prev };
      if (activeFilters.length > 0) {
        newFilters.category = activeFilters;
      } else {
        delete newFilters.category;
      }
      return newFilters;
    });
  }, [activeFilterMap, setFilters]);

  return (
    <div className="flex items-center gap-3">
      {filterFields.map((field) => (
        <Button
          key={field}
          onClick={() => onFilterChange(field)}
          variant={activeFilterMap[field] ? "default" : "outline"}
          className={cn(
            "rounded-full",
            activeFilterMap[field]
              ? "hover:line-through hover:bg-primary/80"
              : "border-primary hover:bg-muted hover:text-primary"
          )}
        >
          {field}
        </Button>
      ))}
    </div>
  );
};

export default PostFilter;
