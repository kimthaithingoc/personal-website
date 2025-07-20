"use client";

import type React from "react";

import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { useTranslations } from "next-intl";

interface PostSearchProps {
  onSearch: (query: string) => void;
  initialValue?: string;
}

export function PostSearch({ onSearch, initialValue = "" }: PostSearchProps) {
  const [keyword, setKeyword] = useState<string>(initialValue);
  const t = useTranslations();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    onSearch(e.target.value);
  };

  const clearSearch = () => {
    setKeyword("");
    onSearch("");
  };

  return (
    <div className="flex items-center gap-1 border rounded-full px-3 dark:bg-input">
      <Search className="w-4 h-4" />
      <Input
        value={keyword}
        onChange={onChange}
        className="border-0 focus-visible:ring-0"
        placeholder={t("Posts.search.placeholder")}
      />
      {keyword && (
        <X
          onClick={clearSearch}
          className="w-4 h-4 cursor-pointer hover:text-accent"
        />
      )}
    </div>
  );
}
