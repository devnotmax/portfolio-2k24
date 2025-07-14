"use client";

import type { Iproyect } from "../../interface/proyect";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useRouter } from "next/navigation";

interface CardProjectProps {
  title: string;
  technologies: string[];
  description: string;
  workingOn?: boolean;
  img: string;
  live: string;
  github: string;
  slug: string;
}

export const CardProject: React.FC<CardProjectProps> = ({
  title,
  technologies,
  description,
  img,
  workingOn = false,
  live,
  github,
  slug,
}: Iproyect) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    // Si el clic fue en un botón, no navegar
    if ((e.target as HTMLElement).closest("a")) {
      return;
    }
    router.push(`/works/${slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="overflow-hidden rounded-xl border border-zinc-800 bg-[#1a1d21] shadow-lg transition-all hover:shadow-[#C778DD]/10 flex flex-col h-full cursor-pointer"
    >
      {/* Imagen tipo banner */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={img || "/placeholder.svg"}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d21] via-transparent to-transparent opacity-70"></div>

        {/* Indicador (sobre imagen) */}
        <div className="absolute bottom-0 left-0 w-full p-3">
          <div className="mb-1 flex items-center gap-2">
            {!workingOn ? (
              <>
                <span className="h-2 w-2 rounded-full bg-[#4ade80]"></span>
                <span className="font-mono text-xs text-[#4ade80]">
                  {title}
                </span>
              </>
            ) : (
              <>
                <span
                  className="h-2 w-2 rounded-full bg-gray-400 animate-blink"
                  title="En mantenimiento"
                ></span>
                <span className="font-mono text-xs text-gray-400">
                  En mantenimiento
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col p-4 md:p-6">
        <h2 className="mb-3 font-inter text-xl font-bold text-white md:text-2xl">
          {title}
        </h2>

        {/* Tecnologías */}
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-zinc-700 bg-[#111315] px-2 py-1 font-mono text-xs text-[#C778DD]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mb-4 flex-shrink-0 overflow-hidden">
          <p className="font-inter text-xs font-medium text-zinc-400 md:text-sm">
            {description}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-2 sm:flex-row">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md border border-zinc-700 bg-[#111315] px-3 py-2 text-white transition duration-200 hover:border-[#4ade80] hover:text-[#4ade80] sm:w-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
              <span className="text-sm md:text-base">Live Demo</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md border border-zinc-700 bg-[#111315] px-3 py-2 text-white transition duration-200 hover:border-[#4ade80] hover:text-[#4ade80] sm:w-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-4 w-4" />
              <span className="text-sm md:text-base">GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
