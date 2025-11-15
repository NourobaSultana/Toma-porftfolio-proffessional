import React from "react";
import { MdOutlineEmail, MdOutlineCall } from "react-icons/md";
import { FaGithub, FaRegCopy } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";

const love = "/love-heart-.png";
const Footer = () => {
  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // alert("Copied! ✅");
        toast("Copied!");
      })
      .catch(() => {
        alert("Failed to copy ❌");
      });
  };

  return (
    <div>
      <div className="mt-12 px-4">
        <footer className="text-base-content rounded p-6 md:p-10 max-w-4xl mx-auto ">
          {/* Button */}
          <div className="flex justify-center">
            <button className="text-white btn btn-info rounded-2xl font-semibold px-4 md:px-6">
              Get in touch
            </button>
          </div>

          {/* Subtitle */}
          <p className="text-center mt-7 text-sm md:text-base leading-relaxed">
            What's next? Feel free to reach out if you're looking for a
            developer, have a question, or just want to connect!
          </p>

          {/* Email */}
          <div className="flex justify-center items-center gap-2 mt-1 flex-wrap">
            <span className="text-2xl md:text-3xl">
              <MdOutlineEmail />
            </span>
            <h2 className="text-xl md:text-xl font-bold">
              toma.yyy80@gmail.com
            </h2>
            <ToastContainer />
            <button
              onClick={() => handleCopy("toma.yyy80@gmail.com")}
              className="ml-[3px] text-lg md:text-xl hover:text-blue-500 transition"
              title="Copy email"
            >
              <FaRegCopy />
            </button>
          </div>

          {/* Phone */}
          <div className="flex justify-center items-center gap-2 mt-2 flex-wrap">
            <span className="text-2xl md:text-3xl">
              <MdOutlineCall />
            </span>
            <h2 className="text-xl md:text-xl font-bold">+8801771505546</h2>
            <button
              onClick={() => handleCopy("+8801771505546")}
              className="ml-[3px] text-lg md:text-xl hover:text-blue-500 transition"
              title="Copy phone number"
            >
              <FaRegCopy />
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-4 text-center">
            <p className="text-sm md:text-base font-bold">
              <span className="text-blue-400">You</span> may also{" "}
              <span className="text-blue-400">find</span> me on
            </p>
            <ul className="flex justify-center gap-5 mt-4 text-2xl md:text-3xl">
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
            </ul>
          </div>

          {/* Footer Bottom */}
          <aside className="mt-4">
            <p className="text-center flex justify-center items-center gap-2 text-sm md:text-base flex-wrap">
              Copyright © {new Date().getFullYear()} - Designed & coded with
              <span className="text-red-600">
                <FaHeart />
              </span>
              by <span className="font-semibold">Nouroba Sultana Toma</span>
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
