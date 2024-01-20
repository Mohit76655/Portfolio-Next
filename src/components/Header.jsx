import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" sticky bg-transparent text-[#DEE0DD] flex justify-between p-4 px-8 mt-4">
      <div className=" font-bold text-lg">
        <Link href="/">Mohit</Link>
      </div>
      <div className=" hidden md:block">
        <ul className=" flex gap-12 font-semibold">
          <Link href="/portfolio">PROJECTS</Link>
          <Link href="/contact">CONTACT</Link>
        </ul>
      </div>
      <div className="md:hidden right-0">
        <i className="ri-menu-line text-2xl"></i>
      </div>
    </header>
  );
};

export default Header;
