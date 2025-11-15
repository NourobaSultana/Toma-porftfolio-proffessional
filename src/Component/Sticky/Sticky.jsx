import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { GrHome } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";

const SideNavbar = () => {
  return (
    <>
      {/* Desktop Left Sidebar */}
      <div
        className="hidden md:flex fixed top-1/2 -translate-y-1/2 left-0 w-[55px]
        shadow-xl rounded-r-2xl py-5 flex-col items-center gap-7 z-50
        bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700"
      >
        {/* Home */}
        <div className="relative group">
          <a
            href="/"
            className="text-2xl w-10 h-10 flex items-center justify-center rounded-full
            transition-transform duration-300 hover:scale-125 hover:-translate-y-2
            hover:text-blue-600 dark:hover:text-blue-400"
          >
            <GrHome />
          </a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded
            bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Home
          </span>
        </div>

        {/* Contact */}
        <div className="relative group">
          <a
            href="/contact"
            className="text-2xl w-10 h-10 flex items-center justify-center
            transition-transform duration-300 hover:scale-125 hover:-translate-y-2
            hover:text-blue-600 dark:hover:text-blue-400"
          >
            <RiContactsFill />
          </a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded
            bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Contact
          </span>
        </div>

        <hr className="border border-gray-200 dark:border-gray-700 w-8 mx-auto" />

        {/* LinkedIn */}
        <div className="relative group">
          <a
            href="https://www.linkedin.com/in/nouroba-sultana-toma-317a79378/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl w-10 h-10 flex items-center justify-center
            transition-transform duration-300 hover:scale-125 hover:-translate-y-2
            hover:text-blue-600 dark:hover:text-blue-400"
          >
            <BiLogoLinkedin />
          </a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded
            bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            LinkedIn
          </span>
        </div>

        {/* Github */}
        <div className="relative group">
          <a
            href="https://github.com/NourobaSultana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl w-10 h-10 flex items-center justify-center
            transition-transform duration-300 hover:scale-125 hover:-translate-y-2
            hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded
            bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Github
          </span>
        </div>

        {/* Facebook */}
        <div className="relative group">
          <a
            href="https://www.facebook.com/nouroba.toma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl w-10 h-10 flex items-center justify-center
            transition-transform duration-300 hover:scale-125 hover:-translate-y-2
            hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaFacebook />
          </a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded
            bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Facebook
          </span>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div
        className="md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-[500px] max-w-full h-[60px] bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 flex justify-around items-center z-50 shadow-xl rounded-t-2xl mx-auto"
      >
        <a href="/" className="text-2xl hover:text-blue-500 dark:hover:text-blue-400 transition-transform duration-300 hover:scale-125 hover:-translate-x-2">
          <GrHome />
        </a>
        
        <a href="/contact" className="text-2xl hover:text-blue-500 dark:hover:text-blue-400 transition-transform duration-300 hover:scale-125 hover:-translate-x-2">
          <RiContactsFill />
        </a>

        <a
          href="https://www.linkedin.com/in/nouroba-sultana-toma-317a79378/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-500 dark:hover:text-blue-400 transition-transform duration-300 hover:scale-125 hover:-translate-x-2"
        >
          <BiLogoLinkedin />
        </a>

        <a
          href="https://github.com/NourobaSultana"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-500 dark:hover:text-blue-400 transition-transform duration-300 hover:scale-125 hover:-translate-x-2"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.facebook.com/nouroba.toma"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-500 dark:hover:text-blue-400 transition-transform duration-300 hover:scale-125 hover:-translate-x-2"
        >
          <FaFacebook />
        </a>
      </div>
    </>
  );
};

export default SideNavbar;