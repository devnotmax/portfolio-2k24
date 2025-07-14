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
import TitleHeader from "../components/TitleHeader";

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

export const WorkExperience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [activeExperience, setActiveExperience] = useState(0);

  useEffect(() => {
    fetch("/data/experiences.json")
      .then((res) => res.json())
      .then((data) => setExperiences(data));
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
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <TitleHeader title="Experiencia Laboral" />
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Timeline Navigation */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-purple-400" />
                Mi Trayectoria Profesional
              </h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700"></div>
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`
                      relative flex items-start gap-6 pb-8 cursor-pointer group
                      transition-all duration-300 p-4 rounded-lg
                      ${
                        activeExperience === index
                          ? "bg-slate-800/30"
                          : "hover:bg-slate-800/20"
                      }
                    `}
                    onClick={() => setActiveExperience(index)}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`
                        relative z-10 w-4 h-4 rounded-full transition-all duration-300 flex-shrink-0 mt-1
                        ${getTimelineColor(index, activeExperience === index)}
                      `}
                    >
                      {activeExperience === index && (
                        <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-75"></div>
                      )}
                    </div>
                    {/* Timeline Content */}
                    <div className="flex-1">
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
                        {exp.technologies.slice(0, 3).map((tech, techIndex) => (
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
                {/* Description Completa */}
                <div className="mb-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {experiences[activeExperience].description} asdada
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
                      .map((achievement, index) => (
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
                      (tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="
                          bg-slate-700/50 text-slate-300 border-slate-600/50 text-xs px-2 py-0.5
                          hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/30
                          transition-all duration-200 cursor-default
                        "
                        >
                          {tech}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
                {/* Action Button Compacto */}
                <div className="pt-3 border-t border-slate-700/50">
                  <Button
                    size="sm"
                    className="
                      w-full bg-purple-600 hover:bg-purple-700 text-white text-xs
                      transition-all duration-200
                      hover:shadow-lg hover:shadow-purple-500/25
                    "
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Ver Más
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* Progress Indicator */}
            <div className="mt-6 flex justify-center">
              <div className="flex gap-2">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveExperience(index)}
                    className={`
                      w-2 h-2 rounded-full transition-all duration-300
                      ${
                        index === activeExperience
                          ? "bg-purple-500 w-8"
                          : "bg-slate-600 hover:bg-slate-500"
                      }
                    `}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
