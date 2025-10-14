import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  const themes = ["light", "dark"];
  const [theme, setTheme] = useState("light");
  const links = (
    <>
      <NavLink to="/">
        <li className="text-gray-700 hover:text-green-500 transition-colors font-bold list-none">
          Home
        </li>
      </NavLink>
      <NavLink to="/about">
        <li className="text-gray-700 hover:text-green-500 transition-colors font-bold list-none">
          About
        </li>
      </NavLink>
      <NavLink to="/contact">
        <li className="text-gray-700 hover:text-green-500 transition-colors font-bold list-none ">
          Contact
        </li>
      </NavLink>
    </>
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleDownload = () => {
    const cvUrl =
      "https://docs.google.com/document/d/1coXG8Q2nHtblzzgdTfTHEeuc1Yb8xtXDc1ypuizCLmg/edit?tab=t.0";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Nouroba-Sultana-Toma-CV.pdf";
    link.click();
  };

  const handleDownloadResume = () => {
    const cvUrl =
      "https://drive.google.com/file/d/1hCMjprUD0_VAq-yKCa-wKMLqFMFgaIub/view";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Nouroba-Sultana-Toma-CV.pdf";
    link.click();
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-base-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo / Name */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl sm:text-3xl font-bold">NS</h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            {links}

            {/* Theme Toggle */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost m-1 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44"
              >
                {themes.map((t) => (
                  <li key={t}>
                    <button
                      onClick={() => setTheme(t)}
                      className="capitalize w-full text-left"
                    >
                      {t}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download CV */}
            <button
              onClick={handleDownload}
              className="btn btn-primary rounded-xl font-semibold"
            >
              Download CV
            </button>

            <button
              onClick={handleDownloadResume}
              className="btn btn-primary rounded-xl font-semibold"
            >
              Resume
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <details>
                  <summary>Theme</summary>
                  <ul>
                    {themes.map((t) => (
                      <li key={t}>
                        <button onClick={() => setTheme(t)}>{t}</button>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              <li>
                <button
                  className="text-black bg-white w-full"
                  onClick={handleDownload}
                >
                  Download CV
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
