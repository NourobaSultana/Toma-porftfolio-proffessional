import { PiHandWavingDuotone } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";
const hello = "/c6e00bf09f5e476a4da3e69620bd7341.jpg";
const image = "/sample-01 (1).jpg";
import { FaHandSparkles } from "react-icons/fa6";
import { useEffect, useState } from "react";
import "/home/toma/best-website/toma-portfolio/src/Component/Home/Home.css";
import Sticky from "/home/toma/best-website/toma-portfolio/src/Component/Sticky/Sticky.jsx";
import Projects from "../Projects/Projects";

const Home = () => {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotate(true); // 5 sec por rotation start hobe
    }, 1000); // 5000ms = 5 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      // first section
      <section>
        <div className=" px-4 sm:px-8 md:px-16 lg:px-24 bg-base-100 mt-12">
          <div className="hero-content max-w-[1000px] mx-auto flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8 lg:gap-24">
            {/* Profile Image */}
            <img
              src={image}
              alt="Profile"
              className={`rounded-full border-2 border-green-500 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover rotate-image-3d ${
                rotate ? "start" : "end"
              }`}
            />

            {/* Text Section */}
            <div className="flex flex-col gap-4 lg:w-1/2">
              {/* Name + Waving Icon */}
              <div className="flex flex-wrap items-center gap-2">
                <h3
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold rotate-3d ${
                    rotate ? "start" : "end"
                  }`}
                >
                  Hi, I'm Toma
                </h3>

                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-400">
                  <FaHandSparkles />
                </span>
              </div>

              {/* About / Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-lg  leading-relaxed">
                I am a passionate Front-End Developer with a strong focus on
                building responsive, user-friendly, and visually appealing web
                applications. Skilled in HTML, CSS, JavaScript, React, Node.js, MongoDB, Tailwind
                CSS, and modern UI frameworks, I enjoy turning complex problems
                into clean, efficient, and engaging interfaces. I am constantly
                learning new technologies, improving my coding skills, and
                delivering projects that provide excellent user experiences.
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 ">
                <CiLocationOn className="text-lg sm:text-xl md:text-2xl" />
                <p className="text-sm sm:text-base md:text-base lg:text-base">
                  Farmgate, Dhaka, Bangladesh
                </p>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 rounded-full bg-green-500 mt-1"></div>
                <p className="text-sm sm:text-base md:text-base lg:text-base">
                  Available for new projects
                </p>
              </div>

              {/* Social Icons */}
              <div className="mt-4">
                <ol className="flex gap-4 text-xl sm:text-2xl md:text-2xl lg:text-2xl">
                  <li>
                    <a
                      href="https://github.com/NourobaSultana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-500 transition-colors"
                    >
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/nouroba-sultana-toma-317a79378/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-500 transition-colors"
                    >
                      <BiLogoLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.figma.com/team_invite/redeem/3HQAW6QT0FTs1tmaXOgxt2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-500 transition-colors"
                    >
                      <FaFigma />
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1000px] mx-auto">
        <About></About>
      </section>

      <section className="max-w-[1000px] mx-auto">
        <Skills></Skills>
      </section>
        
        <section>
          <Projects></Projects>
        </section>

      <section className="max-w-[1000px] mx-auto">
        <Footer></Footer>
      </section>

      <section>
        <Sticky></Sticky>
      </section>
    </>
  );
};

export default Home;
