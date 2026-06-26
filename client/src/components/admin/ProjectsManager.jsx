import { useEffect, useState } from "react";
import axios from "axios";

function ProjectsManager() {

  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    github: "",
    live: "",
    image: "",
    tech: "",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/projects`
    );

    setProjects(res.data);
  };

  const addProject = async (e) => {
    e.preventDefault();

    await axios.post(
      `${import.meta.env.VITE_API_URL}/projects`,
      {
        ...formData,
        tech: formData.tech.split(","),
      }
    );

    setFormData({
      title: "",
      description: "",
      github: "",
      live: "",
      image: "",
      tech: "",
    });

    fetchProjects();
  };

  const deleteProject = async (id) => {
    await axios.delete(
      `${import.meta.env.VITE_API_URL}/projects/${id}`
    );

    fetchProjects();
  };

  return (
    <div className="bg-slate-800 p-8 rounded-xl">

      <h2 className="text-3xl text-white font-bold mb-8">
        Projects Manager
      </h2>

      <form
        onSubmit={addProject}
        className="space-y-4"
      >

        <input
          placeholder="Project Title"
          className="w-full p-3 rounded bg-slate-900 text-white"
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Description"
          className="w-full p-3 rounded bg-slate-900 text-white"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />

        <input
          placeholder="GitHub URL"
          className="w-full p-3 rounded bg-slate-900 text-white"
          value={formData.github}
          onChange={(e) =>
            setFormData({
              ...formData,
              github: e.target.value,
            })
          }
        />

        <input
          placeholder="Live URL"
          className="w-full p-3 rounded bg-slate-900 text-white"
          value={formData.live}
          onChange={(e) =>
            setFormData({
              ...formData,
              live: e.target.value,
            })
          }
        />

        <input
          placeholder="Image URL"
          className="w-full p-3 rounded bg-slate-900 text-white"
          value={formData.image}
          onChange={(e) =>
            setFormData({
              ...formData,
              image: e.target.value,
            })
          }
        />

        <input
          placeholder="React,Node,MongoDB"
          className="w-full p-3 rounded bg-slate-900 text-white"
          value={formData.tech}
          onChange={(e) =>
            setFormData({
              ...formData,
              tech: e.target.value,
            })
          }
        />

        <button className="bg-cyan-500 px-6 py-3 rounded text-white font-bold">
          Add Project
        </button>

      </form>

      <div className="space-y-4 mt-10">

        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-slate-900 p-4 rounded flex justify-between"
          >
            <div>
              <h3 className="text-white font-bold">
                {project.title}
              </h3>

              <p className="text-slate-400">
                {project.description}
              </p>
            </div>

            <button
              onClick={() =>
                deleteProject(project._id)
              }
              className="bg-red-600 px-4 py-2 rounded text-white"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ProjectsManager;