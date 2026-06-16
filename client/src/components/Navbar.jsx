function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-500 cursor-pointer">
          VishalGPT
        </h1>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-white font-medium">

          <li className="hover:text-blue-500 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-blue-500 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-blue-500 cursor-pointer transition">
            Projects
          </li>

          <li className="hover:text-blue-500 cursor-pointer transition">
            Contact
          </li>

        </ul>

        {/* Resume Button */}
        <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg text-white font-semibold">
          Resume
        </button>

      </div>
    </nav>
  );
}

export default Navbar;