import { useEffect, useState } from "react";
import { getSkills } from "../services/skillService";

function useSkills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const data = await getSkills();
      setSkills(data);
    };

    fetchSkills();
  }, []);

  return skills;
}

export default useSkills;