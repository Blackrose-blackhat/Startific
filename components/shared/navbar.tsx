"use client"
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row justify-center align-middle items-center w-full p-5 px-10 fixed top-0 z-50 ">
      <div className="flex-1">
        <h1>Logo</h1>
      </div>
    {/*TODO drawer for about us and contcat us page*/ }
      <div className="flex-1 hidden lg:flex flex-row lg:text-sm  text-xs  items-center space-x-10 text-neutral-100/80">
        <Button variant="ghost" className="lg:text-sm  text-xs">About US</Button>
        <Button variant="ghost" className="lg:text-sm  text-xs">Contact US</Button>
      </div>
      {pathname == "/" && (
        <div className="flex-1 flex flex-row lg:text-sm  text-xs justify-end items-center space-x-10">
        <Button   variant="outline" className="lg:text-sm  text-xs"><Link href="/dashboard">Sign In</Link></Button>
        <Button variant="default"className="lg:text-sm  text-xs" >
          <Link href="/register">Get Started</Link>
        </Button>
      </div>
      )}
      
    </nav>
  );
};

export default Navbar;
