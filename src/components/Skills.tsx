import Image from "next/image";
import TitleHeader from "./TitleHeader";

export const Skills = () => {
    return (
        <div className="flex justify-center items-center mt-20 mb-96"> {/* Aumentar margin-bottom */}
            <div className="flex justify-center h-auto">
                <div className="text-white font-fira-code font-semibold text-2xl min-h-[300px] w-full max-w-[1200px]">
                    <TitleHeader title="Habilidades" ></TitleHeader>
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto">
                        <div className="w-full mb-10 md:mb-0">
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
                                            Argentina Programa 4.0 (IT Master
                                            Academy)
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
                                            Argentina Programa 4.0 (IT Master
                                            Academy)
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
                                        <span className="text-[#C778DD]">
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
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 max-h-[400px] md:max-h-[200px] w-full">
                            {/* Skill Categories */}
                            <div>
                                <article className="border-[1px] border-white w-full min-h-[100px] h-auto flex flex-col mb-8 md:mb-10">
                                    <div className="w-full">
                                        <h4 className="border-b-[1px] border-white w-full py-2 text-center">
                                            Lenguajes
                                        </h4>
                                    </div>
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
                            <div>
                                <article className="border-[1px] border-white w-full min-h-[100px] h-auto flex flex-col mb-8 md:mb-10">
                                    <div className="w-full">
                                        <h4 className="border-b-[1px] border-white w-full py-2 text-center">
                                            Databases
                                        </h4>
                                    </div>
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
                            <div>
                                <article className="border-[1px] border-white w-full min-h-[100px] h-auto flex flex-col mb-8 md:mb-10">
                                    <div className="w-full">
                                        <h4 className="border-b-[1px] border-white w-full py-2 text-center">
                                            Tools
                                        </h4>
                                    </div>
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
                            <div>
                                <article className="border-[1px] border-white w-full min-h-[100px] h-auto flex flex-col mb-8 md:mb-10">
                                    <div className="w-full">
                                        <h4 className="border-b-[1px] border-white w-full py-2 text-center">
                                            Frameworks
                                        </h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2 p-4 items-center">
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
                            <div>
                                <article className="border-[1px] border-white w-full min-h-[100px] h-auto flex flex-col mb-8 md:mb-10">
                                    <div className="w-full">
                                        <h4 className="border-b-[1px] border-white w-full py-2 text-center">
                                            Others
                                        </h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2 p-4 items-center">
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
