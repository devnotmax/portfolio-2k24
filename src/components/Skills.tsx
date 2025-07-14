"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import {
  Code,
  Database,
  Wrench,
  Layers,
  Award,
  Calendar,
  ExternalLink,
  Star,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import TitleHeader from "./TitleHeader";

interface Skill {
  name: string;
  level: number;
  experience: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

interface Certification {
  id: number;
  title: string;
  institution: string;
  description: string;
  date: string;
  status: string;
  credentialId: string;
  skills: string[];
  url: string;
}

interface SkillsData {
  skillCategories: Record<string, SkillCategory>;
  certifications: Certification[];
  summary: {
    technologies: number;
    experience: string;
    projects: number;
    certifications: number;
  };
}

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("languages");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [skillsData, setSkillsData] = useState<SkillsData | null>(null);
  const [showAllCerts, setShowAllCerts] = useState(false); // Nuevo estado

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const response = await fetch("/data/skills.json");
        const data = await response.json();
        setSkillsData(data);
      } catch (error) {
        console.error("Error loading skills data:", error);
      }
    };

    fetchSkillsData();
  }, []);

  if (!skillsData) {
    return (
      <div className="flex justify-center items-center mt-20">
        <div className="text-white">Cargando habilidades...</div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    return status === "Completado"
      ? "bg-green-500/20 text-green-400 border-green-500/30"
      : "bg-purple-500/20 text-purple-400 border-purple-500/30";
  };

  const getCategoryColor = (color: string) => {
    const colors = {
      purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30",
      green: "from-green-500/20 to-green-600/20 border-green-500/30",
      blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
      orange: "from-orange-500/20 to-orange-600/20 border-orange-500/30",
      yellow: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30",
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  const getIconComponent = (iconName: string) => {
    const icons = {
      Code,
      Database,
      Wrench,
      Layers,
      Star,
    };
    return icons[iconName as keyof typeof icons] || Code;
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="container mx-auto px-4">
        <div className="text-white font-fira-code font-semibold text-2xl">
          <TitleHeader title="Habilidades" />

          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            {/* Skills Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <Code className="w-5 h-5 text-[#C778DD]" />
                <h3 className="text-white text-xl font-semibold">
                  Habilidades Técnicas
                </h3>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(skillsData.skillCategories).map(
                  ([key, category]) => {
                    const IconComponent = getIconComponent(category.icon);
                    return (
                      <Button
                        key={key}
                        variant={activeCategory === key ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveCategory(key)}
                        className={`
                        transition-all duration-300
                        ${
                          activeCategory === key
                            ? "bg-[#C778DD] hover:bg-[#C778DD]/80 text-white"
                            : "border-white/20 text-white hover:bg-white/10 bg-transparent"
                        }
                      `}
                      >
                        <IconComponent className="w-4 h-4 mr-2" />
                        {category.title}
                      </Button>
                    );
                  }
                )}
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {skillsData.skillCategories[activeCategory].skills.map(
                  (skill) => (
                    <div
                      key={skill.name}
                      className={`
                      rounded-xl border border-gray-800 shadow-lg bg-gradient-to-br ${getCategoryColor(
                        skillsData.skillCategories[activeCategory].color
                      )}
                      backdrop-blur-sm transition-all duration-300 cursor-pointer
                      hover:shadow-lg hover:shadow-[#C778DD]/10 hover:-translate-y-1
                      ${
                        hoveredSkill === skill.name
                          ? "ring-1 ring-[#C778DD]/50"
                          : ""
                      }
                    `}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                              {skill.icon.startsWith("/") ? (
                                <img
                                  src={skill.icon}
                                  alt={skill.name}
                                  className="w-5 h-5 object-contain"
                                />
                              ) : (
                                <span className="text-sm">{skill.icon}</span>
                              )}
                            </div>
                            <div>
                              <h4 className="text-white font-medium">
                                {skill.name}
                              </h4>
                              <p className="text-white/60 text-xs">
                                {skill.experience}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white text-sm font-medium">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-[#C778DD]" />
                <h3 className="text-white text-xl font-semibold">
                  Certificaciones
                </h3>
              </div>

              <div className="space-y-4">
                {(showAllCerts
                  ? skillsData.certifications
                  : skillsData.certifications.slice(0, 2)
                ).map((cert) => (
                  <Card
                    key={cert.id}
                    className="bg-white/5 border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-[#C778DD]/30"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-white text-sm font-semibold mb-1">
                            {cert.title}
                          </CardTitle>
                          <p className="text-[#C778DD] text-sm font-medium mb-1">
                            {cert.institution}
                          </p>
                          <p className="text-white/60 text-xs mb-2">
                            {cert.description}
                          </p>
                        </div>
                        <div className="flex flex-col items-start ml-2">
                          <Badge
                            className={`text-xs ${getStatusColor(cert.status)}`}
                          >
                            {cert.status === "Completado" ? (
                              <CheckCircle className="w-3 h-3 mr-1" />
                            ) : null}
                            {cert.status}
                          </Badge>
                          {cert.title === "Programador Universitario" && (
                            <img
                              src="/logo unt.jpg"
                              alt="Logo UNT"
                              style={{
                                width: 40,
                                borderRadius: 8,
                                marginTop: 8,
                              }}
                              className="block"
                            />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center gap-4 text-xs text-white/40 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {cert.date}
                        </div>
                        <div className="text-white/30">
                          ID: {cert.credentialId}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="text-xs bg-white/10 text-white/70 border-white/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      {cert.url && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-white/20 text-white/70 hover:bg-white/10 hover:text-white bg-transparent text-xs"
                          onClick={() => window.open(cert.url, "_blank")}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Ver Certificado
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
                {skillsData.certifications.length > 2 && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-white/20 text-white/70 hover:bg-white/10 hover:text-white bg-transparent text-xs mt-2"
                    onClick={() => setShowAllCerts((prev) => !prev)}
                  >
                    {showAllCerts ? "Ver menos" : "Ver todas"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
