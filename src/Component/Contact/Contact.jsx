import React from "react";
import { MdOutlineEmail, MdOutlineCall } from "react-icons/md";
import { FaGithub, FaRegCopy } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
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
    <section id="contact" className="py-16  px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-2xl font-bold ">
          Get in{" "}
          <span className="text-blue-600 underline decoration-2">Touch</span>
        </h2>
        <p className=" max-w-2xl mx-auto">
          I’d love to connect! Whether you have a project in mind or just want
          to say hi, feel free to reach out through email, phone, or social
          media.
        </p>

        {/* Contact Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Email Card */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition">
            <ToastContainer />
            <MdOutlineEmail className="text-blue-600 text-4xl mb-3" />
            <p className=" font-semibold">Email Me</p>
            <p className="text-sm ">toma.yyy80@gmail.com</p>
            <button
              onClick={() => handleCopy("toma.yyy80@gmail.com")}
              className="mt-2 text-sm flex items-center gap-1 text-blue-600 hover:underline"
            >
              <FaRegCopy /> Copy Email
            </button>
          </div>

          {/* Phone Card */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition">
            <MdOutlineCall className="text-blue-600 text-4xl mb-3" />
            <p className=" font-semibold">Call Me</p>
            <p className="text-sm">+8801771505546</p>
            <button
              onClick={() => handleCopy("+8801771505546")}
              className="mt-2 text-sm flex items-center gap-1 text-blue-600 hover:underline"
            >
              <FaRegCopy /> Copy Number
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-4">
          <p className=" font-medium mb-2">Connect With Me</p>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://github.com/NourobaSultana"
              target="_blank"
              className=" hover:text-blue-600 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nouroba-sultana-toma-317a79378/"
              target="_blank"
              className="text-blue-700 hover:text-blue-500 transition"
            >
              <BiLogoLinkedin />
            </a>
            <a
              href="https://www.figma.com/team_invite/redeem/3HQAW6QT0FTs1tmaXOgxt2"
              target="_blank"
              className="text-pink-600 hover:text-pink-500 transition"
            >
              <FaFigma />
            </a>
          </div>
        </div>

        {/* Footer Message */}
        <p className="text-sm ">
          © {new Date().getFullYear()} Designed with ❤️ by Toma
        </p>
      </div>
    </section>
  );
};

export default Contact;
