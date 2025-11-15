import React from "react";
const aboutImage = "/714517d7-f62a-416b-bfca-14b912b3a0a5.jpg";
import { FaSmile } from "react-icons/fa";

const About = () => {
  return (
    <div className="mt-16 sm:mt-20 lg:mt-24">
      {/* Title Button */}
      <div className="flex justify-center">
        <span className="p-3 bg-[#52b788] rounded-2xl font-bold text-white">
          About me
        </span>
      </div>

      {/* Main Section */}
      <div className="flex justify-center mt-10 sm:mt-12 lg:mt-14">
        <div className="hero-content flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 gap-16 lg:gap-28 bg-base-100 py-6 rounded-xl">
          {/* Image & borders */}
          <div className="relative flex justify-center items-center px-6 py-6">
            <div className="absolute left-0 top-1/2 h-1/2 border-l-8 border-gray-400"></div>
            <div className="absolute bottom-0 right-1/2 w-1/2 border-b-8 border-gray-400"></div>

            <img
              src={aboutImage}
              className="max-w-sm rounded-lg shadow-2xl w-[260px] h-[360px]"
            />
          </div>

          {/* Text Section */}
          <div className="mt-4 lg:mt-0">
            <h1 className="text-2xl font-bold">
              Curious about me? Here you have it:
            </h1>

            <p className="leading-relaxed text-base sm:text-lg mt-4">
              I am a dedicated Front-End Developer with a strong passion for
              building dynamic, responsive, and visually appealing web
              applications. I specialize in HTML, CSS, JavaScript, and React,
              with hands-on experience in modern UI frameworks such as Tailwind
              CSS and DaisyUI. <br />
              My focus is on creating clean, efficient, and user-friendly
              interfaces that provide excellent user experiences across all
              devices.
              <br />
              you can follow me on{" "}
              <span className="underline">
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </span>
              , or you can follow me on{" "}
              <span className="underline">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </span>
            </p>

            <p className="mt-6 text-base">Finally Some quick bits about me.</p>

            {/* List */}
            <ul className="list-disc ml-6 space-y-3 mt-4">
              <li>
                <p className="font-bold">
                  Bsc. in Computer Science And Engineering
                </p>
              </li>

              <li>
                <p className="font-bold">Freelancer</p>
              </li>
            </ul>

            <p className="mt-6">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! Promise I don't bite{" "}
              <FaSmile className="inline ml-1 text-yellow-500" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
