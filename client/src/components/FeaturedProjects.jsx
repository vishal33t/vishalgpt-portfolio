import useProjects from "../hooks/useProjects";
import ProjectCard from "./projects/ProjectCard";

function FeaturedProjects() {
  const projects = useProjects();

  return (
    <section
  id="projects"
  className="py-24 px-6 bg-gradient-to-b from-black via-slate-950 to-slate-900"
>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-300 mb-5">
            Portfolio
          </span>

          <h2 className="text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto text-lg">
            Full-stack applications built with modern technologies, clean architecture, and a focus on performance and user experience.
          </p>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
            A collection of full-stack applications built using modern technologies with a focus on performance, scalability and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              live={project.live}
              image={project.image}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;