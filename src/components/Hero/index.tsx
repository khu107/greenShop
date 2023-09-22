import { Carousel } from "antd";
import type { FC } from "react";
import HeroItem from "./HeroItem";
import { heroMock } from "../../utils";

const Hero: FC = () => {
  return (
    <div className="h-[450px] w-full mt-[12px] bg-[#F5F5F5]">
      <Carousel autoplay>
        {heroMock.map((value) => {
          return <HeroItem key={value.id} {...value} />;
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
