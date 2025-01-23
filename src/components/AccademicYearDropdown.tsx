import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { FaRegCalendarAlt } from "react-icons/fa";

export const AccademicYearDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="flex justify-center items-center gap-2 p-2 outline outline-[1px]  outline-gray-200 rounded-md  text-text_primary-light text-sm">
          <FaRegCalendarAlt className="size-3" />
          <span className="text-nowrap">Academic Year : 2024 / 2025</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full text-text_primary">
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Academic Year : 2024/2025</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Academic Year : 2024/2025</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Academic Year : 2024/2025</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
