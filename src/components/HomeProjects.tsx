//View all reemplazar por Links
import { ProjectsCards } from "./ProjectsCard";

export const HomeProjects = () => {
  return (
    <div className="p-8 flex justify-center items-center">
      <div className="flex justify-center w-[80%] h-auto">
        <div className="min-h-[300px] w-full">
          <header className="grid grid-cols-[10%_60%_30%] justify-center items-center w-full">
            <div className="text-white text-2xl font-fira-code font-semibold m-auto">
              <h4>
                <span className="text-[#C778DD]">#</span>Proyectos
              </h4>
            </div>
            <div className="bg-white min-w-[80%] m-auto">
              <hr className="w-full border-[#C778DD] border-2" />
            </div>
            <div className="m-auto text-white font-semibold font-fira-code">
              <p>
                View All <i className="bx bxs-chevrons-right"></i>
              </p>
            </div>
          </header>
          <section className="grid grid-cols-3 gap-3 justify-center items-center">
            <ProjectsCards
              title="http invaders"
              technologies={["react", "typescript", "tailwind"]}
              description="WebApp que hace consultas a apis por http"
              img="/projects/http invaders.jpg"
              live="www.pablito.com"
              github="github.com/devnotmax"
            ></ProjectsCards>
            <ProjectsCards
              title="http invaders"
              technologies={["react", "typescript", "tailwind"]}
              description="WebApp que hace consultas a apis por http"
              img="/projects/http invaders.jpg"
              live="www.pablito.com"
              github="github.com/devnotmax"
            ></ProjectsCards>
            <ProjectsCards
              title="http invaders"
              technologies={["react", "typescript", "tailwind"]}
              description="WebApp que hace consultas a apis por http"
              img="/projects/http invaders.jpg"
              live="www.pablito.com"
              github="github.com/devnotmax"
            ></ProjectsCards>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
