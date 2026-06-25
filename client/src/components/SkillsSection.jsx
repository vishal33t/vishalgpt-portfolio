import useSkills from "../hooks/useSkills";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
} from "react-icons/si";

const icons = {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaPython,
  SiMongodb,
  SiExpress,
  SiJavascript,
};

function Skills() {
  const skills = useSkills();

  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-black overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500 rounded-full blur-[150px] opacity-10"></div>

      <div className="absolute bottom-10 right-0 w-72 h-72 bg-blue-600 rounded-full blur-[150px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-300 mb-5">
            My Skills
          </span>

          <h2 className="text-5xl font-bold text-white">
            Technologies I Work With
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
            I enjoy building modern, scalable, and responsive applications
            using the MERN stack and other powerful development tools.
          </p>

        </div>

        {/* Skills Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill) => {
            const Icon = icons[skill.icon];

            return (
              <div
                key={skill._id}
                className="glass rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300"
              >
                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center">

                    {Icon && (
                      <Icon className="text-4xl text-cyan-400" />
                    )}

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      {skill.name}
                    </h3>

                    <p className="text-cyan-300 mt-1">
                      {skill.level}% Proficiency
                    </p>

                  </div>

                </div>

                {/* Progress Bar */}

                <div className="mt-8">

                  <div className="flex justify-between text-sm text-slate-400 mb-2">

                    <span>Skill Level</span>

                    <span>{skill.level}%</span>

                  </div>

                  <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">

                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000"
                      style={{
                        width: `${skill.level}%`,
                      }}
                    ></div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Skills;