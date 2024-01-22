"use client";

const About = () => {
  return (
    <div className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container px-4 overflow-x-hidden md:mt-8">
      <div className="flex flex-col gap-16 justify-center items-center">
        <h2 className="font-bold text-5xl md:text-8xl text-neutral-500">
          About Me.
        </h2>
        <p className=" relative text-xl md:text-4xl md:leading-relaxed items-center font-semibold md:font-bold text-neutral-300 transition-all ease-in">
          i'm <b className="text-neutral-200 hover:text-orange-300">Mohit</b>{" "}
          Kachhwaha a{" "}
          <b className="text-neutral-200 hover:text-orange-300">Self Taught</b>{" "}
          Web Developer,
          <br /> Passionate about creating ,<br />
          <b className="text-neutral-200 hover:text-orange-300">
            Web Apps
          </b>{" "}
          with
          <b className="text-neutral-200 hover:text-orange-300">
            {" "}
            Modern Design And Animation
          </b>
          ,
          <br /> I have{" "}
          <b className="text-neutral-200 hover:text-orange-300">Build</b>{" "}
          Amazing Projects.
        </p>
        <a
          href=""
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
