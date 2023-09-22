import type { FC } from "react";
import type { HeroItemType } from "../../../@types";

const HeroItem: FC<HeroItemType> = ({
  bigImageUrl,
  smallImageUrl,
  buttonText,
  subTitle,
  title,
  description,
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex-[2] ml-[40px] ">
        <h3 className="text-[#3D3D3D] font-medium text-[15px] mt-[68px]">
          {subTitle}
        </h3>
        <h1 className="text-[#3D3D3D] font-black text-7xl mt-[7px] leading-[70px]">
          {title}
          <span className="text-[#46A358]"> PLANET</span>
        </h1>
        <p className="font-normal text-[#727272] mt-[10px] mb-[44px] w-[60%]">
          {description}
        </p>
        <button className="text-white w-[100px] h-[35px] bg-[#46A358] flex justify-center items-center rounded-md gap-2 max-md:hidden">
          {buttonText}
        </button>
      </div>
      <div className="flex-[1] flex justify-center items-center relative  ">
        <img
          className="absolute bottom-1 left-[55px]"
          src={smallImageUrl}
          alt="HeroImg"
        />
        <img className="h-[450px]" src={bigImageUrl} alt="HeroImg" />
      </div>
    </div>
  );
};

export default HeroItem;
