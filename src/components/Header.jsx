import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" sticky bg-transparent text-[#DEE0DD] flex justify-between p-4 px-8 mt-7">
      <div className=" font-bold text-lg">
        <Link href="/">Mohit</Link>
      </div>
      <div>
        <ul className=" flex gap-12 font-semibold">
          <Link href="/portfolio">PROJECTS</Link>
          <Link href="/contact">CONTACT</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
