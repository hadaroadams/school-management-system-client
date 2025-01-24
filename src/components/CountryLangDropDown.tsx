import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";

const CountryLangDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="flex justify-center items-center gap-2 p-1 outline outline-[1px]  outline-gray-200 rounded-md w-10 h-10  text-text_neutral">
          <Image
            src={"/icons/eng-flag.png"}
            alt="English flag"
            width={10}
            height={10}
            className=" size-5"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        {/* Display Country flags with Language */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CountryLangDropDown;
