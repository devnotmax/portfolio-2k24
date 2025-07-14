import Iproyect from "../interface/proyect";

export const proyects: Iproyect[] = [
  {
    title: "OrdenApp",
    technologies: ["React", "TypeScript", "TailwindCSS", "Axios"],
    description:
      "OrdenApp es un sistema de gestión de software diseñado para optimizar la operación de restaurantes, bares y cafeterías. Con una interfaz intuitiva y completamente integrada, OrdenApp permite administrar órdenes, medios de pago, delivery, gestión de mesas, comanderas, impresoras térmicas y facturación, todo en un solo lugar.",
    img: "/projects/ordenapp.jpeg",
    live: "https://ordenapp.byroncode.com/",
    github: "",
    slug: "ordenapp",
    content: {
      overview:
        "OrdenApp es una solución integral para la gestión de establecimientos gastronómicos. El sistema está diseñado para optimizar todos los aspectos de la operación diaria, desde la toma de pedidos hasta la facturación final.",
      challenges: [
        "Implementar un sistema de gestión de mesas en tiempo real",
        "Integrar múltiples medios de pago",
        "Desarrollar un sistema de impresión térmica eficiente",
        "Crear una interfaz intuitiva para personal no técnico",
      ],
      solutions: [
        "Desarrollo de un sistema de estado en tiempo real usando WebSockets",
        "Integración con pasarelas de pago populares",
        "Implementación de un sistema de cola para impresoras",
        "Diseño de UI/UX enfocado en la usabilidad",
      ],
      features: [
        "Gestión de mesas y pedidos en tiempo real",
        "Sistema de delivery integrado",
        "Múltiples medios de pago",
        "Impresión térmica de tickets",
        "Panel de administración completo",
        "Reportes y estadísticas",
      ],
      images: [
        {
          url: "/projects/ordenapp.jpeg",
          alt: "Vista principal de OrdenApp",
        },
      ],
    },
  },
  {
    title: "BoolePad",
    technologies: ["React", "TypeScript", "TailwindCSS", "Axios", "Vite"],
    description:
      "Un editor de pseudocódigo moderno y minimalista, diseñado para ayudarte a escribir, estructurar y exportar tus algoritmos de forma clara y eficiente. Con autocompletado, snippets, y asistencia por IA, enfocate en la lógica y dejá que la herramienta se encargue del resto.",
    workingOn: false,
    img: "/projects/boolepad.png",
    github: "https://github.com/devnotmax/boolePad",
    live: "https://boole-pad.vercel.app/",
    slug: "boolepad",
  },
  {
    title: "Studify",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    description:
      "Studify es una aplicación web de productividad basada en la técnica Pomodoro, diseñada para ayudar a estudiantes y profesionales a mejorar su enfoque y gestión del tiempo. Permite configurar intervalos de estudio y descanso, con una interfaz moderna, minimalista y completamente responsive. Desarrollada con React, TypeScript y TailwindCSS, incorpora una experiencia de usuario fluida y atractiva.",
    workingOn: true,
    img: "/projects/studify-app.jpg",
    github: "https://github.com/devnotmax/studify",
    live: "https://studify.vercel.app/",
    slug: "studify",
  },
];
