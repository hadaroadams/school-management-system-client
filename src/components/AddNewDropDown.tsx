import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { MdAddCircleOutline } from "react-icons/md";
export const AddNewDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="flex justify-center items-center gap-2 p-1 outline outline-[1px]  outline-gray-200 rounded-md w-10 h-10  text-text_primary-light">
          <MdAddCircleOutline className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        {/* Display Country flags with Language */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
