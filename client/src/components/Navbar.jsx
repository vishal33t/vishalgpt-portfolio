function Navbar() {
  return (
    <nav className="w-full bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">
          VishalGPT
        </h1>

        {/* Navigation */}
        <ul className="flex gap-6 text-white">
          <li className="cursor-pointer hover:text-blue-500">Home</li>
          <li className="cursor-pointer hover:text-blue-500">About</li>
          <li className="cursor-pointer hover:text-blue-500">Projects</li>
          <li className="cursor-pointer hover:text-blue-500">Contact</li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;