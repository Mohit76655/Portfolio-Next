import About from "@/components/About";
import Image from "next/image";
import Link from "next/link";
import Portfoilio from "./portfolio/page";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center text-2xl">
        <div className=" mb-14 flex flex-col gap-16">
          <p className="ml-28 font-semibold text-[#323232]">I AM</p>
          <h1 className="font-bold text-[9rem]">MOHIT</h1>
          <div className="">
            <p className=" ml-64 text-[#323232]">A Frontend</p>
            <p className=" ml-80 text-[#323232]">Developer</p>
          </div>
        </div>
      </main>
      <About />
      <Portfoilio />
    </>
  );
}
