import { Carousel } from "antd";
import type { FC } from "react";
import HeroItem from "./HeroItem";

const Hero: FC = () => {
  return (
    <div className="h-[450px] w-full mt-[12px] bg-[#F5F5F5]">
      <Carousel autoplay>
        <HeroItem />
        <HeroItem />
        <HeroItem />
      </Carousel>
    </div>
  );
};

export default Hero;
