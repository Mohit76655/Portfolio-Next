import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const SkillsTab = () => {
  const imageStyle = {
    margin: "0px, 30px",
  };
  return (
    <div className="w-full flex flex-col justify-center items-center bg-transparent text-neutral-200">
      <div className="w-[80%] flex flex-col">
        <Marquee autoFill pauseOnClick>
          <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400">
            REACT
          </div>
          <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-yellow-400">
            JavaScript
          </div>
          <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-700">
            CSS3
          </div>
          <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-orange-400">
            HTML5
          </div>
          <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-neutral-300">
            Next Js
          </div>
        </Marquee>
        <Marquee autoFill pauseOnClick direction="right">
          <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-500">
            Tailwind Css
          </div>
          <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-orange-500">
            Git
          </div>
          <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-neutral-400">
            GitHub
          </div>
          <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-purple-400">
            Framer Motion
          </div>
          <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-green-400">
            Node Js
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default SkillsTab;
