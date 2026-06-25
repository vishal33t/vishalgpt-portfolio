import useProfile from "../hooks/useProfile";
import { FaGraduationCap, FaUniversity, FaLaptopCode } from "react-icons/fa";

function About() {
  const profile = useProfile();

  if (!profile) {
    return (
      <div className="py-20 text-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <section
      id="about"
      data-aos="fade-up"
      className="relative py-24 px-6 bg-gradient-to-b from-black via-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 blur-[140px] opacity-10 rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600 blur-[140px] opacity-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-300 mb-5">
            About Me
          </span>

          <h2 className="text-5xl font-bold text-white">

            Passionate Developer

          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto text-lg leading-8">

            I enjoy building modern web applications with clean UI,
            scalable backend architecture and AI-powered features.

          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-bold text-white mb-6">

              Who am I?

            </h3>

            <p className="text-slate-300 text-lg leading-9">

              {profile.about}

            </p>

          </div>

          {/* Right */}

          <div className="grid gap-6">

            <div className="glass rounded-3xl p-8 hover:scale-[1.02] transition">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-cyan-500 flex justify-center items-center text-white text-xl">

                  <FaUniversity />

                </div>

                <div>

                  <h4 className="text-cyan-300 font-semibold">

                    College

                  </h4>

                  <p className="text-white mt-1">

                    {profile.college}

                  </p>

                </div>

              </div>

            </div>

            <div className="glass rounded-3xl p-8 hover:scale-[1.02] transition">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-blue-500 flex justify-center items-center text-white text-xl">

                  <FaGraduationCap />

                </div>

                <div>

                  <h4 className="text-cyan-300 font-semibold">

                    Degree

                  </h4>

                  <p className="text-white mt-1">

                    {profile.degree}

                  </p>

                </div>

              </div>

            </div>

            <div className="glass rounded-3xl p-8 hover:scale-[1.02] transition">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-purple-500 flex justify-center items-center text-white text-xl">

                  <FaLaptopCode />

                </div>

                <div>

                  <h4 className="text-cyan-300 font-semibold">

                    Graduation

                  </h4>

                  <p className="text-white mt-1">

                    {profile.graduationyear}

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Quick Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          <div className="glass rounded-3xl p-8 text-center">

            <h2 className="text-4xl font-bold text-cyan-400">
              10+
            </h2>

            <p className="text-slate-300 mt-2">
              Technologies
            </p>

          </div>

          <div className="glass rounded-3xl p-8 text-center">

            <h2 className="text-4xl font-bold text-cyan-400">
              5+
            </h2>

            <p className="text-slate-300 mt-2">
              MERN Projects
            </p>

          </div>

          <div className="glass rounded-3xl p-8 text-center">

            <h2 className="text-4xl font-bold text-cyan-400">
              3+
            </h2>

            <p className="text-slate-300 mt-2">
              Full Stack Apps
            </p>

          </div>

          <div className="glass rounded-3xl p-8 text-center">

            <h2 className="text-4xl font-bold text-cyan-400">
              2026
            </h2>

            <p className="text-slate-300 mt-2">
              Internship Ready
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;