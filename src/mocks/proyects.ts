import Iproyect from "../interface/proyect";

export const proyects: Iproyect[] = [
  {
    title: "OrdenApp",
    technologies: ["React", "TypeScript", "TailwindCSS", "Axios"],
    description:
      "OrdenApp es un sistema de gestión de software diseñado para optimizar la operación de restaurantes, bares y cafeterías. Con una interfaz intuitiva y completamente integrada, OrdenApp permite administrar órdenes, medios de pago, delivery, gestión de mesas, comanderas, impresoras térmicas y facturación, todo en un solo lugar.",
    img: "/projects/ordenapp.jpeg",
    // github: "https://github.com/devnotmax/pokedex",
    live: "https://ordenapp.byroncode.com/",
  },
  {
    title: "Http Invaders",
    technologies: ["TailwindCSS", "TypeScript", "Axios", "React"],
    description: "WebApp para consultas HTTP a APIs.",
    img: "/projects/http invaders.jpg",
    // live: "https://http-invader.vercel.app/",
    github: "https://github.com/devnotmax/http-invader",
  },
  {
    title: "Iturnito",
    technologies: [
      "NextJS",
      "TailwindCSS",
      "TypeScript",
      "Express",
      "postgreSQL",
    ],
    description:
      "Sistema de gestión de turnos. Creado como proyecto final del modulo 3 de la carrera de Programación fullstack en SoyHenry.",
    img: "/projects/iTurnito.png",
    github: "https://github.com/devnotmax/iTurnito",
  },
  {
    title: "Studify",
    technologies: ["Html", "Css", "JavaScript"],
    description: "Pomodoro App. Creada con html, css y javascript.",
    workingOn: true,
    img: "/projects/studify-app.jpg",
    github: "https://github.com/devnotmax/iTurnito",
    live: "https://studify.vercel.app/",
  },
];
