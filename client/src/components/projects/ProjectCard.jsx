function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  image,
}) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold text-white mb-4">
        {title}
      </h2>

      <p className="text-slate-300 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech &&
          tech.map((item, index) => (
            <span
              key={index}
              className="bg-blue-600 px-3 py-1 rounded-full text-white text-sm"
            >
              {item}
            </span>
          ))}
      </div>

      <div className="flex gap-3">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 px-4 py-2 rounded-lg text-white"
        >
          GitHub
        </a>

        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="border border-white px-4 py-2 rounded-lg text-white"
        >
          Live Demo
        </a>
      </div>

    </div>
  );
}

export default ProjectCard;