import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" sticky bg-transparent text-white flex justify-between p-4">
      <div className=" font-bold text-lg">
        <Link href="/">Mohit</Link>
      </div>
      <div>
        <ul className=" flex gap-10 font-semibold">
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact Me</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
