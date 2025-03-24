import React from "react";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <aside className="bg-transparent w-16 hidden md:flex flex-col items-center fixed left-0 top-0 h-full">
      <Image src="/line.svg" width={1} height={300} alt="line" />
      <ul className="space-y-6 mt-2">
        <li>
          <a
            href="https://discordapp.com/users/1142294231898140742"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF00FF] transition-colors duration-300"
          >
            <Image
              src="/discord-icon.svg"
              alt="Discord"
              width={20}
              height={20}
              className="w-7 h-7"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/machifrias/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300"
          >
            <Image
              src="/linkedin-icon.svg"
              alt="Linkedin"
              width={20}
              height={20}
              className="w-7 h-7"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/devnotmax"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300"
          >
            <Image
              src="/github-icon.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="w-7 h-7"
            />
          </a>
        </li>
      </ul>
    </aside>
  );
};
