import React from "react";
import { TbWorld } from "react-icons/tb";
import doctor from "/home/toma/best-website/toma-portfolio/public/Screenshot From 2025-11-16 00-15-58.png";

import english from "/home/toma/best-website/toma-portfolio/public/Screenshot From 2025-11-16 00-15-37.png";
const Projects = () => {
  // hero-content max-w-[1000px] mx-auto flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8 lg:gap-24
  return (
    <div className="max-w-[1000px] mx-auto mt-30 text-center">
      <h2 className="inline-block px-4 py-2 text-xl font-bold bg-[#52b788] text-white rounded-lg shadow-md]">
        My Projects
      </h2>
      <h3 className="text-5xl font-bold mt-8">Check out some of my work</h3>
      <p className="mt-4 text-2xl text-gray-500">
        I'have worked different types of projects. I want to <br /> show my demo
        projects in below.
      </p>

      <div className="flex flex-wrap justify-center mt-12 gap-12">
        {/* Card 1 */}
        <div className="relative w-96 mx-auto">
          {/* TOP FULL GRADIENT BORDER */}
          <div className="absolute top-0 left-0 w-full h-[16px] bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 rounded-t-xl z-20"></div>
          {/* LEFT HALF GRADIENT BORDER */}
          <div className="absolute top-0 left-0 h-[180px] w-[16px] bg-gradient-to-b from-red-500 via-orange-400 to-yellow-500 rounded-l-xl z-20"></div>
          {/* RIGHT HALF GRADIENT BORDER */}
          <div className="absolute top-0 right-0 h-[180px] w-[16px] bg-gradient-to-b from-yellow-500 via-orange-400 to-red-500 rounded-r-xl z-20"></div>
          {/* BOTTOM SHADOW ONLY
          <div className="absolute bottom-0 left-0 w-full h-[10px] shadow-[0_6px_15px_rgba(0,0,0,0.4)] rounded-b-xl z-10"></div> */}
          {/* CARD */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden z-0 border border-gray-200">
            <figure>
              <img
                src={doctor}
                alt=""
                className="w-full h-[180px] blur-[1px]"
              />
            </figure>

            <div className="p-4 text-black">
              <h2 className="font-bold text-xl flex items-center gap-2">
                Doctor Appointment
                <span className="badge badge-secondary">Toma</span>
              </h2>

              <p className="mt-2 text-left">
                This website is for booking doctor appointment at home.The
                functionality of this projects are booking appointment,
                canceling appointment,doctor details, all doctors, doctor
                avilability-day and time, doctor visit. All are included
                here.But here i've worked with fake data.
              </p>

              <p className="text-left text-gray-700 mt-2">Date: 20 Mar, 2025</p>

              <div className="flex flex-wrap mt-2 gap-2 max-w-[400px] mx-auto ">
                <div className="badge badge-outline bg-black text-white">
                  Html
                </div>
                <div className="badge badge-outline  bg-black text-white">
                  Css
                </div>
                <div className="badge badge-outline  bg-black text-white">
                  TailwindCss
                </div>
                <div className="badge badge-outline  bg-black text-white">
                  Javascript
                </div>
                <div className="badge badge-outline  bg-black text-white">
                  React
                </div>
                <div className="badge badge-outline  bg-black text-white">
                  Netlify
                </div>
                <div className="badge badge-outline  bg-black text-white">
                  DaisyUi
                </div>
              </div>
              <div className="flex gap-2 justify-start mt-2">
                <a
                  href="https://delicate-froyo-6fbd6d.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge badge-outline p-4 bg-black text-white cursor-pointer flex items-center gap-2 hover:bg-gray-800 transition"
                >
                  <span className="text-xl">
                    <TbWorld />
                  </span>
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-96 mx-auto">
          {/* TOP FULL GRADIENT BORDER */}
          <div className="absolute top-0 left-0 w-full h-[16px] bg-gradient-to-r from-gray-500 via-gray-300 to-gray-200 rounded-t-xl z-20"></div>
          {/* LEFT HALF GRADIENT BORDER */}
          <div className="absolute top-0 left-0 h-[180px] w-[16px] bg-gradient-to-b from-gray-500 via-gray-300 to-gray-200 rounded-l-xl z-20"></div>
          {/* RIGHT HALF GRADIENT BORDER */}
          <div className="absolute top-0 right-0 h-[180px] w-[16px] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 rounded-r-xl z-20"></div>
          {/* BOTTOM SHADOW ONLY
          <div className="absolute bottom-0 left-0 w-full h-[10px] shadow-[0_6px_15px_rgba(0,0,0,0.4)] rounded-b-xl z-10"></div> */}
          {/* CARD */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden z-0 border border-gray-200">
            <figure>
              <img
                src={english}
                alt=""
                className="w-full h-[180px] blur-[1px]"
              />
            </figure>

            <div className="p-4 text-black">
              <h2 className="font-bold text-xl flex items-center gap-2">
                English vocabulary
                <span className="badge badge-secondary">Toma</span>
              </h2>

              <p className="mt-2 text-left">
                This website presenting some vocabulary. You can also see the
                details of one word, synonyms,antonyms, pronounciation.
              </p>
              <p className="text-left text-gray-700 mt-2">Date: 12 Jan, 2025</p>

              <div className="flex flex-wrap gap-2 max-w-[400px] mx-auto mt-2">
                <div className="badge badge-outline bg-black text-white">
                  Html
                </div>
                <div className="badge badge-outline  bg-black text-white">
                  Css
                </div>
                <div className="badge badge-outline  bg-black text-white">
                  TailwindCss
                </div>
                <div className="badge badge-outline  bg-black text-white">
                  Javascript
                </div>
                <div className="badge badge-outline  bg-black text-white">
                  React
                </div>
                <div className="badge badge-outline  bg-black text-white">
                  Netlify
                </div>
                <div className="badge badge-outline  bg-black text-white">
                  DaisyUi
                </div>
              </div>
              <div className="flex gap-2 justify-start mt-2">
                <a
                  href="https://magnificent-entremet-a407ea.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge badge-outline p-4 bg-black text-white cursor-pointer flex items-center gap-2 hover:bg-gray-800 transition"
                >
                  <span className="text-xl">
                    <TbWorld />
                  </span>
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
