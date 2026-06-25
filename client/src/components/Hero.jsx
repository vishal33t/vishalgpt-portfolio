import useProfile from "../hooks/useProfile";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  const profile = useProfile();

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
        Loading...
      </div>
    );
  }

  return (
    <section
      id="home"
      className="relative min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white overflow-hidden pt-24"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">

          {/* Left Content */}

          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
              👋 Welcome to my Portfolio
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Hi, I'm
              <span className="block text-cyan-400">
                {profile.name}
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-300 mt-6">
              {profile.title}
            </h2>

            <p className="text-slate-400 mt-8 leading-8 max-w-2xl">
              {profile.bio}
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 transition rounded-full text-white font-semibold"
              >
                View Projects →
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition rounded-full font-semibold"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 transition rounded-full text-white font-semibold"
              >
                Hire Me
              </a>

            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a
                href="https://github.com/vishal33t"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-500 transition text-white"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-500 transition text-white"
              >
                <FaLinkedin />
              </a>

            </div>

            {/* Tech Stack */}

            <div className="flex flex-wrap gap-3 mt-10">

              <span className="px-4 py-2 rounded-full bg-slate-800 text-cyan-400 text-sm">
                ⚛ React
              </span>

              <span className="px-4 py-2 rounded-full bg-slate-800 text-green-400 text-sm">
                🍃 MongoDB
              </span>

              <span className="px-4 py-2 rounded-full bg-slate-800 text-yellow-400 text-sm">
                🟢 Node.js
              </span>

              <span className="px-4 py-2 rounded-full bg-slate-800 text-sky-400 text-sm">
                🚀 Express
              </span>

            </div>

          </div>

          {/* Right Side */}

          {/* Right Side */}

<div className="flex justify-center">

  <div className="flex flex-col items-center">

    {/* Image Card */}

    <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 shadow-2xl">

      <img
        src="images/profile.jpeg"
        alt="Vishal Singh"
        className="
          w-[280px]
          sm:w-[320px]
          md:w-[380px]
          lg:w-[420px]
          xl:w-[450px]
          h-auto
          object-cover
        "
      />

    </div>

    {/* Badge */}

    <div className="mt-6 bg-slate-900 border border-cyan-500/20 rounded-2xl px-6 py-4 shadow-xl text-center">

      <p className="text-cyan-400 font-semibold">
        🚀 Available for Internship
      </p>

      <p className="text-slate-400 text-sm mt-1">
        MERN • Full Stack • Software Developer
      </p>

    </div>

  </div>

</div>

        </div>

      </div>

    </section>
  );
}

export default Hero;