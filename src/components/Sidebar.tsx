import React from "react";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <aside className="bg-transparent w-16 flex flex-col items-center  fixed left-0 top-0 h-full">
      <Image src="/line.svg" width={1} height={300} alt="line"></Image>
      <ul className="space-y-6 mt-2">
        <li>
          <a
            href="https://discordapp.com/users/1142294231898140742"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF00FF]"
          >
            {/* <img src="/discord-icon.svg" alt="Discord" className="w-7 h-7" /> */}
            <Image src="/discord-icon.svg" alt="Discord" width={20} height={20} className="w-7 h-7"></Image>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/machifrias/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img src="/linkedin-icon.svg" alt="Linkedin" className="w-7 h-7" /> */}
            <Image src="/linkedin-icon.svg" alt="Linkedin" width={20} height={20} className="w-7 h-7"></Image>
          </a>
        </li>
        <li>
          <a
            href="github.com/devnotmax"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img src="/github-icon.svg" alt="LinkedIn" className="w-7 h-7" /> */}
            <Image src="/github-icon.svg" alt="LinkedIn" width={20} height={20} className="w-7 h-7"></Image>
          </a>
        </li>
        {/* Añadir más redes sociales aquí */}
      </ul>
    </aside>
  );
};
