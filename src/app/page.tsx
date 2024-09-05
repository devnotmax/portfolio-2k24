import Image from "next/image";

//componentes
import { Quote } from "../components/Quote";
import { Hero } from "../components/Hero";
import { HomeProjects } from "../components/HomeProjects";
import { Skills } from "../components/Skills";
import { AboutMe } from "../components/AboutMe";
import { Contacts } from "../components/contacts";

const Home: React.FC = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Quote />
        <HomeProjects />
        <Skills />
        <AboutMe />
        <Contacts />
      </main>
    </>
  );
};

export default Home;
