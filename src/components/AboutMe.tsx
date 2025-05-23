import { DownloadCV } from "./downloadCV";
import Image from "next/image";
import TitleHeader from "./TitleHeader";

export const AboutMe = () => (
  <div className="mt-28 flex justify-center items-center">
    <div className="container w-full mt-10 max-w-[1200px] text-white font-fira-code font-semibold text-lg lg:text-2xl">
      <TitleHeader title="Sobre mi" />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
        <div className="container p-8">
          <Image
            src="/profile-pic.jpg"
            alt="profile"
            width={600}
            height={600}
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="text-[1rem] lg:text-[1.20rem] space-y-4 p-8">
          <p>
            <span className="text-[#C778DD]">¡Soy Maximiliano!</span> <br />
            <span className="text-[#C778DD]">Desarrollador Front-End</span>{" "}
            especializado en el stack{" "}
            <span className="text-[#C778DD]">
              MERN (MongoDB, Express, React, Node.js)
            </span>{" "}
            con sede en Argentina 🇦🇷 San Miguel de Tucumán📍.
          </p>
          <p>
            Proactivo y orientado a resolver problemas, me apasiona la
            naturaleza 🌿, el mate 🧉, los animales 🐾 y las buenas
            conversaciones 💬. Busco oportunidades para aprender y crecer en
            desarrollo de software 💻, contribuyendo a proyectos innovadores 🚀
            en un entorno dinámico. ¡Conectemos! 🤝 Estoy listo para colaborar y
            aprender con otros apasionados por la tecnología.
          </p>
          <div className="flex gap-4 flex-wrap">
            <DownloadCV />
            <a
              href="#contact"
              className="border-2 border-[#C778DD] p-2 text-sm hover:border-white hover:text-[#C778DD]"
            >
              Ver más!!
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default AboutMe;
