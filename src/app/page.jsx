"use client";
import About from "@/components/About";
import Image from "next/image";
import Link from "next/link";
import Portfoilio from "./portfolio/page";
import "remixicon/fonts/remixicon.css";
import Contact from "./contact/page";
import SkillsTab from "@/components/SkillsTab";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="min-h-screen pt-[10rem] overflow-y-hidden">
        <div className="flex justify-center items-center text-2xl">
          <div className=" mb-20 flex flex-col md:gap-16 gap-10">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="md:ml-28 ml-12 font-semibold text-neutral-700"
            >
              I AM
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="font-bold md:text-[9rem] text-[4rem]"
            >
              MOHIT
            </motion.h1>
            <div className="">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className=" md:ml-64 ml-16 text-neutral-700"
              >
                A Frontend
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className=" md:ml-80 ml-24 text-neutral-700"
              >
                Developer
              </motion.p>
            </div>
          </div>
        </div>
        <div className=" justify-between mb-11 md:flex">
          <span className=" flex-row md:flex-col justify-center pl-5 text-xl gap-8 md:gap-2 flex">
            <motion.a
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              target="blank"
              href="https://github.com/Mohit76655"
              className=" transition-all ease-in hover:text-red-300 hover:scale-110"
            >
              <i className="ri-github-line"></i>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              target="blank"
              href="https://twitter.com/_MoHiT_K"
              className=" transition-all ease-in hover:text-red-300 hover:scale-110"
            >
              <i className="ri-twitter-fill"></i>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              target="blank"
              href="https://www.linkedin.com/in/mohit-kachhwaha-9577a3274/"
              className=" transition-all ease-in hover:text-red-300 hover:scale-110"
            >
              <i className="ri-linkedin-fill"></i>
            </motion.a>
          </span>
          <span className="  flex-col items-center font-bold gap-5 mt-7 pr-5 hidden md:flex hover:text-red-300 transition-all ease-in">
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0, rotate: 90 }}
              transition={{ delay: 1 }}
              className=" rotate-90"
            >
              SCROLL
            </motion.span>
            <motion.i
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="ri-arrow-down-line animate-bounce transition-all ease-in"
            ></motion.i>
          </span>
        </div>
      </main>
      <SkillsTab />
      <About />
      <Portfoilio />
      <Contact />
    </>
  );
}
