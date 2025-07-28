/* eslint-disable @typescript-eslint/no-explicit-any */

function Navbar({ setSideMenuHandler }: {setSideMenuHandler:any}) {

  return (
    <nav className="fixed top-0 w-full z-40 bg-[url(/images/header.svg)] bg-no-repeat bg-cover border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white outfit-title">Sahir Muhammad Tariq</a>
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-blue-600 text-2xl" onClick={() => setSideMenuHandler((open: any) => !open)}>&#9776;</div>

          <div className="hidden md:flex items-center space-x-8 outfit-title">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors px-1"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors px-1"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors px-1"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors px-1"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
