import { useEffect, useState } from "react";
import axios from "axios";

function ProfileManager() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    bio: "",
    about: "",
    college: "",
    degree: "",
    graduationyear: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/profile`
      );

      setFormData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/profile`,
        formData
      );

      alert("Profile Updated Successfully");
    } catch (error) {
      console.error(error);

      alert("Failed to Update Profile");
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl p-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        Profile Manager
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-3 rounded bg-slate-900 text-white"
        />

        <input
          name="title"
          value={formData.title || ""}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-3 rounded bg-slate-900 text-white"
        />

        <textarea
          name="bio"
          value={formData.bio || ""}
          onChange={handleChange}
          placeholder="Bio"
          rows="3"
          className="w-full p-3 rounded bg-slate-900 text-white"
        />

        <textarea
          name="about"
          value={formData.about || ""}
          onChange={handleChange}
          placeholder="About"
          rows="5"
          className="w-full p-3 rounded bg-slate-900 text-white"
        />

        <input
          name="college"
          value={formData.college || ""}
          onChange={handleChange}
          placeholder="College"
          className="w-full p-3 rounded bg-slate-900 text-white"
        />

        <input
          name="degree"
          value={formData.degree || ""}
          onChange={handleChange}
          placeholder="Degree"
          className="w-full p-3 rounded bg-slate-900 text-white"
        />

        <input
          name="graduationyear"
          value={formData.graduationyear || ""}
          onChange={handleChange}
          placeholder="Graduation Year"
          className="w-full p-3 rounded bg-slate-900 text-white"
        />

        <button
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded text-white font-bold"
        >
          Save Changes
        </button>

      </form>

    </div>
  );
}

export default ProfileManager;