import { ProjectsCards } from "./ProjectsCard";
import TitleHeader from "../components/TitleHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const HomeProjects = () => {
  return (
    <div className="px-4 py-6 md:p-8 flex flex-col items-center w-full">
      <div className="container max-w-7xl mx-auto">
        <TitleHeader
          title="Proyectos"
          action={
            <Link href="/works">
              <ArrowRight className="text-[#C778DD] hover:text-white transition-colors w-6 h-6" />
            </Link>
          }
        />

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 justify-items-center">
          <ProjectsCards
            title="Studify"
            technologies={["React", "TypeScript", "TailwindCSS"]}
            description="App web de productividad basada en la técnica Pomodoro. Permite gestionar tiempos de estudio y descanso con una interfaz moderna, minimalista y responsive."
            img="/projects/studify-app.jpg"
            live="https://studify.vercel.app/"
            github="https://github.com/devnotmax/studify"
          />
          <ProjectsCards
            title="Ordenapp"
            technologies={["React", "Typescript", "Material UI"]}
            description="App de gestión de pedidos para restaurantes. Permite tomar, modificar y visualizar órdenes en tiempo real."
            img="/projects/ordenapp.jpeg"
            live="https://ordenapp.byroncode.com/"
          />
          <ProjectsCards
            title="Boolepad"
            technologies={["React", "Typescript", "TailwindCSS"]}
            description="editor de pseudocódigo moderno y minimalista, diseñado para ayudarte a escribir, estructurar y exportar tus algoritmos de forma clara y eficiente."
            img="/projects/ordenapp.jpeg"
            live="https://boole-pad.vercel.app/"
            github="https://github.com/devnotmax/boolePad"
          />
        </section>
      </div>
    </div>
  );
};

export default HomeProjects;
