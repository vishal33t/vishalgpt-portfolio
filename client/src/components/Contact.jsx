import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-b from-slate-950 via-black to-slate-900 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500 blur-[180px] opacity-10 rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 blur-[180px] opacity-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-300 mb-5">
            Contact
          </span>

          <h2 className="text-5xl font-bold text-white">
            Let's Connect
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
            I'm actively looking for internship opportunities and exciting projects.
            Feel free to reach out.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <div className="space-y-6">

            <div className="glass rounded-3xl p-6 flex gap-5 items-center">

              <FaEnvelope className="text-3xl text-cyan-400" />

              <div>

                <h3 className="text-white font-bold text-xl">
                  Email
                </h3>

                <p className="text-slate-300">
                  rajputvishal33t@gmail.com
                </p>

              </div>

            </div>

            <div className="glass rounded-3xl p-6 flex gap-5 items-center">

              <FaMapMarkerAlt className="text-3xl text-cyan-400" />

              <div>

                <h3 className="text-white font-bold text-xl">
                  Location
                </h3>

                <p className="text-slate-300">
                  Surat, Gujarat, India
                </p>

              </div>

            </div>

            <div className="glass rounded-3xl p-6">

              <h3 className="text-white text-2xl font-bold">
                Available for Internship 🚀
              </h3>

              <p className="text-slate-300 mt-3 leading-7">
                Open to Full Stack, MERN Stack, Software Development
                and AI-related internship opportunities.
              </p>

            </div>

          </div>

          {/* Right Side */}

          <div className="glass rounded-3xl p-8">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-800 rounded-xl p-4 text-white outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-800 rounded-xl p-4 text-white outline-none"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full bg-slate-800 rounded-xl p-4 text-white outline-none"
              ></textarea>

              <button
                className="w-full bg-cyan-500 hover:bg-cyan-600 transition rounded-xl py-4 text-white font-bold"
              >
                Send Message
              </button>

            </form>

            <div className="flex gap-5 mt-8 justify-center">

              <a
                href="https://github.com/vishal33t"
                target="_blank"
                rel="noreferrer"
                className="glass p-4 rounded-full text-white text-xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/vishal-singh-33t"
                target="_blank"
                rel="noreferrer"
                className="glass p-4 rounded-full text-white text-xl"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;