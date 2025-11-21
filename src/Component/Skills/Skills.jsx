import React from "react";
import { RiHtml5Line } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineJavaScript } from "react-icons/ai";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { BiLogoFirebase } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { SiDaisyui } from "react-icons/si";
import { TbBrandFigma } from "react-icons/tb";
import { TbBrandNodejs } from "react-icons/tb";
const Skills = () => {
  return (
    <div className="mt-14 px-4">
      <div className="text-center mt-18">
        <span className="text-white  text-xl p-3 bg-[#52b788] rounded-2xl font-bold">
          Skills
        </span>
        <p className="mt-10 text-4xl md:text-base font-bold">
          The skills, tools and technologies I am really good at:
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 justify-items-center mt-20">
        <div className="text-center">
          <span className="text-3xl text-orange-500">
            <RiHtml5Line />
          </span>
          <h2 className="mt-2 font-medium text-sm md:text-base">HTML</h2>
        </div>

        <div className="text-center">
          <span className="text-3xl text-blue-700">
            <FaCss3 />
          </span>
          <h2 className="mt-2 font-medium text-sm md:text-base">CSS</h2>
        </div>

        <div className="text-center">
          <span className="text-3xl text-blue-500">
            <RiTailwindCssFill />
          </span>
          <h2 className="mt-2 font-medium text-sm md:text-base">
            Tailwind CSS
          </h2>
        </div>

        <div className="text-center">
          <span className="text-3xl text-yellow-400">
            <AiOutlineJavaScript />
          </span>
          <h2 className="mt-2 font-medium text-sm md:text-base">JavaScript</h2>
        </div>

        <div className="text-center">
          <span className="text-3xl text-blue-400">
            <RiReactjsFill />
          </span>
          <h2 className="mt-2 font-medium text-sm md:text-base">React</h2>
        </div>

        <div className="text-center">
          <span className="text-3xl text-green-500">
           <TbBrandNodejs />
          </span>
          <h2 className="mt-2 font-medium text-sm md:text-base">Node.js</h2>
        </div>

        <div className="text-center">
          <span className="text-3xl text-green-900">
            <SiMongodb />
          </span>
          <h2 className="mt-2 font-medium text-sm md:text-base">MongoDB</h2>
        </div>

        <div className="text-center">
          <span className="text-3xl text-yellow-400">
            <BiLogoFirebase />
          </span>
          <h2 className="mt-2 font-medium text-sm md:text-base">Firebase</h2>
        </div>

        <div className="text-center">
          <span className="text-3xl ">
            <FaGithub />
          </span>
          <h2 className="mt-2 font-medium text-sm md:text-base">Github</h2>
        </div>

        <div className="text-center">
          <span className="text-3xl text-yellow-400">
            <SiDaisyui />
          </span>
          <h2 className="mt-2 font-medium text-sm md:text-base">DaisyUI</h2>
        </div>

        <div className="text-center">
          <span className="text-3xl text-orange-600">
            <TbBrandFigma />
          </span>
          <h2 className="mt-2 font-medium text-sm md:text-base">Figma</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
