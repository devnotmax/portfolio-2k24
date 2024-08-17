import projects from "../app/projects";
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
  return (
    <div className="flex w-full">
      <div className="flex justify-center items-center w-[330.58px] h-auto ">
        <div className="text-white font-fira-code font-medium min-h-[400px] flex flex-col items-center border-[1px] border-white">
          <div className="flex flex-col justify-center items-center">
            <Image src={img} alt="logo" width={330.58} height={201}></Image>
            <h4 className="p-4 border-t-[1px] border-b-[1px] border-white w-full justify-center items-center text-center">{technologies}</h4>
          </div>
          <p>{title}</p>
          <p>{description}</p>
          <div>
            <p>{live}</p>
            <p>{github}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
