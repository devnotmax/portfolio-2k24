"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cerrar el menú cuando se hace click en un enlace
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Iconos de redes sociales
  const socialIcons = [
    {
      href: "https://discordapp.com/users/1142294231898140742",
      src: "/discord-icon.svg",
      alt: "Discord",
    },
    {
      href: "https://www.linkedin.com/in/machifrias/",
      src: "/linkedin-icon.svg",
      alt: "LinkedIn",
    },
    {
      href: "https://github.com/devnotmax",
      src: "/github-icon.svg",
      alt: "GitHub",
    },
  ];

  return (
    <header className="z-50">
      <div className="flex justify-center">
        <nav className="bg-[#282C33] flex flex-col w-full md:w-[80%]">
          <div className="p-4 md:p-8 flex justify-between items-center w-full">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="logo"
                width={50}
                height={50}
                className="w-[3rem]"
              />
              <h1 className="text-xl md:text-3xl font-fira-code font-bold text-white ml-2">
                Maximiliano
              </h1>
            </div>

            {/* Botón hamburguesa para móviles */}
            <div className="md:hidden flex items-center">
              <button
                className="text-white focus:outline-none p-2 rounded hover:bg-[#363b44] transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {isMenuOpen ? (
                  // Icono X para cerrar
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Icono de hamburguesa para abrir
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Menú de navegación para desktop */}
            <ul className="hidden md:flex p-0 flex-row gap-4 md:gap-8 justify-center items-center text-white font-medium font-fira-code">
              <li className="whitespace-nowrap">
                <Link
                  href="/"
                  className="hover:text-[#C778DD] transition-colors"
                >
                  <span className="text-[#C778DD]">#</span>Inicio
                </Link>
              </li>
              <li className="whitespace-nowrap">
                <Link
                  href="/works"
                  className="hover:text-[#C778DD] transition-colors"
                >
                  <span className="text-[#C778DD]">#</span>Proyectos
                </Link>
              </li>
              <li className="whitespace-nowrap">
                <Link
                  href="/about"
                  className="hover:text-[#C778DD] transition-colors"
                >
                  <span className="text-[#C778DD]">#</span>Sobre Mi
                </Link>
              </li>
              <li className="whitespace-nowrap">
                <Link
                  href="/contact"
                  className="hover:text-[#C778DD] transition-colors"
                >
                  <span className="text-[#C778DD]">#</span>Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Menú móvil */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col items-center gap-4 pb-4 text-white font-medium font-fira-code">
              <li className="whitespace-nowrap w-full text-center py-2 hover:bg-[#363b44] transition-colors">
                <Link href="/" onClick={handleLinkClick} className="block">
                  <span className="text-[#C778DD]">#</span>Inicio
                </Link>
              </li>
              <li className="whitespace-nowrap w-full text-center py-2 hover:bg-[#363b44] transition-colors">
                <Link href="/works" onClick={handleLinkClick} className="block">
                  <span className="text-[#C778DD]">#</span>Proyectos
                </Link>
              </li>
              <li className="whitespace-nowrap w-full text-center py-2 hover:bg-[#363b44] transition-colors">
                <Link href="/about" onClick={handleLinkClick} className="block">
                  <span className="text-[#C778DD]">#</span>Sobre Mi
                </Link>
              </li>
              <li className="whitespace-nowrap w-full text-center py-2 hover:bg-[#363b44] transition-colors">
                <Link
                  href="/contact"
                  onClick={handleLinkClick}
                  className="block"
                >
                  <span className="text-[#C778DD]">#</span>Contacto
                </Link>
              </li>

              {/* Separador para las redes sociales */}
              <li className="w-1/2 h-px bg-gray-700 my-2"></li>

              {/* Redes sociales en móvil */}
              <li className="whitespace-nowrap w-full">
                <div className="flex justify-center gap-6 py-2">
                  {socialIcons.map((icon, index) => (
                    <a
                      key={index}
                      href={icon.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity duration-300"
                      onClick={handleLinkClick}
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={20}
                        height={20}
                        className="w-7 h-7"
                      />
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
