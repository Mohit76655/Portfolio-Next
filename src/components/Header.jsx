"use client";

import Link from "next/link";
import { React, useState } from "react";
import AnimatedLink from "./AnimatedLink";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleNavbar = () => {
    setisOpen(!isOpen);
  };

  return (
    <header className=" sticky bg-transparent text-[#DEE0DD] flex justify-between md:justify-between p-4 px-8 mt-4 z-10 flex-wrap">
      <div className=" font-bold text-lg">
        <Link href="/">Mohit</Link>
      </div>
      <div className=" hidden md:block">
        <ul className=" flex gap-12 font-semibold">
          <Link className=" relative" href="/portfolio">
            <AnimatedLink title="PROJECTS" />
          </Link>
          <Link className=" relative" href="/contact">
            <AnimatedLink title="CONTACT" />
          </Link>
        </ul>
      </div>
      <div className="md:hidden right-0">
        <button onClick={toggleNavbar}>
          {isOpen ? (
            <i className="ri-close-line text-2xl ml-44"></i>
          ) : (
            <i className="ri-menu-line text-2xl"></i>
          )}
        </button>
        {isOpen && (
          <div className="flex flex-col items-center mr-24 gap-4">
            <Link href="/contact" className="mt-2">
              CONTACT
            </Link>
            <Link href="/portfolio">PROJECTS</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
