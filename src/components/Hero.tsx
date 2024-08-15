import Image from "next/image";

//cambiar luego el <a> a Link para poder manejar las rutas con nextsj bien

export const Hero: React.FC = () => {
  return (
    <>
      <div className="  flex justify-center mt-8">
        <div className="p-8 bg-[#282C33]  w-[80%]">
          <div className=" grid grid-cols-[50%_50%] justify-center items-center">
            <div className="text-white font-fira-code font-medium text-3xl">
              <p>
                Soy un <span className="text-[#C778DD]">Diseñador Web</span> y{" "}
                <span className="text-[#C778DD]">Desarrollador front-end</span>
              </p>
              <p className="text-lg mt-4 text-gray-400">
                Creo sitios web responsivos donde la tecnología se encuentra con
                la creatividad.
              </p>
              <button className="border-2 border-[#C778DD] p-2 mt-4 text-sm hover:border-white hover:text-[#C778DD]">
                <a href="#contact">Contactame!!</a> 
                {/* Cambiar luego por Links */}
              </button>
            </div>
            <div className="flex justify-self-end ">
              <Image
                src="/profile-pic.jpg"
                alt="profile picture"
                width={500}
                height={500}
                className="rounded-2xl"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
