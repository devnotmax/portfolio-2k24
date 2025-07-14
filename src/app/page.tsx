import Image from "next/image";

//componentes
import { Hero } from "../components/Hero";
import { HomeProjects } from "../components/HomeProjects";
import { Skills } from "../components/Skills";
import { AboutMe } from "../components/AboutMe";
import { Contacts } from "../components/contacts";
import WorkExperience from "../components/WorkExperience";
import { TimelineExperience } from "../components/TimeLine";

const Home: React.FC = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Hero />
        <HomeProjects />
        {/* <WorkExperience /> */}
        <TimelineExperience />
        <Skills />
        <AboutMe />
        <Contacts />
      </main>
    </>
  );
};

export default Home;
