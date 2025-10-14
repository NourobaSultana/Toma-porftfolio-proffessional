import React from "react";
const aboutImage = "/714517d7-f62a-416b-bfca-14b912b3a0a5.jpg";
import { FaSmile } from "react-icons/fa";
const About = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-center">
        <button className="btn items-center rounded-2xl p-2 font-bold ">
          About me
        </button>
      </div>

      <div>
        <div className="flex bg-base-100 gap-30 mt-4">
          <div className="hero-content flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 gap-36">
            <div className="relative flex justify-center items-center px-6 py-6">
              {/* Left border */}
              <div className="absolute left-0 top-1/2 h-1/2 border-l-18 border-gray-400"></div>

              {/* Bottom border */}
              <div className="absolute bottom-0 right-1/2 w-1/2 border-b-18 border-gray-400"></div>

              <img
                src={aboutImage}
                className="max-w-sm  rounded-lg shadow-2xl w-[260px] h-[360px]"
              />
            </div>

            <div className="mt-4">
              <h1 className="text-2xl font-bold">
                Curious about me? Here you have it:
              </h1>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-lg lg:text-lg mt-6 ">
                I am a dedicated Front-End Developer with a strong passion for
                building dynamic, responsive, and visually appealing web
                applications. I specialize in HTML, CSS, JavaScript, and React,
                with hands-on experience in modern UI frameworks such as
                Tailwind CSS and DaisyUI. <br />
                My focus is on creating clean, efficient, and user-friendly
                interfaces that provide excellent user experiences across all
                devices. With a keen eye for detail and a commitment to best
                practices, I enjoy transforming complex designs and ideas into
                seamless interactive web pages. <br />I am constantly learning
                new technologies, optimizing performance, and implementing
                accessibility standards to ensure inclusivity. Beyond coding, I
                collaborate effectively with designers and back-end developers
                to deliver projects that not only meet functional requirements
                but also delight users through smooth and intuitive interfaces.
                <br />
                you can follow me on <span className="underline">Linkedin</span>
                , or you can follow me on{" "}
                <span className="underline">Github </span>
              </p>
              <p className="mt-6">Finally Some quick bits about me.</p>
              <div>
                <ul className=" list-disc  space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-4 ml-4 sm:ml-6 md:ml-8 lg:ml-12 mt-4 text-gray-700 text-sm sm:text-base md:text-base lg:text-base">
                  <li>
                    <p className="text-gray-700 text-sm sm:text-base font-bold">
                      Bsc. in Computer Science And Engineering
                    </p>
                  </li>

                  <li>
                    <p className="text-gray-700 text-sm sm:text-base font-bold">
                      Freelancer
                    </p>
                  </li>
                </ul>
                <div>
                  <p className="text-gray-700 mt-4">
                    One last thing, I'm available for freelance work, so feel
                    free to reach out and say hello! Promise I don't bite{" "}
                    <FaSmile className="inline ml-1 text-yellow-500" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
