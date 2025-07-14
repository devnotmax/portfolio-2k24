"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Calendar,
  MapPin,
  ExternalLink,
  Briefcase,
  Code,
  Trophy,
} from "lucide-react";
import TitleHeader from "./TitleHeader";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  status: string;
  description: string;
  technologies: string[];
  achievements: string[];
  color: string;
}

export default function Component() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [activeExperience, setActiveExperience] = useState<number>(0);

  useEffect(() => {
    fetch("/data/experiences.json")
      .then((res) => res.json())
      .then((data: Experience[]) => setExperiences(data));
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actual":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Completado":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    }
  };

  const getTimelineColor = (index: number, isActive: boolean) => {
    if (isActive) return "bg-purple-500 shadow-lg shadow-purple-500/50";
    if (index <= activeExperience) return "bg-purple-400";
    return "bg-slate-600";
  };

  if (experiences.length === 0)
    return <div className="text-white p-8">Cargando experiencia...</div>;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <TitleHeader title="Experiencia" />
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Timeline Navigation */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-purple-400" />
                Mi Trayectoria Profesional
              </h3>
              <div className="relative">
                <div className="grid grid-cols-[40px_1fr] relative">
                  {/* Línea vertical absoluta */}
                  <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-slate-700 z-0" />
                  <div className="flex flex-col gap-0 col-span-2">
                    {experiences.map((exp: Experience, index: number) => (
                      <div
                        key={exp.id}
                        className={`group transition-all duration-300 p-0 rounded-lg ${
                          activeExperience === index
                            ? "bg-slate-800/30"
                            : "hover:bg-slate-800/20"
                        }`}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "40px 1fr",
                        }}
                        onClick={() => setActiveExperience(index)}
                      >
                        {/* Dot perfectamente alineado */}
                        <div className="relative flex flex-col items-center z-10 py-8">
                          <div
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${getTimelineColor(
                              index,
                              activeExperience === index
                            )}`}
                            style={{
                              border: "2px solid #312e81",
                              backgroundClip: "padding-box",
                              position: "relative",
                            }}
                          >
                            {activeExperience === index && (
                              <div className="absolute w-4 h-4 rounded-full bg-purple-500 animate-ping opacity-75 top-0 left-0"></div>
                            )}
                          </div>
                          {/* Línea de conexión entre dots */}
                          {index !== experiences.length - 1 && (
                            <div
                              className="w-0.5 flex-1 bg-slate-700"
                              style={{ minHeight: "32px" }}
                            ></div>
                          )}
                        </div>
                        {/* Contenido */}
                        <div className="flex-1 p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h4
                              className={`font-semibold text-lg transition-all duration-300 ${
                                activeExperience === index
                                  ? "text-white"
                                  : "text-slate-300 group-hover:text-white"
                              }`}
                            >
                              {exp.company}
                            </h4>
                            <Badge
                              className={`text-xs ml-2 ${getStatusColor(
                                exp.status
                              )}`}
                            >
                              {exp.status}
                            </Badge>
                          </div>
                          <p
                            className={`font-medium mb-1 transition-all duration-300 ${
                              activeExperience === index
                                ? "text-purple-300"
                                : "text-slate-400 group-hover:text-purple-400"
                            }`}
                          >
                            {exp.role}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                          {/* Descripción resumida en el timeline */}
                          <p
                            className={`text-sm leading-relaxed transition-all duration-300 ${
                              activeExperience === index
                                ? "text-slate-300"
                                : "text-slate-500 group-hover:text-slate-400"
                            }`}
                          >
                            {exp.description.substring(0, 120)}...
                          </p>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {exp.technologies
                              .slice(0, 3)
                              .map((tech: string, techIndex: number) => (
                                <Badge
                                  key={techIndex}
                                  variant="secondary"
                                  className="text-xs bg-slate-700/30 text-slate-400 border-slate-600/30"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            {exp.technologies.length > 3 && (
                              <Badge
                                variant="secondary"
                                className="text-xs bg-slate-700/30 text-slate-400 border-slate-600/30"
                              >
                                +{exp.technologies.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Experience Details */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm transition-all duration-500">
              <CardContent className="p-6">
                {/* Header Compacto */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">
                      {experiences[activeExperience].company}
                    </h3>
                    <Badge
                      className={`text-xs ${getStatusColor(
                        experiences[activeExperience].status
                      )}`}
                    >
                      {experiences[activeExperience].status}
                    </Badge>
                  </div>
                  <p className="text-purple-300 font-medium text-sm mb-2">
                    {experiences[activeExperience].role}
                  </p>
                  <div className="flex flex-col gap-1 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {experiences[activeExperience].period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {experiences[activeExperience].location}
                    </div>
                  </div>
                </div>
                {/* Description Compacta */}
                <div className="mb-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {experiences[activeExperience].description}
                  </p>
                </div>
                {/* Achievements Compactos */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-1 text-sm">
                    <Trophy className="w-4 h-4 text-purple-400" />
                    Logros
                  </h4>
                  <div className="space-y-2">
                    {experiences[activeExperience].achievements
                      .slice(0, 2)
                      .map((achievement: string, index: number) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <p className="text-slate-300 text-xs leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    {experiences[activeExperience].achievements.length > 2 && (
                      <p className="text-purple-400 text-xs">
                        +{experiences[activeExperience].achievements.length - 2}{" "}
                        más...
                      </p>
                    )}
                  </div>
                </div>
                {/* Technologies Compactas */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-1 text-sm">
                    <Code className="w-4 h-4 text-purple-400" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {experiences[activeExperience].technologies.map(
                      (tech: string, index: number) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-xs px-2 py-0.5 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/30 transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Progress Indicator */}
            <div className="mt-6 flex justify-center">
              <div className="flex gap-2">
                {experiences.map((_, index: number) => (
                  <button
                    key={index}
                    onClick={() => setActiveExperience(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeExperience
                        ? "bg-purple-500 w-8"
                        : "bg-slate-600 hover:bg-slate-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const TimelineExperience = Component;
