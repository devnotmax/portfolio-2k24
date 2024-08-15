//Reemplazar los a por un Link cuando tengamos las rutas creadas

export const Navbar = () => {
  return (
    <main>
      <div className="flex justify-center">
        <nav className="bg-[#282C33] flex justify-between w-[80%]">
          <div className="p-8 flex justify-center items-center">
            <img src="/logo.svg" className="w-[3rem]" />
            <h1 className="text-3xl font-fira-code font-bold text-white">
              Maximiliano
            </h1>
          </div>
          <ul className="p-8 flex gap-8 justify-center items-center text-white font-medium font-fira-code">
            <li>
              <a href="#">
                <span className="text-[#C778DD]">#</span>Home
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-[#C778DD]">#</span>works
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-[#C778DD]">#</span>about-me
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-[#C778DD]">#</span>contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};
