import React from "react";
import { Button } from "../ui/button";
import Model from "@/components/ui/Model";
import Link from "next/link";

const Header = () => {
  return (
    <main className=" p-20  flex flex-row items-center align-middle justify-between w-full h-screen">
      <div className="lg:w-1/2 w-full flex flex-col space-y-5">
        <h1 className="lg:text-6xl  text-2xl font-semibold">
          Want to defeat AI in the knowledge Race?
        </h1>
        <h2 className="lg:text-4xl text-xl text-indigo-600 font-semibold">Website Name</h2>
        <Button  size="lg" className="lg:w-1/4 w-full  font-semibold">
        <Link href="/dashboard">
          Get Started
        </Link>
        </Button>
      </div>

      {/* Render 3d model */}

      <div className=" w-1/2 hidden lg:block  h-full  ">
        <Model  />
      </div>
    </main>
  );
};

export default Header;