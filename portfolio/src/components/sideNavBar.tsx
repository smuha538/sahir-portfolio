/* eslint-disable @typescript-eslint/no-explicit-any */

function SideNavBar({ sideMenuOpen, setSideMenuHandler}: {sideMenuOpen: any, setSideMenuHandler: any}){

    return (
        <div className={`w-full fixed top-0 left-0 bg-[rgba(10,10,10,0.8)] z-40 items-center flex flex-col justify-center
                     transition-all duration-300 ease-in-out outfit-title
                     ${
                       sideMenuOpen
                         ? "h-screen pointer-events-auto opacity-100"
                         : "h-0 pointer-events-none opacity-0"
                     }
                   `}>
            <button
                onClick={() => setSideMenuHandler(false)}
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            <a
                href="#home"
                onClick={() => setSideMenuHandler(false)}
                className="text-2xl font-semibold my-4"
            >
                Home
            </a>
            <a
                href="#about"
                onClick={() => setSideMenuHandler(false)}
                className="text-2xl font-semibold my-4"
            >
                About
            </a>
             <a
                href="#projects"
                onClick={() => setSideMenuHandler(false)}
                className="text-2xl font-semibold my-4"
            >
                Projects
            </a>
            <a
                href="#contact"
                onClick={() => setSideMenuHandler(false)}
                className="text-2xl font-semibold my-4"
            >
                Contact
            </a>

        </div>
    )
}

export default SideNavBar