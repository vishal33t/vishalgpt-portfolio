import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800 py-12 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              ⚡ VishalGPT
            </h2>

            <p className="text-slate-400 mt-4 max-w-md leading-7">
              Full Stack MERN Developer passionate about building
              scalable web applications and modern user experiences.
            </p>

          </div>

          {/* Right */}

          <div className="flex flex-wrap gap-4 md:justify-end">

            <a
              href="https://github.com/vishal33t"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 hover:bg-cyan-500 transition px-5 py-3 rounded-xl text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 hover:bg-cyan-500 transition px-5 py-3 rounded-xl text-white"
            >
              <FaLinkedin />
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition px-5 py-3 rounded-xl text-white font-semibold"
            >
              <FaDownload />
              Resume
            </a>

          </div>

        </div>

        <hr className="border-slate-800 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm">
            © 2026 Vishal Singh • Crafted with ❤️ using React & Node.js
          </p>

          <p className="text-slate-500 text-sm">
            Built with React • Tailwind CSS • Node.js • MongoDB
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;