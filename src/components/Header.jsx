import { useState } from "react";

import Menu from "./icons-react/Menu.jsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed z-20 flex justify-center w-full h-16 p-4 max-w-sm:items-center max-sm:bottom-0">
      <button
        onClick={handleMenu}
        aria-label="Menu"
        title="Menu"
        className="flex items-center justify-center transition-transform ease-linear rounded outline-none size-8 sm:hidden group active:scale-95 outline-1 outline-transparent outline outline-offset-0 focus-visible:outline-white"
      >
        <Menu className="transition-colors ease-linear size-6 group-hover:text-sky-400 " />
      </button>

      <nav
        className={`flex max-sm:bottom-16 items-center gap-4 max-sm:fixed max-sm:w-full max-sm:h-fit max-sm:pt-4 max-sm:flex-col max-sm:justify-center ${
          !isMenuOpen && "max-sm:translate-y-64"
        }`}
      >
        <a
          href="/#welcome"
          className="px-1.5 outline-none cursor-pointer outline-1 outline-transparent outline outline-offset-2 focus-visible:outline-white rounded text-lg transition ease-linear hover:text-sky-400 active:scale-95"
        >
          Inicio
        </a>
        <a
          href="/#about"
          className="px-1.5 outline-none cursor-pointer outline-1 outline-transparent outline outline-offset-2 focus-visible:outline-white rounded text-lg transition ease-linear hover:text-sky-400 active:scale-95"
        >
          Sobre Mi
        </a>
        <a
          href="/#projects"
          className="px-1.5 outline-none cursor-pointer outline-1 outline-transparent outline outline-offset-2 focus-visible:outline-white rounded text-lg transition ease-linear hover:text-sky-400 active:scale-95"
        >
          Proyectos
        </a>
        <a
          href="/#contact"
          className="px-1.5 outline-none cursor-pointer outline-1 outline-transparent outline outline-offset-2 focus-visible:outline-white rounded text-lg transition ease-linear hover:text-sky-400 active:scale-95"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}
