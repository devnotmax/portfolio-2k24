import { ContactForm } from "./ContactForm";
import { TitleHeader } from "./TitleHeader";

export const Contacts = () => {
    return (
        <div className="flex justify-center mt-20 items-center p-8">
            <div className="container mt-10">
                <div className="flex flex-col justify-center items-center w-full h-auto">
                    <div className="text-white font-fira-code font-semibold text-2xl min-h-[300px] w-full">
                        <TitleHeader title="Contacto"></TitleHeader>
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8 h-auto p-8">
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
