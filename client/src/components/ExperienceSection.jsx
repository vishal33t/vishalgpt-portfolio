function ExperienceSection() {
  const timeline = [
    {
      year: "2023",
      title: "Started B.Tech IT",
      description:
        "Started my Information Technology journey and built a strong programming foundation.",
    },
    {
      year: "2024",
      title: "Web Development",
      description:
        "Learned HTML, CSS, JavaScript and React while building multiple frontend projects.",
    },
    {
      year: "2025",
      title: "MERN Stack Developer",
      description:
        "Built full-stack applications using MongoDB, Express.js, React.js and Node.js.",
    },
    {
      year: "2026",
      title: "AI & Full Stack Projects",
      description:
        "Developing AI-powered MERN applications and preparing for software engineering internships.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 px-6 bg-gradient-to-b from-slate-900 via-black to-slate-950 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-0 w-80 h-80 bg-cyan-500 rounded-full blur-[180px] opacity-10"></div>

      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-500 rounded-full blur-[180px] opacity-10"></div>

      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-300 mb-5">
            My Journey
          </span>

          <h2 className="text-5xl font-bold text-white">
            Learning & Growth
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
            Every year has helped me grow as a developer and move closer to
            becoming a professional full-stack engineer.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 w-1 h-full bg-cyan-500 rounded-full"></div>

          <div className="space-y-12">

            {timeline.map((item, index) => (

              <div
                key={index}
                className="relative pl-16"
              >

                {/* Circle */}

                <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-cyan-500 border-4 border-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>

                {/* Card */}

                <div className="glass rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300">

                  <span className="text-cyan-400 font-bold text-lg">

                    {item.year}

                  </span>

                  <h3 className="text-3xl font-bold text-white mt-2">

                    {item.title}

                  </h3>

                  <p className="text-slate-300 mt-4 leading-8">

                    {item.description}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default ExperienceSection;