"use client";

import React, { useState } from "react";
import { projects, filters } from "./data";
import Div from "@/components/Div";
import Link from "next/link";

const Portfoilio = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  const [projectData, setProjectData] = useState(projects);

  const filterHandler = (tag) => {
    setSelectedTag(tag);
    let filteredProjects = [];
    if (tag === "all") {
      filteredProjects = projects;
    } else {
      filteredProjects = projects.filter((p) => p.tags.includes(tag));
    }
    setProjectData(filteredProjects);
  };

  return (
    <div className="mt-10 relative min-h-screen">
      {/* SECTION HEADING START */}
      <Div className="mb-10">
        <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col font-bold text-5xl md:text-8xl leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-neutral-500 mb-2">
          Projects.
        </div>
      </Div>
      {/* SECTION HEADING END */}

      {/* FILTER TAGS START */}
      <Div className="flex justify-start md:justify-center gap-[10px] mb-[50px] overflow-auto">
        {filters.map((item, index) => (
          <div
            key={index}
            className={`bg-[#252525] rounded-lg py-[10px] px-[17px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] cursor-pointer whitespace-nowrap ${
              selectedTag === item.id ? "bg-[#EFB946] text-black" : ""
            }`}
            onClick={() => filterHandler(item.id)}
          >
            {item.name}
          </div>
        ))}
      </Div>
      {/* FILTER TAGS END */}

      {/* PROJECTS GRID START */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        {projectData.map((item, index) => {
          return (
            <Div key={index} className="flex flex-col gap-4">
              <div className="bg-black rounded-[20px] aspect-video overflow-hidden">
                <Link href={item.live} target="blank">
                  <img
                    src={item.url}
                    className="transition-transform hover: hover:duration-2500 ease-linear"
                  />
                </Link>
                <div className="z-10 flex justify-around text-xl font-bold">
                  <Link
                    href={item.github}
                    className="hover:text-orange-500"
                    target="blank"
                  >
                    <i className="ri-github-fill"></i>
                  </Link>
                  <Link
                    href={item.live}
                    target="blank"
                    className="hover:text-orange-500"
                  >
                    <i className="ri-eye-line"> </i>
                  </Link>
                </div>
              </div>
              <div className="text-[20px] 2xl:text-[24px] text-[#CCCCCC] text-center">
                {item.name}
              </div>
            </Div>
          );
        })}
      </div>
      {/* PROJECTS GRID END */}
    </div>
  );
};

export default Portfoilio;
