import { ProjectsCards } from "./ProjectsCard";

export const HomeProjects = () => {
  return (
    <div className="p-8 flex flex-col items-center">
      <div className="w-full max-w-[1200px]">
        <header className="grid grid-cols-1 md:grid-cols-[20%_80%] items-center w-full mb-10">
          <div className="text-center md:text-left">
            <p className="text-white text-2xl font-fira-code font-semibold">
              <span className="text-[#C778DD]">#</span>Proyectos
            </p>
          </div>
          <div className="hidden md:block">
            <hr className="w-full border-[#C778DD] border-2" />
          </div>
        </header>
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
