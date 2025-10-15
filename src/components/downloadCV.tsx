"use client";
import React from "react";
import { DownloadIcon } from "../icons/DownloadIcon";

export const DownloadCV = ({
  title,
  link,
  cv,
}: {
  title: string;
  link: string;
  cv: boolean;
}) => {
  // 1. Estado para saber si el cursor está sobre el elemento
  const [isHovered, setIsHovered] = React.useState(false);

  // Si 'cv' no es true, simplemente renderizamos el botón normal sin animación.
  if (!cv) {
    return (
      <a
        href={link}
        className="border-2 border-[#C778DD] p-2 text-sm w-full md:w-36 text-center inline-block hover:bg-[#C778DD] hover:text-black transition-colors duration-300"
      >
        {title}
      </a>
    );
  }

  // Si 'cv' es true, usamos el botón con la animación
  return (
    <a
      href={link}
      download="MaximilianoCV.pdf"
      // 2. Eventos para actualizar el estado
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Se añade flex para centrar el contenido (texto/icono)
      className="relative flex items-center justify-center border-2 border-[#C778DD] p-2 text-sm w-full md:w-36 h-[42px] text-center overflow-hidden hover:bg-[#C778DD] hover:text-black transition-colors duration-300"
    >
      {/* 3. Contenedor para el texto */}
      <span
        className={`transition-all duration-300 ease-in-out ${
          isHovered ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        {title}
      </span>

      {/* 4. Contenedor para el icono (posicionado absolutamente) */}
      <span
        className={`absolute transition-all duration-300 ease-in-out ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <DownloadIcon />
      </span>
    </a>
  );
};

export default DownloadCV;
