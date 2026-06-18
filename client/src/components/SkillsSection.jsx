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
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white text-center mb-12">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skill) => {
            const Icon = icons[skill.icon];

            return (
              <div
                key={skill._id}
                className="bg-slate-800 rounded-2xl p-6 hover:scale-105 transition duration-300"
              >
                <div className="flex items-center gap-4">

                  {Icon && (
                    <Icon className="text-4xl text-cyan-400" />
                  )}

                  <div>

                    <h3 className="text-white text-xl font-bold">
                      {skill.name}
                    </h3>

                    <p className="text-slate-400">
                      {skill.level}%
                    </p>

                  </div>

                </div>

                <div className="w-full bg-slate-700 rounded-full h-3 mt-6">

                  <div
                    className="bg-cyan-400 h-3 rounded-full"
                    style={{
                      width: `${skill.level}%`,
                    }}
                  ></div>

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