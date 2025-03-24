import { proyects } from "../../mocks/proyects";
import { CardProject } from "./CardProject";
import { TitleHeader } from "../../components/TitleHeader";

const WorksPage = () => {
  return (
    <div className="px-4 py-6 md:p-8">
      <div className="container mx-auto max-w-6xl">
        <TitleHeader title="Proyectos" />
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {proyects.map((proyect) => (
            <CardProject
              key={proyect.title}
              title={proyect.title}
              technologies={proyect.technologies}
              description={proyect.description}
              img={proyect.img}
              live={proyect.live}
              github={proyect.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
