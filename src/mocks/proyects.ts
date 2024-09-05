import Iproyect from "../interface/proyect";

export const proyects: Iproyect[] = [
    {
        title: "Http Invaders",
        technologies: [ "TailwindCSS", "TypeScript", "Axios", "React" ],
        description: "WebApp para consultas HTTP a APIs.",
        img: "/projects/http invaders.jpg",
        live: "https://http-invader.vercel.app/",
        github: "https://github.com/devnotmax/http-invader",
    }, 
    {
        title: "Iturnito",
        technologies: ["NextJS", "TailwindCSS", "TypeScript", "Express", "postgreSQL"],
        description: "Sistema de gestión de turnos. Creado como proyecto final del modulo 3 de la carrera de Programación fullstack en SoyHenry.",
        img: "/projects/iTurnito.png",
        github: "https://github.com/devnotmax/iTurnito",
    },
    {
        title: "Studify",
        technologies: ["Html", "Css", "JavaScript"],
        description: "Pomodoro App. Creada con html, css y javascript.",
        img: "/projects/studify-app.jpg",
        github: "https://github.com/devnotmax/iTurnito",
        live: "https://studify.vercel.app/"
    }
    //Aqui puedes seguir agregando proyectos.
]