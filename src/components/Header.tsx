import Image from "next/image";
import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { MobileNav } from "./MobileNav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SearchInput from "./SearchInput";
import { AccademicYearDropdown } from "./AccademicYearDropdown";

const Header = () => {
  return (
    <header className="w-full px-5 py-2">
      <div className="flex">
        <SearchInput />
        <AccademicYearDropdown />
      </div>
      {/* <div className="flex justify-between">
        <MobileNav />
        <div className="flex w-32">
          <Image src={"/logo.svg"} width={300} height={300} alt="sms logo" />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button>
              <SlOptionsVertical className="fill-[#3D5EE1] size-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem>My Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}
    </header>
  );
};

export default Header;
