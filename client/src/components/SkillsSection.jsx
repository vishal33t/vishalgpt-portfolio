function SkillsSection() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
    "REST API",
    "Python"
  ];

  return (
    <section className="bg-slate-900 py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 text-center hover:scale-105 hover:bg-blue-600 transition duration-300 cursor-pointer"
            >

              <h3 className="text-white text-xl font-semibold">
                {skill}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default SkillsSection;