import { proyects } from "../../mocks/proyects";
import { CardProject } from "./CardProject";

const workspage = () => {
  return (
    <div className="container mx-auto p-8 grid grid-cols-1 gap-4">
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
  );
};

export default workspage;
