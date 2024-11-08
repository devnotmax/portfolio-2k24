import { ProjectsCards } from "./ProjectsCard";
import TitleHeader from "../components/TitleHeader";

export const HomeProjects = () => {
  return (
    <div className="p-8 flex flex-col items-center">
      <div className="container">
        <TitleHeader title="Proyectos" />
        <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
          <ProjectsCards
            title="Http invaders"
            technologies={["react", "typescript", "tailwind"]}
            description="WebApp para consultas HTTP a APIs."
            img="/projects/http invaders.jpg"
            live="https://http-invader.vercel.app/"
            github="https://github.com/devnotmax/http-invader"
          />
          <ProjectsCards
            title="Iturnito"
            technologies={["NextJS", "TailwindCSS", "TypeScript", "Express", "postgreSQL"]}
            description="Sistema de gestión de turnos. Creado como proyecto final del modulo 3 de la carrera de Programación fullstack en SoyHenry."
            img="/projects/iTurnito.png"
            live="https://github.com/devnotmax/iTurnito"
            github="https://github.com/devnotmax/iTurnito"
          />
          <ProjectsCards
            title="Studify"
            technologies={["Html", "Css", "Javascript"]}
            description="Pomodoro App. Creada con html, css y javascript."
            img="/projects/studify-app.jpg"
            live="www.pablito.com"
            github="github.com/devnotmax"
          />
          <button className="opacity-80 text-white font-semibold py-2 px-4 rounded-lg hover:bg-secondary-color transition duration-300 justify-center items-center flex">
            <i className='bx bx-chevrons-right text-xl bg-[var(--primary-color)] p-4 rounded-xl opacity-55'></i>
          </button>
        </section>
      </div>

    </div>
  );
};

export default HomeProjects;