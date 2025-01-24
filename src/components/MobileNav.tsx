import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import { menuRoutes, otherRoutes } from "@/lib/links";
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";
import LinkMenu from "./LinkMenu";

export const MobileNav = () => {
  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <CiMenuFries className="fill-[#3D5EE1] size-9 rotate-180" />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader className="flex items-center w-full">
            <div className="flex w-32 ">
              <Image
                src={"/logo.svg"}
                width={300}
                height={300}
                alt="sms logo"
              />
            </div>
            <div className="flex w-full mt-5 ">
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
          </SheetHeader>
          <div>
            <h2 className="font-bold text-text_neutral mb-2">Menu</h2>
            {/* <ScrollArea className="h-[250px] neutral-border"> */}
            {menuRoutes.map((item, index) => (
              <LinkMenu {...item} key={`${index}`} />
            ))}

            <div>
              <h2 className="font-bold text-text_neutral mb-2">Others</h2>
              {otherRoutes.map((item, index) => (
                <LinkMenu {...item} key={`${index}`} />
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};
