import { Iproyect } from "../../interface/proyect";
import React from "react";
import Image from "next/image";

export const CardProject = ({
  title,
  technologies,
  description,
  img,
  live,
  github,
}: Iproyect) => {
  return (
    <div className="container min-h-[300px] md:min-h-[400px] bg-transparent border border-white border-opacity-15 shadow-lg grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden">
      {/* Imagen - Ocupa toda la anchura en móvil, mitad en desktop */}
      <div className="col-span-1 relative h-[200px] md:h-full">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="md:rounded-l-xl"
          priority
        />
      </div>

      {/* Contenido - Ocupa toda la anchura en móvil, mitad en desktop */}
      <div className="col-span-1 p-4 md:p-6 flex flex-col">
        <h2 className="text-xl md:text-2xl font-inter font-bold text-white mb-2">
          {title}
        </h2>

        {/* Tecnologías mapeadas */}
        <div className="mb-3 md:mb-4 flex flex-wrap gap-1 md:gap-2">
          {technologies.map((tech: string) => (
            <span
              key={tech}
              className="text-white bg-gray-600 bg-opacity-60 font-inter font-medium text-xs md:text-sm px-2 md:px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="h-16 md:h-20 overflow-hidden flex-shrink-0 mb-3 md:mb-4">
          <p className="text-gray-500 text-xs md:text-sm font-inter font-medium">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 md:gap-4 mt-auto">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-3 py-1 rounded-md bg-gray-400 flex justify-center items-center text-white gap-2 shadow-md bg-opacity-60 hover:bg-opacity-80 hover:bg-gray-300 transition duration-200 ease-in-out whitespace-nowrap"
            >
              <i className="bx bx-globe text-xl md:text-2xl"></i>
              <span className="text-sm md:text-base">Live Demo</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-3 py-1 rounded-md bg-gray-400 flex justify-center items-center text-white gap-2 shadow-md bg-opacity-60 hover:bg-opacity-80 hover:bg-gray-300 transition duration-200 ease-in-out whitespace-nowrap"
            >
              <i className="bx bxl-github text-xl md:text-2xl"></i>
              <span className="text-sm md:text-base">GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
