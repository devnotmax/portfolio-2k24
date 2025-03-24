import React from "react";
import Image from "next/image";
import TitleHeader from "../components/TitleHeader";

interface TimelineItemProps {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies?: string[];
  logo?: string;
  isLeft?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  company,
  position,
  period,
  description,
  technologies = [],
  logo = "/placeholder-company.png",
  isLeft = true,
}) => {
  return (
    <div className={`flex md:contents ${isLeft ? "" : "flex-row-reverse"}`}>
      {/* Línea de tiempo y círculo del logo - Ajustado para móviles */}
      <div className="col-start-1 col-end-2 mx-4 md:mr-10 md:mx-auto relative">
        {/* Línea vertical */}
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-[var(--primary-color)] opacity-30 pointer-events-none"></div>
        </div>

        {/* Círculo con logo */}
        <div className="w-16 h-16 md:w-24 md:h-24 absolute top-1/2 -mt-8 md:-mt-12 rounded-full bg-[#5B4FB9] opacity-90 shadow flex items-center justify-center">
          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
            <Image
              src={logo}
              alt={`${company} logo`}
              fill
              sizes="(max-width: 768px) 48px, 64px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Contenido de la tarjeta - Ajustado para móviles */}
      <div
        className={`border border-white border-opacity-15 col-start-2 col-end-5 p-4 md:p-6 rounded-lg my-4 md:my-6 w-full md:max-w-md shadow-md 
        ${isLeft ? "ml-4 md:ml-10" : "mr-4 md:mr-10"}`}
      >
        <h3 className="text-lg md:text-xl font-bold text-white break-words">
          {company}
        </h3>
        <h4 className="text-base md:text-lg font-semibold text-gray-300 break-words">
          {position}
        </h4>
        <p className="text-xs md:text-sm text-gray-400 mb-2">{period}</p>
        <p className="text-sm md:text-base text-gray-300 my-2">{description}</p>

        <div className="mt-3 md:mt-4">
          <h5 className="text-xs md:text-sm font-semibold text-gray-400 mb-2">
            Tecnologías utilizadas:
          </h5>
          <div className="flex flex-wrap gap-1 md:gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-gray-600 text-white px-2 py-1 rounded opacity-80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const TimelineExperience = () => {
  return (
    <div className="p-4 md:p-8 flex flex-col items-center">
      <div className="container">
        <TitleHeader title="Experiencia Laboral" />

        <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-5 mx-0 md:mx-10 pt-6 md:pt-10 text-white">
          <TimelineItem
            company="Byron Code"
            position="Frontend Developer"
            period="Noviembre 2024 - Presente"
            description="Actualmente, formo parte del equipo de Byron como Desarrollador Front-End, donde contribuyo al desarrollo de interfaces de usuario modernas, eficientes y centradas en la experiencia del usuario. Mi trabajo implica transformar diseños en aplicaciones funcionales, utilizando tecnologías como React, TypeScript, Material UI y siguiendo las mejores prácticas de la industria."
            technologies={["React", "TypeScript", "TailwindCSS", "Redux"]}
            logo="/work/byron.png"
            isLeft={true}
          />
          {/* <div className="col-span-1 md:col-span-5 flex justify-center items-center my-6 md:my-8">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--primary-color)] opacity-80 text-white font-semibold py-3 px-4 md:py-4 md:px-6 rounded-lg hover:bg-secondary-color transition duration-300 flex items-center gap-2"
            >
              <span>Ver CV completo</span>
              <i className="bx bx-download text-xl"></i>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TimelineExperience;
