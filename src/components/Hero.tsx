import Image from "next/image";
import { DownloadCV } from "./downloadCV";
import Link from "next/link";
import Avatar3D from "./Avatar3D";

export const Hero: React.FC = () => {
  return (
    <>
      <div className="flex justify-center mt-8 p-8">
        <div className="container md:w-[80%] mx-auto rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-white font-fira-code font-medium text-2xl md:text-3xl">
              <p>
                Desarrollador Web especialista en{" "}
                <span className="text-[#C778DD]">
                  React, TypeScript y Express.js
                </span>
                .
              </p>
              <p className="text-base md:text-lg mt-4 text-gray-400">
                Construyo experiencias digitales interactivas y de alto
                rendimiento, fusionando un código limpio con un diseño creativo.
              </p>
              <div className="flex flex-col md:flex-row gap-2 mt-4">
                <DownloadCV title="Contactame" link="/contact" cv={false} />
                <DownloadCV title="Descargar CV" link="/resume.pdf" cv={true} />
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Avatar3D />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
