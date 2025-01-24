import { totalMembers } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const TotalSection = () => {
  return (
    <section className="mt-5">
      <div className="grid max-md:grid-cols-1 grid-cols-2 gap-5 ">
        {totalMembers.map((item, index) => {
          const {
            active,
            inactive,
            percentage,
            thumbnail,
            title,
            total,
            color,
          } = item;
          return (
            <article className="flex shadow flex-col p-5 hover:-translate-y-2 cursor-pointer duration-500">
              <div className="flex justify-between border-b border-neutral pb-2">
                <div className="flex items-center gap-4 ">
                  <div className={cn("bg-success-light p-2 rounded-md")}>
                    <Image src={thumbnail} height={55} width={55} alt={title} />
                  </div>
                  <div>
                    <h2 className="text-1 text-text_primary">{total}</h2>
                    <p className="text-text_neutral text-sm ">{title}</p>
                  </div>
                </div>
                <p className="bg-success text-white h-fit p-1 text-sm rounded-sm">
                  {percentage}%
                </p>
              </div>
              <div className="flex justify-between text-sm text-text_neutral mt-1">
                <div>
                  <p>
                    Active:{" "}
                    <span className="text-text_primary font-bold">
                      {active}
                    </span>
                  </p>
                </div>
                <div>
                  <p>
                    Inactive:{" "}
                    <span className="text-text_primary font-bold">
                      {inactive}
                    </span>
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TotalSection;
