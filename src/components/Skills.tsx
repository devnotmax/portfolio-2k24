import Image from "next/image";
import TitleHeader from "./TitleHeader";

export const Skills = () => {
    return (
        <div className="flex justify-center items-center mt-20"> {/* Ajuste de margen inferior */}
            <div className="container mx-auto px-4"> {/* Asegura que el contenido esté centrado y no se salga */}
                <div className="text-white font-fira-code font-semibold text-2xl">
                    <TitleHeader title="Habilidades" />
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Column for Certifications */}
                        <div className="w-full">
                            <h4 className="mb-6 underline">
                                <span className="text-[#C778DD]">#</span>
                                Certificaciones
                            </h4>
                            <ul className="list-disc pl-6 space-y-6">
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://www.itmaster.app/certificates?id=ITMAP402023WFGUKVAFMPEAIKA"
                                    >
                                        <span className="text-[#C778DD] hover:underline">
                                            Argentina Programa 4.0 (IT Master Academy)
                                        </span>{" "}
                                        - HTML y CSS
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://www.itmaster.app/certificates?id=ITMAP402023LIUZKGTWDAPQSNF"
                                    >
                                        <span className="text-[#C778DD] hover:underline">
                                            Argentina Programa 4.0 (IT Master Academy)
                                        </span>{" "}
                                        - Programación Front-End
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://media.licdn.com/dms/image/v2/C4D22AQFuhNk89VXCRQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1654370714186?e=1726704000&v=beta&t=lHcVovAQFEH6pwCmtBiu98Kib0ZlIK9mIneau2H9oCU"
                                    >
                                        <span className="text-[#C778DD] hover:underline">
                                            Coderhouse
                                        </span>{" "}
                                        - Introducción al desarrollo Web
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="_blank">
                                        <span className="text-[#C778DD] hover:underline">
                                            SoyHenry
                                        </span>{" "}
                                        - Programación Full Stack -{" "}
                                        <span className="text-green-400">
                                            En curso
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column for Skills */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Skill Categories */}
                            <div className="flex flex-col">
                                <article className="border-[1px] border-white flex-1 flex flex-col">
                                    <h4 className="border-b-[1px] border-white py-2 text-center">
                                        Lenguajes
                                    </h4>
                                    <div className="flex flex-wrap gap-2 p-4">
                                        <Image
                                            src="/typescript.svg"
                                            alt="TypeScript"
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/javascript.svg"
                                            alt="JavaScript"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                </article>
                            </div>
                            <div className="flex flex-col">
                                <article className="border-[1px] border-white flex-1 flex flex-col">
                                    <h4 className="border-b-[1px] border-white py-2 text-center">
                                        Databases
                                    </h4>
                                    <div className="flex flex-wrap gap-2 p-4">
                                        <Image
                                            src="/mongodb.svg"
                                            alt="MongoDB"
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/postgres.svg"
                                            alt="PostgreSQL"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                </article>
                            </div>
                            <div className="flex flex-col">
                                <article className="border-[1px] border-white flex-1 flex flex-col">
                                    <h4 className="border-b-[1px] border-white py-2 text-center">
                                        Tools
                                    </h4>
                                    <div className="flex flex-wrap gap-2 p-4">
                                        <Image
                                            src="/figma.svg"
                                            alt="Figma"
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/vscode.svg"
                                            alt="VSCode"
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/git.svg"
                                            alt="Git"
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/node.svg"
                                            alt="Node.js"
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/vim.svg"
                                            alt="Vim"
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/redux.svg"
                                            alt="Redux"
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/tailwindcss.svg"
                                            alt="Tailwind CSS"
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/sass.svg"
                                            alt="Sass"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                </article>
                            </div>
                            <div className="flex flex-col">
                                <article className="border-[1px] border-white flex-1 flex flex-col">
                                    <h4 className="border-b-[1px] border-white py-2 text-center">
                                        Frameworks
                                    </h4>
                                    <div className="flex flex-wrap gap-2 p-4">
                                        <Image
                                            src="/react.svg"
                                            alt="React"
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/angular.svg"
                                            alt="Angular"
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/next-js.svg"
                                            alt="Next.js"
                                            width={30}
                                            height={30}
                                        />
                                        <p className="text-center text-lg font-fira-code">
                                            Express
                                        </p>
                                    </div>
                                </article>
                            </div>
                            <div className="flex flex-col">
                                <article className="border-[1px] border-white flex-1 flex flex-col">
                                    <h4 className="border-b-[1px] border-white py-2 text-center">
                                        Others
                                    </h4>
                                    <div className="flex flex-wrap gap-2 p-4">
                                        <Image
                                            src="/css.svg"
                                            alt="CSS"
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/html.svg"
                                            alt="HTML"
                                            width={30}
                                            height={30}
                                        />
                                        <p className="text-center text-lg font-fira-code">
                                            TypeORM
                                        </p>
                                        <p className="text-center text-lg font-fira-code">
                                            Scrum methodology
                                        </p>
                                        <p className="text-center text-lg font-fira-code">
                                            MERN Schema
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Skills;
