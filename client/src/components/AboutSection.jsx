function AboutSection() {
  return (
    <section className="bg-slate-950 py-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}

        <div>

          <h2 className="text-4xl font-bold text-white mb-6">
            About Me
          </h2>

          <p className="text-slate-300 leading-8">
            I'm <span className="text-blue-500 font-semibold">
              Vishal Singh
            </span>, a B.Tech Information Technology student and
            MERN Stack Developer who enjoys building responsive,
            scalable, and user-friendly web applications.
          </p>

          <p className="text-slate-400 mt-5 leading-8">
            I love solving real-world problems with technology and
            continuously explore AI integration in modern web
            applications. My goal is to become a skilled Full Stack
            Developer capable of building impactful products.
          </p>

        </div>

        {/* Right Side */}

        <div className="grid grid-cols-2 gap-5">

          <div className="bg-slate-900 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-500">1+</h3>
            <p className="text-slate-300 mt-2">MERN Project</p>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-500">7+</h3>
            <p className="text-slate-300 mt-2">Technologies</p>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-500">2023</h3>
            <p className="text-slate-300 mt-2">Started B.Tech</p>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-500">AI</h3>
            <p className="text-slate-300 mt-2">Learning & Building</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;