import React from "react";
import { Button } from "./ui/button";
import { MdAddCircleOutline } from "react-icons/md";

export const DashboardHeader = () => {
  return (
    <section className="w-full">
      <div className="flex max-lg:flex-col flex-row gap-5  justify-between  w-full ">
        <h1 className="text-text_primary text-1 ">Dashboard</h1>
        <div className=" flex gap-3">
          <Button>
            <span>
              <MdAddCircleOutline />
            </span>
            Add Student
          </Button>
          <Button variant={"neutral"}>Fees Details</Button>
        </div>
      </div>
      <div></div>
    </section>
  );
};
