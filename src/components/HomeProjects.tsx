import { ProjectsCards } from "./ProjectsCard";
import TitleHeader from "../components/TitleHeader";

export const HomeProjects = () => {
  return (
    <div className="p-8 flex flex-col items-center">
      <div className="w-full max-w-[1200px]">
        <TitleHeader title="Proyectos" />


        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
          <ProjectsCards
            title="http invaders"
            technologies={["react", "typescript", "tailwind"]}
            description="WebApp para consultas HTTP a APIs."
            img="/projects/http invaders.jpg"
            live="www.pablito.com"
            github="github.com/devnotmax"
          />
          <ProjectsCards
            title="http invaders"
            technologies={["react", "typescript", "tailwind"]}
            description="WebApp para consultas HTTP a APIs."
            img="/projects/http invaders.jpg"
            live="www.pablito.com"
            github="github.com/devnotmax"
          />
          <ProjectsCards
            title="http invaders"
            technologies={["react", "typescript", "tailwind"]}
            description="WebApp para consultas HTTP a APIs."
            img="/projects/http invaders.jpg"
            live="www.pablito.com"
            github="github.com/devnotmax"
          />
        </section>
      </div>
    </div>
  );
};

export default HomeProjects;
