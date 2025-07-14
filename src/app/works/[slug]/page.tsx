import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Code,
  Zap,
  CheckCircle,
  AlertCircle,
  Lock,
} from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import fs from "fs";
import path from "path";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Cargar datos desde el JSON
  const filePath = path.join(process.cwd(), "public", "data", "projects.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const projectsData = JSON.parse(fileContents).projects;

  const project = projectsData.find((p: any) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen text-gray-100 bg-transparent">
      {/* Header */}
      <div className="top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/works"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a proyectos
            </Link>
            <div className="flex items-center gap-3">
              {!project.privateCode ? (
                <Button asChild variant="outline" size="sm">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Link>
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  disabled
                  className="flex items-center justify-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Código privado
                </Button>
              )}
              <Button asChild size="sm">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2 bg-transparent" />
                  Ver proyecto
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-md inline-block px-2">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent py-6">
                {project.title}
              </h1>
            </div>
            {project.workingOn && (
              <Badge
                variant="secondary"
                className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
              >
                <Zap className="w-3 h-3 mr-1" />
                En desarrollo
              </Badge>
            )}
          </div>

          <p className="text-xl text-gray-300 mb-6 max-w-3xl">
            {project.description}
          </p>

          {/* Project Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                Creado:{" "}
                {new Date(project.createdAt).toLocaleDateString("es-ES")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Duración: {project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Estado: {project.status}</span>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech: string) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-gray-700 text-gray-300"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl bg-transparent">
            <Image
              src={project.img || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="bg-transparent border-gray-800">
              <CardHeader className="bg-transparent">
                <CardTitle className="text-2xl text-gray-100">
                  Descripción general
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-transparent">
                <p className="text-gray-300 leading-relaxed">
                  {project.content.overview}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-transparent border-gray-800">
              <CardHeader className="bg-transparent">
                <CardTitle className="text-2xl text-gray-100">
                  Características principales
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-transparent">
                <div className="grid md:grid-cols-2 gap-3">
                  {project.content.features.map(
                    (feature: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-transparent border-gray-800">
                <CardHeader className="bg-transparent">
                  <CardTitle className="text-xl text-gray-100 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-400" />
                    Desafíos
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-transparent">
                  <ul className="space-y-3">
                    {project.content.challenges.map(
                      (challenge: string, index: number) => (
                        <li
                          key={index}
                          className="text-gray-300 text-sm leading-relaxed"
                        >
                          • {challenge}
                        </li>
                      )
                    )}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-transparent border-gray-800">
                <CardHeader className="bg-transparent">
                  <CardTitle className="text-xl text-gray-100 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Soluciones
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-transparent">
                  <ul className="space-y-3">
                    {project.content.solutions.map(
                      (solution: string, index: number) => (
                        <li
                          key={index}
                          className="text-gray-300 text-sm leading-relaxed"
                        >
                          • {solution}
                        </li>
                      )
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Gallery */}
            {project.content.images.length > 0 && (
              <Card className="bg-transparent border-gray-800">
                <CardHeader className="bg-transparent">
                  <CardTitle className="text-2xl text-gray-100">
                    Galería
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-transparent">
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.content.images.map(
                      (
                        image: string | { url: string; alt: string },
                        index: number
                      ) => (
                        <div
                          key={index}
                          className="relative rounded-lg overflow-hidden border border-gray-700"
                        >
                          <Image
                            src={typeof image === "string" ? image : image.url}
                            alt={
                              typeof image === "string"
                                ? `${project.title} screenshot ${index + 1}`
                                : image.alt
                            }
                            width={500}
                            height={300}
                            className="w-full h-auto hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Links */}
            <Card className="bg-transparent border-gray-800">
              <CardHeader className="bg-transparent">
                <CardTitle className="text-lg text-gray-100">Enlaces</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 bg-transparent">
                <Button asChild className="w-full flex" size="sm">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver proyecto en vivo
                  </Link>
                </Button>
                {!project.privateCode ? (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                    size="sm"
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Ver código fuente
                    </Link>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center"
                    size="sm"
                    disabled
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Código privado
                  </Button>
                )}
              </CardContent>
            </Card>



            {/* Technologies Detail */}
            <Card className="bg-transparent border-gray-800">
              <CardHeader className="bg-transparent">
                <CardTitle className="text-lg text-gray-100">
                  Tecnologías
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-transparent">
                <div className="space-y-2">
                  {project.technologies.map((tech: string) => (
                    <div
                      key={tech}
                      className="flex items-center justify-between p-2 rounded-md bg-gray-300/10 hover:bg-gray-300/20 transition-colors"
                    >
                      <span className="text-gray-300">{tech}</span>
                      <Badge variant="secondary" size="sm">
                        Core
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
