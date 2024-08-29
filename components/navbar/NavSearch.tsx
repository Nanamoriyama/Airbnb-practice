"use client";
import { Input } from "../ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa"; // React Iconsを使用してアイコンを追加

function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/?${params.toString()}`);
  }, 500);

  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [searchParams.get("search")]);

  return (
    <div className="relative max-w-xs">
      <Input
        type="text"
        placeholder="find a property..."
        className="w-full dark:bg-muted rounded-full pl-14 py-6" // アイコン分の余白を追加
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value);
        }}
        value={search}
      />
      <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-pink-500 rounded-full p-2.5 w-9 h-9" />
    </div>
  );
}

export default NavSearch;
