function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  image,
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">

      {/* Project Image */}

      <div className="h-56 overflow-hidden bg-slate-800">

        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-6xl">
            🚀
          </div>
        )}

      </div>

      {/* Content */}

      <div className="p-7">

        <h2 className="text-3xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-4 text-slate-400 leading-7">
          {description}
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-3 mt-6">

          {tech &&
            tech.map((item, index) => (
              <span
                key={index}
                className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500 hover:text-white"
              >
                {item}
              </span>
            ))}

        </div>

        {/* Buttons */}

        <div className="mt-8 flex flex-wrap gap-4">

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
          >
            GitHub
          </a>

          {live && live.trim() !== "" && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-400 px-6 py-3 font-semibold text-white transition hover:bg-cyan-500"
            >
              Live Demo
            </a>
          )}

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;