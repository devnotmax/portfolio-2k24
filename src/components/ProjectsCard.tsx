"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default interface Props {
  title: string;
  technologies: string[];
  description: string;
  subTitle?: string;
  img: string;
  live: string;
  github?: string;
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
  index = 0,
  hoveredCard = null,
  setHoveredCard = () => {},
}: Props) => {
  return (
    <div
      className={`
        relative group transition-all duration-300 ease-out cursor-pointer h-full
        hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10
        ${hoveredCard === index ? "ring-1 ring-purple-500/30" : ""}
      `}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <Card
        className={`
          bg-transparent border-slate-700/50 backdrop-blur-sm
          hover:bg-slate-800/80 hover:border-purple-500/50
          min-h-[20rem] max-h-[20rem] h-[20rem] flex flex-col justify-between
        `}
      >
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
              <Badge
                key={idx}
                variant="secondary"
                className="
                  bg-slate-700/50 text-slate-300 border-slate-600/50 text-xs
                  hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/30
                  transition-all duration-200
                "
              >
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
              >
                <Button
                  size="sm"
                  className="
                    w-full bg-purple-600 hover:bg-purple-700 text-white
                    transition-all duration-200 group-hover:bg-purple-500
                    hover:shadow-lg hover:shadow-purple-500/25
                    whitespace-nowrap
                  "
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </Link>
            )}
            {github ? (
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  variant="outline"
                  className="
                    border-slate-600 text-slate-300 hover:bg-slate-700
                    hover:text-white hover:border-slate-500
                    transition-all duration-200 bg-transparent
                    whitespace-nowrap"
                >
                  <Github className="w-4 h-4" />
                </Button>
              </Link>
            ) : (
              <Badge
                variant="secondary"
                className="bg-slate-700/50 text-slate-400 border-slate-600/50 text-xs px-3 py-1"
              >
                Código privado
              </Badge>
            )}
          </div>
        </CardContent>
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
      </Card>
    </div>
  );
};
