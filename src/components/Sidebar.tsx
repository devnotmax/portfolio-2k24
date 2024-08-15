import React from "react";

export const Sidebar = () => {
  return (
    <aside className="bg-[#282C33] w-16 flex flex-col items-center  fixed left-0 top-0 h-full">
      <img src="/line.svg" />
      <ul className="space-y-6 mt-2">
        <li>
          <a
            href="https://discordapp.com/users/1142294231898140742"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF00FF]"
          >
            <img src="/discord-icon.svg" alt="Discord" className="w-7 h-7" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/machifrias/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin-icon.svg" alt="Linkedin" className="w-7 h-7" />
          </a>
        </li>
        <li>
          <a
            href="github.com/devnotmax"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github-icon.svg" alt="LinkedIn" className="w-7 h-7" />
          </a>
        </li>
        {/* Añadir más redes sociales aquí */}
      </ul>
    </aside>
  );
};
