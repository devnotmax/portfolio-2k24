import Image from "next/image";

//componentes
import { Quote } from "../components/Quote";
import { Hero } from "../components/Hero";
import {HomeProjects} from "../components/HomeProjects";

const Home: React.FC = () => {
  return (
    <>
      <main className="">
        <Hero />
        <Quote />
        <HomeProjects />
      </main>
    </>
  );
};

export default Home;
