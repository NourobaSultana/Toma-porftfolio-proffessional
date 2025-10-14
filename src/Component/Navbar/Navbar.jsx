import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  const themes = ["light", "dark"];
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleDownload = () => {
    const cvUrl =
      "https://docs.google.com/document/d/1coXG8Q2nHtblzzgdTfTHEeuc1Yb8xtXDc1ypuizCLmg/export?format=pdf";
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

  return (
    <nav className="fixed w-full top-0 z-50 bg-base-100 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-500 tracking-wide">
              NS
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>

            {/* Theme Toggle */}
            <select
              className="border rounded-lg px-2 py-1 bg-base-100 cursor-pointer"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              {themes.map((t) => (
                <option key={t} value={t} className="capitalize">
                  {t}
                </option>
              ))}
            </select>

            {/* Buttons */}
            <button
              onClick={handleDownload}
              className="btn btn-primary rounded-xl font-semibold"
            >
              Download CV
            </button>

            <button
              onClick={handleDownloadResume}
              className="btn btn-outline rounded-xl font-semibold"
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
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
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
                <button onClick={handleDownload}>Download CV</button>
              </li>
              <li>
                <button onClick={handleDownloadResume}>Resume</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
