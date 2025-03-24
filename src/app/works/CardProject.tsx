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
    <div className="container min-h-[400px] bg-transparent border border-white border-opacity-15 shadow-lg grid grid-cols-2 rounded-xl overflow-hidden">
      <div className="col-span-1 relative h-full">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-l-xl"
          priority
        />
      </div>

      <div className="col-span-1 p-6 flex flex-col">
        <h2 className="text-2xl font-inter font-bold text-white mb-2">
          {title}
        </h2>

        {/* Tecnologías mapeadas */}
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech: string) => (
            <span
              key={tech}
              className="text-white bg-gray-600 bg-opacity-60 font-inter font-medium text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="h-20 overflow-hidden flex-shrink-0 mb-4">
          <p className="text-gray-500 text-sm font-inter font-medium">
            {description}
          </p>
        </div>

        <div className="flex justify-between items-center gap-4 mt-auto">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-md bg-gray-400 flex justify-center items-center text-white gap-2 shadow-md bg-opacity-60 hover:bg-opacity-80 hover:bg-gray-300 transition duration-200 ease-in-out whitespace-nowrap"
            >
              <i className="bx bx-globe text-2xl"></i>
              <span className="text-base">Live Demo</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-md bg-gray-400 flex justify-center items-center text-white gap-2 shadow-md bg-opacity-60 hover:bg-opacity-80 hover:bg-gray-300 transition duration-200 ease-in-out whitespace-nowrap"
            >
              <i className="bx bxl-github text-2xl"></i>
              <span className="text-base">GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
