"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import React from "react";
// 1. Importa el hook useRouter de next/navigation
import { useRouter } from "next/navigation";

export default interface Props {
  title: string;
  technologies: string[];
  description: string;
  subTitle?: string;
  img: string;
  live: string;
  github?: string;
  slug?: string;
  index?: number;
  hoveredCard?: number | null;
  setHoveredCard?: (idx: number | null) => void;
}

export const ProjectsCards = ({
  title,
  technologies,
  description,
  live,
  github,
  slug,
  index = 0,
  hoveredCard = null,
  setHoveredCard = () => {},
}: Props) => {
  // 2. Crea una instancia del router
  const router = useRouter();

  // 3. Define una función para manejar el clic en la tarjeta
  const handleCardClick = () => {
    if (slug) {
      router.push(`/works/${slug}`);
    }
  };

  // 4. Reemplazamos el <Link> que envolvía todo por un <div> con el evento onClick
  return (
    <div
      className={`
        relative group transition-all duration-300 ease-out h-full cursor-pointer
        hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10
        ${hoveredCard === index ? "ring-1 ring-purple-500/30" : ""}
      `}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={handleCardClick} // Aquí llamamos a la función de navegación
    >
      <Card
        className={`
          bg-transparent border-slate-700/50 backdrop-blur-sm
          hover:bg-slate-800/80 hover:border-purple-500/50
          min-h-[20rem] max-h-[20rem] h-[20rem] flex flex-col justify-between
        `}
      >
        {/* El resto del contenido de la card no cambia... */}
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <CardTitle className="text-white text-xl font-semibold group-hover:text-purple-300 transition-colors">
              {title}
            </CardTitle>
            <div className="w-2 h-2 bg-purple-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors mt-2">
            {description}
          </p>
        </CardHeader>
        <CardContent className="flex flex-col flex-1">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="...">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3 mt-auto pt-2">
            {live && (
              <Link
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
                // 5. El e.stopPropagation() es AÚN MÁS IMPORTANTE AHORA
                // Evita que el clic en el botón se "propague" al div padre y dispare la navegación de la tarjeta.
                onClick={(e) => e.stopPropagation()}
              >
                <Button size="sm" className="...">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </Link>
            )}
            {github && (
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Button size="sm" variant="outline" className="...">
                  <Github className="w-4 h-4" />
                </Button>
              </Link>
            )}
            {/* ... */}
          </div>
        </CardContent>
        <div className="absolute inset-0 ..."></div>
      </Card>
    </div>
  );
};
