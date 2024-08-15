import Image from "next/image";

//componentes
import { Quote } from "../components/Quote";

import { Hero } from "../components/Hero";

const Home: React.FC = () => {
  return (
    <>
      <main className="">
        <Hero />
        <Quote />
      </main>
    </>
  );
};

export default Home;
