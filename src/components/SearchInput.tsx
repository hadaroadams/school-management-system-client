import React from "react";
import { Input } from "./ui/input";
import { GoSearch } from "react-icons/go";

const SearchInput = () => {
  return (
    <div className="flex relative items-center justify-end">
      <Input name="search" placeholder="search" />
      <button className="absolute mr-2">
        <GoSearch />
      </button>
    </div>
  );
};

export default SearchInput;
