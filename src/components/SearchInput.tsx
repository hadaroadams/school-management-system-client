import React from "react";
import { Input } from "./ui/input";
import { GoSearch } from "react-icons/go";

const SearchInput = () => {
  return (
    <div className="max-lg:hidden flex relative items-center justify-end w-[400px]
    ">
      <Input name="search" placeholder="search" />
      <button className="absolute mr-2">
        <GoSearch className=" fill-text_neutral " />
      </button>
    </div>
  );
};

export default SearchInput;
