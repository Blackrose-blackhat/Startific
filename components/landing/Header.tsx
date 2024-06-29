import React, { Suspense,lazy } from "react";
import { Button } from "../ui/button";

import Link from "next/link";
import { Text } from "../ui/Text";
const Model = lazy(()=> import("@/components/ui/Model"))
const Header = () => {
  return (
    <main className=" p-20  flex flex-row items-center align-middle justify-between w-full h-screen">
      <div className="lg:w-1/2 w-full flex flex-col space-y-5">
        <h1 className="lg:text-6xl  text-2xl font-semibold">
          Transforming Innovation into{" "}
          <Text />
          
        </h1>
        
        <Button size="lg" className="lg:w-1/4 w-full  font-semibold">
          <Link href="/dashboard">Get Started</Link>
        </Button>
      </div>

      {/* Render 3d model */}

      <div className=" w-1/2 hidden lg:block  h-full  ">
        <Suspense fallback={<p className="text-6xl">Loading...</p>}>

        <Model />
        </Suspense>
      </div>
    </main>
  );
};

export default Header;
