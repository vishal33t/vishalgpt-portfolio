import projects from "../data/projects";
import ProjectCard from "./projects/ProjectCard";

function FeaturedProjects() {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-white text-5xl mb-10">
          Featured Projects
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProjects;