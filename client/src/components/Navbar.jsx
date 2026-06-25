import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-cyan-400">
          VishalGPT
        </h1>

        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8 items-center">

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#experience">Experience</a>

          <a href="#contact">Contact</a>

          <a
            href="/resume/Vishal_Singh_Resume.pdf"
            download
            className="bg-cyan-500 text-white px-5 py-2 rounded-full hover:scale-105 transition"
          >
            Resume
          </a>

          <button
            onClick={toggleTheme}
            className="text-xl"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

      </div>

      {menuOpen && (

        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-slate-900">

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#experience">Experience</a>

          <a href="#contact">Contact</a>

          <a
            href="/resume/Vishal_Singh_Resume.pdf"
            download
          >
            Resume
          </a>

        </div>

      )}

    </nav>
  );
}

export default Navbar;