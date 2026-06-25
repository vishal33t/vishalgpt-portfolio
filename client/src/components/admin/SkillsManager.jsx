import { useEffect, useState } from "react";
import axios from "axios";

function SkillsManager() {
  const [skills, setSkills] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    level: "",
    icon: "",
  });

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/skills`
      );

      setSkills(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/skills`,
        {
          ...formData,
          level: Number(formData.level),
        }
      );

      setFormData({
        name: "",
        level: "",
        icon: "",
      });

      fetchSkills();

    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/skills/${id}`
      );

      fetchSkills();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl p-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        Skills Manager
      </h2>

      {/* Add Skill Form */}

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-4 gap-4 mb-8"
      >

        <input
          placeholder="Skill Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          className="p-3 rounded bg-slate-900 text-white"
        />

        <input
          placeholder="Level"
          type="number"
          value={formData.level}
          onChange={(e) =>
            setFormData({
              ...formData,
              level: e.target.value,
            })
          }
          className="p-3 rounded bg-slate-900 text-white"
        />

        <input
          placeholder="Icon"
          value={formData.icon}
          onChange={(e) =>
            setFormData({
              ...formData,
              icon: e.target.value,
            })
          }
          className="p-3 rounded bg-slate-900 text-white"
        />

        <button
          className="bg-cyan-500 rounded text-white font-bold"
        >
          Add Skill
        </button>

      </form>

      {/* Skills List */}

      <div className="space-y-4">

        {skills.map((skill) => (
          <div
            key={skill._id}
            className="flex justify-between items-center bg-slate-900 p-4 rounded"
          >

            <div>
              <h3 className="text-white font-bold">
                {skill.name}
              </h3>

              <p className="text-slate-400">
                {skill.level}%
              </p>
            </div>

            <button
              onClick={() =>
                handleDelete(skill._id)
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

export default SkillsManager;