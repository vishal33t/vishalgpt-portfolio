function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6">
      <div className="text-center">

        <p className="text-blue-400 text-lg mb-3">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-bold text-white mb-4">
          Vishal Singh
        </h1>

        <h2 className="text-2xl text-slate-300 mb-6">
          MERN Stack Developer & AI Enthusiast
        </h2>

        <p className="max-w-2xl text-slate-400 mx-auto mb-8">
          I build full-stack web applications using MongoDB, Express,
          React, and Node.js, and I'm passionate about integrating AI
          into modern web experiences.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold">
            View Projects
          </button>

          <button className="border border-white px-6 py-3 rounded-lg text-white hover:bg-white hover:text-black transition">
            Talk to AI
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;