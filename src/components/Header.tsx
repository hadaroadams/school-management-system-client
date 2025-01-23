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
import CountryLangDropDown from "./CountryLangDropDown";
import { AddNewDropDown } from "./AddNewDropDown";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import { SidebarTrigger } from "./ui/sidebar";

const Header = () => {
  return (
    <header className="w-full px-5 py-1 neutral-border">
      <div className="flex w-full justify-between max-md:hidden items-center">
        <SidebarTrigger size={"lg"} />
        <SearchInput />

        <div className="flex  items-center  w-full justify-end gap-2">
          <AccademicYearDropdown />
          <CountryLangDropDown />
          <AddNewDropDown />
          <button className="flex justify-center items-center gap-2 p-1 outline outline-[1px]  outline-gray-200 rounded-md w-10 h-10  text-text_primary-light">
            <MdOutlineDarkMode className="size-4" />
          </button>
          <button className="flex justify-center items-center gap-2 p-1 outline outline-[1px]  outline-gray-200 rounded-md w-10 h-10  text-text_primary-light">
            <FaRegBell className="size-4" />
          </button>
          <button className="flex justify-center items-center gap-2 p-1 outline outline-[1px]  outline-gray-200 rounded-md w-10 h-10  text-text_primary-light">
            <LuMessageCircleMore className="size-4" />
          </button>
          <button className="flex w-12 h-12 justify-center items-center">
            <Image
              src={"/profile.jpg"}
              alt="English flag"
              width={50}
              height={50}
              className="size-10 rounded-md"
            />
          </button>
        </div>
      </div>
      <div className="max-md:flex justify-between hidden ">
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
      </div>
    </header>
  );
};

export default Header;
