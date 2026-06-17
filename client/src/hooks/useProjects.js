import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";

function useProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return projects;
}

export default useProjects;