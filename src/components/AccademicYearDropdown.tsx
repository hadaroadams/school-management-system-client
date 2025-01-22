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
      <DropdownMenuTrigger className="flex justify-center items-center gap-2 p-2">
        <FaRegCalendarAlt className="fill-[#3D5EE1] size-4" />
        <span>Academic Year : 2024/2025</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
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
