function ProjectCard({ title, description, tech }) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl">

      <h2 className="text-white text-2xl font-bold">
        {title}
      </h2>

      <p className="text-slate-400 mt-4">
        {description}
      </p>

      <div className="flex gap-2 mt-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-blue-600 text-white px-2 py-1 rounded"
          >
            {item}
          </span>
        ))}
      </div>

    </div>
  );
}

export default ProjectCard;