import Image from "next/image";
import { DownloadCV } from "./downloadCV";
import Link from "next/link";
import Avatar3D from "./Avatar3D";

// Cambiar luego el <a> a Link para poder manejar las rutas con Next.js bien
// Soy Desarrollador Front-End y especializado en el stack MERN (MongoDB, Express, React, Node.js).

export const Hero: React.FC = () => {
  return (
    <>
      <div className="flex justify-center mt-8 p-8">
        <div className="container md:w-[80%] mx-auto rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-white font-fira-code font-medium text-2xl md:text-3xl">
              <p>
                Soy{" "}
                <span className="text-[#C778DD]">Desarrollador Front-End</span>{" "}
                y especializado en el stack{" "}
                <span className="text-[#C778DD]">
                  MERN (MongoDB, Express, React, Node.js).
                </span>
              </p>
              <p className="text-base md:text-lg mt-4 text-gray-400">
                Creo sitios web responsivos donde la tecnología se encuentra con
                la creatividad.
              </p>
              <div className="flex flex-col md:flex-row gap-2 mt-4">
                <button className="border-2 border-[#C778DD] p-2 text-sm hover:border-white hover:text-[#C778DD]">
                  <Link href="/contact">Contactame!!</Link>
                  {/* Cambiar luego por Links */}
                </button>
                <DownloadCV />
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              {/* <Image
                src="/profile-pic.jpg"
                alt="profile picture"
                width={400}
                height={400}
                className="rounded-2xl w-full max-w-xs md:max-w-md"
              /> */}
              <Avatar3D />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
