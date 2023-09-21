import type { FC } from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";

const Home: FC = () => {
  return (
    <div className="w-[80%] m-auto ">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
