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
            <span className="text-[#C778DD]">¡Hola! Soy Maximiliano,</span><br />
            Desarrollador Front-End enfocado en <span className="text-[#C778DD]">React</span> y <span className="text-[#C778DD]">TypeScript</span>, con base en San Miguel de Tucumán, Argentina 🇦🇷.
          </p>
          <p>
            Me apasiona construir interfaces modernas, accesibles y bien estructuradas utilizando tecnologías como <span className="text-[#C778DD]">React</span>, <span className="text-[#C778DD]">Next.js</span>, <span className="text-[#C778DD]">Tailwind CSS</span> y <span className="text-[#C778DD]">Redux</span>.
          </p>
          <p>
            Soy una persona proactiva, con mentalidad de crecimiento, a quien le encanta resolver problemas y trabajar en equipo. Amante de la naturaleza 🌿, el mate 🧉, los animales 🐾 y las buenas conversaciones 💬, valoro los entornos colaborativos donde se aprende y se construye en conjunto.
          </p>
          <p>
            ✨ Siempre estoy abierto a nuevos desafíos, a sumar valor en proyectos dinámicos 🚀 y a seguir creciendo como profesional.
          </p>
          <p>
            ¡Conectemos! 🤝
          </p>
          <div className="flex gap-4 flex-wrap">
            <DownloadCV title="Descargar CV" link="/Resume.pdf" cv={true} />
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
