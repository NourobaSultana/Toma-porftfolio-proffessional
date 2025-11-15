import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import "./Navbar.css"
import logo from '../../assets/N.png'

const Navbar = () => {
  const themes = ["light", "dark"];
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
  

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleDownload = () => {
    const cvUrl =
      "https://docs.google.com/document/d/1coXG8Q2nHtblzzgdTfTHEeuc1Yb8xtXDc1ypuizCLmg/edit?usp=sharing";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Nouroba-Sultana-Toma-CV.pdf";
    link.click();
  };

  const handleDownloadResume = () => {
    const cvUrl =
      "https://drive.google.com/uc?export=download&id=1hCMjprUD0_VAq-yKCa-wKMLqFMFgaIub";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Nouroba-Sultana-Toma-Resume.pdf";
    link.click();
  };

  const textColor = theme === "dark" ? "text-white" : "text-black";
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";

  return (
    <nav className={`fixed w-full top-0 z-50 shadow-lg backdrop-blur-md ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="">
            <img className="w-18 h-16"  src={logo} alt="" />
          </div>
        
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            
            <NavLink to="/" className={`${textColor} hover:text-blue-500`}>Home</NavLink>
            <NavLink to="/about" className={`${textColor} hover:text-blue-500`}>About</NavLink>
            <NavLink to="/contact" className={`${textColor} hover:text-blue-500`}>Contact</NavLink>

            <select
              className={`border rounded-lg px-2 py-1 cursor-pointer ${
                theme === "dark"
                  ? "bg-gray-800 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              {themes.map((t) => (
                <option key={t} value={t} className="capitalize">
                  {t}
                </option>
              ))}
            </select>

            <button onClick={handleDownload} className="btn bg-[#52b788] rounded-xl font-semibold">Download CV</button>
            <button onClick={handleDownloadResume} className="btn bg-[#52b788] rounded-xl font-semibold">Resume</button>

            {/* Desktop Projects Dropdown */}
            <div className="relative">
              <button onClick={() => setOpen(!open)} className="btn bg-[#52b788] rounded-xl font-semibold">Projects</button>

              {open && (
                <ul className={`absolute right-0 mt-2 w-40 shadow-lg rounded-lg border p-2 space-y-3 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
                  <li>
                    <button
                      onClick={() => window.open("https://delicate-froyo-6fbd6d.netlify.app/", "_blank")}
                      className="w-full px-4 py-3 rounded-lg shadow-md border dark:border-gray-700 hover:bg-yellow-400 hover:text-white transition-all duration-300"
                    >Project 1</button>
                  </li>
                  <li>
                    <button
                      onClick={() => window.open("https://magnificent-entremet-a407ea.netlify.app/", "_blank")}
                      className="w-full px-4 py-3 rounded-lg shadow-md border dark:border-gray-700 hover:bg-yellow-400 hover:text-white transition-all duration-300"
                    >Project 2</button>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden dropdown dropdown-end">
            <label tabIndex={0} className={`btn btn-ghost ${textColor}`}>☰</label>

            <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-56 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
              <li><NavLink to="/" className={textColor}>Home</NavLink></li>
              <li><NavLink to="/about" className={textColor}>About</NavLink></li>
              <li><NavLink to="/contact" className={textColor}>Contact</NavLink></li>

              {/* Mobile Theme */}
              <li>
                <details>
                  <summary>Theme</summary>
                  <ul>
                    {themes.map((t) => (
                      <li key={t}><button onClick={() => setTheme(t)}>{t}</button></li>
                    ))}
                  </ul>
                </details>
              </li>

              {/* Mobile Downloads */}
              <li><button onClick={handleDownload}>Download CV</button></li>
              <li><button onClick={handleDownloadResume}>Resume</button></li>

              {/* Mobile Projects */}
              <li>
                <details>
                  <summary>Projects</summary>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => window.open("https://delicate-froyo-6fbd6d.netlify.app/", "_blank")}
                        className="px-3 py-2 rounded-lg border hover:bg-yellow-400 hover:text-white transition-all duration-300"
                      >Project 1</button>
                    </li>
                    <li>
                      <button
                        onClick={() => window.open("https://magnificent-entremet-a407ea.netlify.app/", "_blank")}
                        className="px-3 py-2 rounded-lg border hover:bg-yellow-400 hover:text-white transition-all duration-300"
                      >Project 2</button>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
