import React from "react";
const git = "/Git-Icon-1788C.png";
const daisyUI = "/imagesdaisiui.jpg";
const figma = "/figma boro.png";
const tailwind = "/Tailwind_CSS_Logo.svg.png";
const js = "/Unofficial_JavaScript_logo_2.svg.png";
const react = "/react.svg";

const Skills = () => {
  return (
    <div className="mt-16 px-4">
      <div className="text-center">
        <button className="btn rounded-2xl font-bold">Skills</button>
        <p className="mt-4 text-sm md:text-base font-bold">
          The skills, tools and technologies I am really good at:
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 justify-items-center mt-20">
        <div className="text-center">
          <img
            className="w-[50px] h-[40px] mx-auto"
            src={js}
            alt="JavaScript"
          />
          <h2 className="mt-2 font-medium text-sm md:text-base">JavaScript</h2>
        </div>

        <div className="text-center">
          <img className="w-[50px] h-[40px] mx-auto" src={react} alt="React" />
          <h2 className="mt-2 font-medium text-sm md:text-base">React</h2>
        </div>

        <div className="text-center">
          <img
            className="w-[50px] h-[40px] mx-auto"
            src={tailwind}
            alt="Tailwind CSS"
          />
          <h2 className="mt-2 font-medium text-sm md:text-base">
            Tailwind CSS
          </h2>
        </div>

        <div className="text-center">
          <img className="w-[50px] h-[40px] mx-auto" src={figma} alt="Figma" />
          <h2 className="mt-2 font-medium text-sm md:text-base">Figma</h2>
        </div>

        <div className="text-center">
          <img className="w-[50px] h-[40px] mx-auto" src={git} alt="Git" />
          <h2 className="mt-2 font-medium text-sm md:text-base">Git</h2>
        </div>

        <div className="text-center">
          <img
            className="w-[50px] h-[40px] mx-auto"
            src={daisyUI}
            alt="DaisyUI"
          />
          <h2 className="mt-2 font-medium text-sm md:text-base">DaisyUI</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
