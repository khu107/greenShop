import type { FC } from "react";

const HeroItem: FC = () => {
  return (
    <div className="flex justify-between">
      <div className="flex-[2] ml-[40px] ">
        <h3 className="text-[#3D3D3D] font-medium text-[15px] mt-[68px]">
          WELCOME TO GREENSHOP
        </h3>
        <h1 className="text-[#3D3D3D] font-black text-7xl mt-[7px] leading-[70px]">
          LET{"'"}S MAKE A BETTER <span className="text-[#46A358]">PLANET</span>
        </h1>
        <p className="font-normal text-[#727272] mt-[10px] mb-[44px] w-[60%]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button className="text-white w-[100px] h-[35px] bg-[#46A358] flex justify-center items-center rounded-md gap-2 max-md:hidden">
          SHOP NOW
        </button>
      </div>
      <div className="flex-[1] flex justify-center items-center relative  ">
        <img
          className="absolute bottom-1 left-[55px]"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca"
          alt="HeroImg"
        />
        <img
          className="h-[450px]"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt="HeroImg"
        />
      </div>
    </div>
  );
};

export default HeroItem;
