import useProfile from "../hooks/useProfile";

function About() {
  const profile = useProfile();

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-20 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-white mb-8">
          About Me
        </h2>

        <p className="text-slate-300 text-lg leading-8 mb-8">
          {profile.about}
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-blue-400 font-bold">
              College
            </h3>

            <p className="text-white mt-2">
              {profile.college}
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-blue-400 font-bold">
              Degree
            </h3>

            <p className="text-white mt-2">
              {profile.degree}
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-blue-400 font-bold">
              Graduation
            </h3>

            <p className="text-white mt-2">
              {profile.graduationyear}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;