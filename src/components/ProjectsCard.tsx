import Image from "next/image";
import Link from "next/link";

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
  live,
  github,
}: Props) => {
  return (
    <div className="flex flex-col w-full mt-10 border border-white border-opacity-15 rounded-xl h-full p-4">
      <div className="mb-2">
        <h2 className="text-2xl font-inter text-white font-bold">{title}</h2>
      </div>
      <div className="mb-4 h-20 overflow-hidden flex-shrink-0">
        <p className="text-gray-500 text-sm font-inter font-medium">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        {technologies.map((tec) => (
          <span
            key={tec}
            className="text-white bg-gray-600 bg-opacity-60 font-inter font-medium text-sm px-3 py-1 rounded-full"
          >
            {tec}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center gap-4 mt-auto">
        {live && (
          <Link href={live}>
            <button className="px-3 py-1 rounded-md bg-gray-400 flex justify-center items-center text-white gap-2 shadow-md bg-opacity-60 hover:bg-opacity-80 hover:bg-gray-300 transition duration-200 ease-in-out">
              <i className="bx bx-globe text-2xl"></i>
              <p className="text-base">Live Demo</p>
            </button>
          </Link>
        )}
        {github && (
          <Link href={github}>
            <button className="px-3 py-1 rounded-md bg-gray-400 flex justify-center items-center text-white gap-2 shadow-md bg-opacity-60 hover:bg-opacity-80 hover:bg-gray-300 transition duration-200 ease-in-out">
              <i className="bx bxl-github text-2xl"></i>
              <p className="text-base">GitHub</p>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
