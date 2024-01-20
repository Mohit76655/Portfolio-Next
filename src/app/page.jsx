import About from "@/components/About";
import Image from "next/image";
import Link from "next/link";
import Portfoilio from "./portfolio/page";
import "remixicon/fonts/remixicon.css";

export default function Home() {
  return (
    <>
      <main className="min-h-screen pt-[12rem]">
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
        <span className=" flex flex-col pl-5 text-xl">
          <a href="https://github.com/Mohit76655">
            <i className="ri-github-line"></i>
          </a>
          <a href="https://twitter.com/_MoHiT_K">
            <i className="ri-twitter-fill"></i>
          </a>
          <a href="https://www.linkedin.com/in/mohit-kachhwaha-9577a3274/">
            <i className="ri-linkedin-fill"></i>
          </a>
        </span>
      </main>
      <About />
      <Portfoilio />
    </>
  );
}
