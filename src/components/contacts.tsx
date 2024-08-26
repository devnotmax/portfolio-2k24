import { ContactForm } from "./ContactForm";

export const Contacts = () => {
    return (
        <div className="flex justify-center items-center p-4">
            <div className="w-full max-w-[1200px]">
                <div className="p-6 flex flex-col justify-center items-center w-full h-auto">
                    <div className="text-white font-fira-code font-semibold text-2xl min-h-[300px] w-full">
                        {/* <header className="grid grid-cols-1 md:grid-cols-[20%_80%] items-center w-full mb-10">
                            <div className="text-center md:text-left">
                                <p className="text-white text-2xl font-fira-code font-semibold">
                                    <span className="text-[#C778DD]">#</span>Contacto
                                </p>
                            </div>
                            <div className="hidden md:block">
                                <hr className="w-full border-[#C778DD] border-2" />
                            </div>
                        </header> */}
                         <header className="grid grid-cols-1 md:grid-cols-[20%_80%] items-center w-full mb-10">
                        <div className="text-center md:text-left flex justify-center md:justify-start">
                            <p className="text-white text-2xl font-fira-code font-semibold">
                                <span className="text-[#C778DD]">#</span>Contacto
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <hr className="w-full border-[#C778DD] border-2" />
                        </div>
                    </header>
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8 h-auto">
                            <div className="w-full flex flex-col items-center gap-4 border border-white p-4 max-w-[250px] mx-auto">
                                <article className="flex flex-row items-center gap-2">
                                    <i className='bx bxl-discord-alt text-[1.5rem]'></i>
                                    <a href="https://discordapp.com/users/1142294231898140742"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <p className="text-sm hover:text-gray-500">!maxee_f</p>
                                    </a>
                                </article>
                                <article className="flex flex-row items-center gap-2">
                                    <i className='bx bx-envelope text-[1.5rem]'></i>
                                    <a href="mailto:develop.maxsj@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <p className="text-sm hover:text-gray-500">develop.maxsj@gmail.com</p>
                                    </a>
                                </article>
                            </div>

                            <ContactForm />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;
