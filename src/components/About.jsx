"use client";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container px-4 overflow-x-hidden md:mt-8">
      <div className="flex flex-col gap-16 justify-center items-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-bold text-5xl md:text-8xl text-neutral-500"
        >
          About Me.
        </motion.h2>
        <motion.p className=" supports-[animation-timeline]:reveal-text relative text-xl md:text-4xl md:leading-relaxed items-center font-semibold md:font-bold text-neutral-300 transition-all ease-in">
          <motion.li
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="list-none"
          >
            i'm Mohit Kachhwaha a Self Taught Web Developer,
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="list-none"
          >
            Passionate about creating ,
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="list-none"
          >
            Web Apps with Modern Design And Animation,
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="list-none"
          >
            I have Build Amazing Projects.
          </motion.li>
        </motion.p>
        <a
          href="./Mohit-Kachhwaha-CV.pdf"
          download="CV"
          className=" bg-neutral-800 px-5 py-2 rounded-2xl text-neutral-200 hover:shadow-[#EFB946] shadow-md transition-all ease-in"
        >
          <i className="ri-download-line"></i> Download CV
        </a>
      </div>
    </div>
  );
};

export default About;
