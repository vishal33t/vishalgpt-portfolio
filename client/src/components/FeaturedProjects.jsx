import useProjects from "../hooks/useProjects";
import ProjectCard from "./projects/ProjectCard";

function FeaturedProjects() {
  const projects = useProjects();

  return (
    <section className="bg-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-white mb-10">
          Featured Projects
        </h2>

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