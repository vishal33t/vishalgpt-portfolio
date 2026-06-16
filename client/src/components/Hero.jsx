function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-slate-950">

      <div className="max-w-7xl mx-auto w-full px-8 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Side */}

        <div>

          <p className="text-blue-400 text-lg mb-3">
            👋 Welcome to my portfolio
          </p>

          <h1 className="text-6xl lg:text-7xl font-extrabold text-white leading-tight">

            Hi,

            <br />

            I'm

            <span className="text-blue-500">
              {" "}Vishal Singh
            </span>

          </h1>

          <h2 className="text-2xl text-slate-300 mt-6">
            MERN Stack Developer
          </h2>

          <p className="text-slate-400 mt-8 max-w-xl leading-8">

            Passionate about building scalable web applications,
            integrating AI into real-world products, and creating
            modern digital experiences.

          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white font-semibold transition">

              Explore Projects

            </button>

            <button className="border border-slate-500 hover:border-blue-500 px-8 py-4 rounded-xl text-white transition">

              Talk to VishalGPT

            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-40">

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;