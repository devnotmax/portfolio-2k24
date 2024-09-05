import Image from "next/image";

export default interface Props {
  title: string;
  technologies: string[];
  description: string;
  img: string;
  live: string;
  github: string;
}

export const ProjectsCards = ({
  title,
  technologies,
  description,
  img,
  live,
  github,
}: Props) => {
  const tecnologias = technologies.join(" ");
  return (
    <div className="flex justify-center w-full mt-10">
      <div className="flex flex-col w-full max-w-xs h-auto">
        <div className="text-white font-fira-code font-medium min-h-[400px] flex flex-col items-center border-[1px] border-white">
          <div className="flex flex-col justify-center items-center">
            <Image src={img} alt="logo" width={330.58} height={201}></Image>
            <h4 className="p-4 border-t-[1px] border-b-[1px] border-white w-full justify-center items-center text-center">
              {tecnologias}
            </h4>
          </div>
          <div className="p-2 gap-1">
            <p className="text-xl">{title}</p>
            <p className="text-sm mt-2 text-gray-500">{description}</p>
          </div>
          <div className="flex mt-2 w-full p-6 justify-start gap-4">
            <button className="border-2 border-[#C778DD] p-2 text-sm hover:border-white hover:text-[#C778DD]">
              <a href={live}>
                Live <i className="bx bx-subdirectory-right"></i>
              </a>
            </button>
            <button className="border-2 border-white p-2 text-sm hover:border-white hover:text-[#C778DD]">
              <a href={github}>
                Github <i className="bx bx-expand-horizontal"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
