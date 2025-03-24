import { WorkCard } from "./WorkCard";
import TitleHeader from "../components/TitleHeader";

export const WorkExperience = () => {
  return (
    <div className="p-8 flex flex-col items-center">
      <div className="container">
        <TitleHeader title="Experiencia Laboral" />

        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:flex-wrap md:gap-6 justify-center">
          <div className="w-full md:w-auto">
            <WorkCard
              company="Empresa Tech"
              position="Frontend Developer"
              period="Enero 2023 - Presente"
              description="Desarrollo de interfaces de usuario y componentes reutilizables para aplicaciones web. Implementación de diseños responsivos y optimización de rendimiento."
              technologies={["React", "TypeScript", "TailwindCSS", "Redux"]}
              logo="/work/company1-logo.png"
            />
          </div>

          <div className="w-full md:w-auto">
            <WorkCard
              company="Startup Innovadora"
              position="UI/UX Developer"
              period="Marzo 2021 - Diciembre 2022"
              description="Diseño y desarrollo de experiencias de usuario en aplicaciones SaaS. Colaboración con equipos de diseño y producto para implementar mejoras de UX."
              technologies={["HTML5", "CSS3", "JavaScript", "Figma", "SASS"]}
              logo="/work/company2-logo.png"
            />
          </div>

          <div className="w-full md:w-auto">
            <WorkCard
              company="Agencia Digital"
              position="Frontend Junior"
              period="Junio 2020 - Febrero 2021"
              description="Desarrollo de sitios web y landing pages para clientes diversos. Maquetación y estilizado de componentes web según diseños proporcionados."
              technologies={["HTML", "CSS", "JavaScript", "Bootstrap"]}
              logo="/work/company3-logo.png"
            />
          </div>

          <div className="w-full md:w-auto flex justify-center items-center">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--primary-color)] opacity-80 text-white font-semibold py-4 px-6 rounded-lg hover:bg-secondary-color transition duration-300 flex items-center gap-2"
            >
              <span>Ver CV completo</span>
              <i className="bx bx-download text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
