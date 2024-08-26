import { DownloadCV } from "./downloadCV";
import Image from "next/image";

export const AboutMe = () => {
    return (
        <div className="mt-28">
            <div className="flex justify-center items-center mt-20">
                <div className="p-6 flex justify-center w-[90%] lg:w-[80%] h-auto">
                    <div className="text-white font-fira-code font-semibold text-lg lg:text-2xl min-h-[300px] w-full">
                        {/* <header className="flex items-center justify-center w-full">
                            <div className="text-center">
                                <p className="text-center text-2xl">
                                    <span className="text-[#C778DD] text-2xl">#</span>Sobre mí
                                </p>
                                <hr className="hidden lg:block w-full border-[#C778DD] border-2 mt-2 mx-auto" />
                            </div>
                        </header> */}
                         <header className="grid grid-cols-1 md:grid-cols-[20%_80%] items-center w-full mb-10">
                        <div className="text-center md:text-left flex justify-center md:justify-start">
                            <p className="text-white text-2xl font-fira-code font-semibold">
                                <span className="text-[#C778DD]">#</span>Sobre mi
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <hr className="w-full border-[#C778DD] border-2" />
                        </div>
                    </header>
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8 h-auto lg:h-[700px]">
                            <div className="w-full">
                                <Image
                                    src="/develop.jpeg"
                                    alt="profile"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                            <div className="w-full text-[1rem] lg:text-[1.20rem]">
                                <span className="text-[#C778DD]">¡Soy Maximiliano!</span>
                                <p>
                                    <span className="text-[#C778DD]">Desarrollador Front-End</span> y especializado en el stack{" "}
                                    <span className="text-[#C778DD]">
                                        MERN (MongoDB, Express, React, Node.js)
                                    </span>{" "}
                                    con sede en Argentina 🇦🇷 San Miguel de Tucumán📍.
                                </p>
                                <br />
                                <p>
                                    Proactivo y orientado a resolver problemas, me apasiona la naturaleza 🌿, el mate 🧉, los animales 🐾 y las buenas conversaciones 💬. Busco oportunidades para aprender y crecer en desarrollo de software 💻, contribuyendo a proyectos innovadores 🚀 en un entorno dinámico. ¡Conectemos! 🤝 Estoy listo para colaborar y aprender con otros apasionados por la tecnología.
                                </p>
                                <div className="flex gap-4 flex-wrap">
                                    <DownloadCV />
                                    <button className="border-2 border-[#C778DD] p-2 text-sm hover:border-white hover:text-[#C778DD]">
                                    <a href="#contact">Ver más!!</a>
                                    {/* Cambiar luego por Links */}
                                </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
