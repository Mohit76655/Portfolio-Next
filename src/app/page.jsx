import About from "@/components/About";
import Image from "next/image";
import Link from "next/link";
import Portfoilio from "./portfolio/page";
import "remixicon/fonts/remixicon.css";

export default function Home() {
  return (
    <>
      <main className="min-h-screen pt-[10rem] overflow-y-hidden">
        <div className="flex justify-center items-center text-2xl">
          <div className=" mb-20 flex flex-col md:gap-16 gap-10">
            <p className="md:ml-28 ml-12 font-semibold text-[#323232]">I AM</p>
            <h1 className="font-bold md:text-[9rem] text-[4rem]">MOHIT</h1>
            <div className="">
              <p className=" md:ml-64 ml-16 text-[#323232]">A Frontend</p>
              <p className=" md:ml-80 ml-24 text-[#323232]">Developer</p>
            </div>
          </div>
        </div>
        <div className=" justify-between mb-11 md:flex">
          <span className=" flex-row md:flex-col justify-center pl-5 text-xl gap-8 md:gap-2 flex">
            <a
              target="blank"
              href="https://github.com/Mohit76655"
              className=" transition-all ease-in hover:text-red-300 hover:scale-110"
            >
              <i className="ri-github-line"></i>
            </a>
            <a
              target="blank"
              href="https://twitter.com/_MoHiT_K"
              className=" transition-all ease-in hover:text-red-300 hover:scale-110"
            >
              <i className="ri-twitter-fill"></i>
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/mohit-kachhwaha-9577a3274/"
              className=" transition-all ease-in hover:text-red-300 hover:scale-110"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
          </span>
          <span className="  flex-col items-center font-bold gap-5 mt-7 pr-5 hidden md:flex hover:text-red-300 transition-all ease-in">
            <span className=" rotate-90">SCROLL</span>
            <i className="ri-arrow-down-line animate-bounce transition-all ease-in"></i>
          </span>
        </div>
      </main>
      <About />
      <Portfoilio />
    </>
  );
}
