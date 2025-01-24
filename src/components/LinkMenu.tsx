"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LinkMenu = ({ title, href, icon, key }: LinkMenuProp) => {
  const pathname = usePathname();
  //   console.log(pathname);
  return (
    <>
      <Link
        href={href}
        key={key}
        className={cn(
          "text-text_neutral hover:text-primary-dark flex gap-5 text-md items-center p-2  rounded-md",
          pathname === href && "bg-primary-light text-primary-dark"
        )}
      >
        {icon}
        <span>{title}</span>
      </Link>
    </>
  );
};

export default LinkMenu;
