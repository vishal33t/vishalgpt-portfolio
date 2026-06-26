import { useState } from "react";
import ProfileManager from "../../components/admin/ProfileManager";
import SkillsManager from "../../components/admin/SkillsManager";
import ProjectsManager from "../../components/admin/ProjectsManager";
function Dashboard() {
  const [active, setActive] = useState("profile");

  return (
    <div className="min-h-screen bg-slate-950 flex">

      {/* Sidebar */}

      <div className="w-64 bg-slate-900 border-r border-slate-800 p-6">

        <h2 className="text-3xl font-bold text-cyan-400 mb-10">
          Admin
        </h2>

        <button
          onClick={() => setActive("profile")}
          className="w-full text-left p-3 rounded-lg text-white hover:bg-slate-800 mb-2"
        >
          Profile
        </button>

        <button
          onClick={() => setActive("skills")}
          className="w-full text-left p-3 rounded-lg text-white hover:bg-slate-800 mb-2"
        >
          Skills
        </button>

        <button
          onClick={() => setActive("projects")}
          className="w-full text-left p-3 rounded-lg text-white hover:bg-slate-800 mb-2"
        >
          Projects
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin/login";
          }}
          className="w-full text-left p-3 rounded-lg bg-red-600 text-white mt-10"
        >
          Logout
        </button>

      </div>

      {/* Main */}

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold text-white mb-8">
          Admin Dashboard
        </h1>

        {active === "profile" && <ProfileManager/>}

      

        {active === "skills" && <SkillsManager />}

       {active === "projects" && <ProjectsManager />}

      </div>

    </div>
  );
}

export default Dashboard;