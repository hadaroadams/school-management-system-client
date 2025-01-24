import Image from "next/image";
import React from "react";
import { IoIosClose } from "react-icons/io";

export const Notification = () => {
  return (
    <section className="mt-5">
      <div className="bg-success-light flex justify-between py-2 px-2 border  border-success  rounded-full">
        <div className="flex gap-3 items-center">
          <Image
            src={"/profile.jpg"}
            alt="Notification profile"
            className=" rounded-full"
            height={25}
            width={25}
          />
          <p className="text-sm text-success">
            Fahed III,C has paid Fees for the{" "}
            <span className="font-bold">“Term1”</span>
          </p>
        </div>
        <button>
          <IoIosClose className="text-success size-6" />
        </button>
      </div>
    </section>
  );
};
