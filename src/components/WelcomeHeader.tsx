import React from "react";
import { TfiReload } from "react-icons/tfi";

const WelcomeHeader = () => {
  return (
    <section className="mt-5">
      <div className=" bg-text_primary text-white flex max-lg:flex-col gap-4 justify-between px-5 py-6 rounded-lg max-lg:text-sm text-base">
        <div className=" flex flex-col gap-1">
          <h1 className="text-4xl max-lg:text-2xl font-semibold">
            Welcome Back, Mr. Herald
          </h1>
          <p>Have a Good day at work</p>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <TfiReload />
          </span>
          <p>Updated Recently on 15 Jun 2025</p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeHeader;
