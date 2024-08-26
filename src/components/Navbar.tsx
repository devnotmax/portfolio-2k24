export const Navbar = () => {
    return (
        <main>
            <div className="flex justify-center">
                <nav className="bg-[#282C33] flex flex-col md:flex-row items-center w-full md:w-[80%]">
                    <div className="p-4 md:p-8 flex justify-between items-center w-full">
                        <div className="flex items-center">
                            <img src="/logo.svg" className="w-[3rem]" alt="Logo" />
                            <h1 className="text-2xl md:text-3xl font-fira-code font-bold text-white ml-2">
                                Maximiliano
                            </h1>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="text-white focus:outline-none">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <ul className="p-4 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center text-white font-medium font-fira-code hidden md:flex">
                        <li className="whitespace-nowrap">
                            <a href="#" className="hover:text-[#C778DD]">
                                <span className="text-[#C778DD]">#</span>Home
                            </a>
                        </li>
                        <li className="whitespace-nowrap">
                            <a href="#" className="hover:text-[#C778DD]">
                                <span className="text-[#C778DD]">#</span>Works
                            </a>
                        </li>
                        <li className="whitespace-nowrap">
                            <a href="#" className="hover:text-[#C778DD]">
                                <span className="text-[#C778DD]">#</span>About Me
                            </a>
                        </li>
                        <li className="whitespace-nowrap">
                            <a href="#" className="hover:text-[#C778DD]">
                                <span className="text-[#C778DD]">#</span>Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </main>
    );
};
