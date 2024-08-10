"use client";
import { motion } from "framer-motion";
const motionSettings = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  transition: (delay) => ({ delay }),
};
const About = () => {
  return (
    <div className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container px-4 overflow-x-hidden md:mt-8">
      <div className="flex flex-col gap-16 justify-center items-center text-center">
        <motion.h2
          {...motionSettings}
          transition={{ delay: 0.4 }}
          className="font-bold text-5xl md:text-8xl text-neutral-500"
        >
          About Me.
        </motion.h2>
        <motion.p className=" supports-[animation-timeline]:reveal-text relative text-lg md:text-2xl md:leading-relaxed items-center font-semibold md:font-bold text-neutral-300 transition-all ease-in">
          {[
            "I am a passionate DevOps Engineer with a strong focus on automating infrastructure and deployment processes.",
            "My expertise lies in leveraging tools like AWS, Kubernetes, and Jenkins to streamline and optimize CI/CD pipelines.",
            "I have a deep understanding of Shell Scripting and Docker, which allows me to build and manage scalable environments efficiently.",
            "Additionally, I am familiar with the MERN stack, which enhances my ability to collaborate effectively with development teams.",
          ].map((text, index) => (
            <motion.li
              {...motionSettings}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="list-none"
              key={index}
            >
              {text}
            </motion.li>
          ))}
        </motion.p>
        <a
          href="./Mohit-Kachhwaha-CV.pdf"
          download="CV"
          className=" bg-neutral-800 px-5 py-2 rounded-2xl text-neutral-200 hover:shadow-[#EFB946] shadow-md transition-all ease-in"
          aria-label="Download CV"
        >
          <i className="ri-download-line"></i> Download CV
        </a>
      </div>
    </div>
  );
};

export default About;
