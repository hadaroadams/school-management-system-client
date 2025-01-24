import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "./ui/sidebar";
import { CgMenuLeft } from "react-icons/cg";
import Image from "next/image";
import { menuRoutes, otherRoutes } from "@/lib/links";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import LinkMenu from "./LinkMenu";

function AppSidebar() {
  return (
    <>
      <Sidebar className="bg-white">
        <SidebarHeader>
          <div className="flex w-full justify-between">
            <div className="flex w-32">
              <Image
                src={"/logo.svg"}
                width={300}
                height={300}
                alt="sms logo"
              />
            </div>
            <button className="text-text_primary hover:text-primary-dark">
              <CgMenuLeft size={20} />
            </button>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <div className="flex w-full ">
              <div className="flex w-full items-center gap-3 neutral-border p-2">
                <Image
                  src={"schoolLogo.svg"}
                  width={40}
                  height={40}
                  alt="school logo"
                />
                <h2 className="text-text_primary">Global International</h2>
              </div>
            </div>
          </SidebarGroup>
          <SidebarGroup>
            <h2 className="font-bold text-text_neutral mb-2">Menu</h2>
            <ScrollArea className="h-[250px] neutral-border">
              {menuRoutes.map((item, index) => (
                <LinkMenu {...item} key={`${index}`} />
              ))}
            </ScrollArea>
          </SidebarGroup>
          <SidebarGroup>
            <h2 className="font-bold text-text_neutral mb-2">Others</h2>
            {otherRoutes.map((item, index) => (
              <LinkMenu {...item} key={`${index}`} />
            ))}
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  );
}

export default AppSidebar;
