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
  // Asignación de colores según la tecnología
  const techColors: { [key: string]: string } = {
    JavaScript: "bg-yellow-500 text-black",
    TypeScript: "bg-blue-600 text-white",
    React: "bg-cyan-500 text-white",
    TailwindCSS: "bg-teal-400 text-white",
    NextJS: "bg-gray-900 text-white",
    NodeJS: "bg-green-500 text-white",
    Html: "bg-red-500 text-white",
    Css: "bg-blue-500 text-white",
    postgreSQL: "bg-[#0064a5] text-white",
    // Puedes agregar más tecnologías y colores aquí
  };

  return (
    <div className="container min-h-[300px] bg-[#333030] shadow-lg grid grid-cols-2 rounded-lg overflow-hidden">
      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="col-span-3 row-span-5 flex justify-center items-center p-6">
          <Image src={img} alt="logo" width={330.58} height={201} className="max-w-full max-h-full flex justify-center items-center rounded-lg"></Image>
        </div>
        <div className="col-span-2 row-span-5 col-start-4">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>

            {/* Tecnologías mapeadas */}
            <div className="mb-4 flex flex-wrap gap-2 min-w-[300px] w-auto">
              {technologies.map((tech: string) => (
                <span
                  key={tech}
                  className={`py-1 border-none px-3 rounded-full text-sm font-semibold ${
                    techColors[tech] || "bg-gray-300 text-black"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="container min-w-[300px]">
              <p className="text-gray-500 mb-4">{description}</p>
            </div>
            <div className="flex justify-between items-center">
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Live Demo
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
