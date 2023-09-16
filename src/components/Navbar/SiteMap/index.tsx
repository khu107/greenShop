import type { FC } from "react";
import { Modal } from "antd";
import { LoginOutlined } from "@ant-design/icons";

const customLinkStyle = "text-[1rem] font-normal leading-6 cursor-pointer";
const linkHoverStyle =
  "hover:border-l-[5px] hover:border-[#46A358] hover:pl-[5px] hover:text-[#46A358] transition-colors";
const linkActiveStyle =
  "border-l-[5px] border-[#46A358] pl-[5px] text-[#46A358] transition-colors";

const SiteMap: FC = () => {
  return (
    <Modal open={true} title="Site map" footer={false}>
      <div className="flex gap-4 flex-col mt-5">
        <h3
          className={`${customLinkStyle} ${linkHoverStyle} ${linkActiveStyle}`}
        >
          Home
        </h3>
        <h3 className={`${customLinkStyle} ${linkHoverStyle} `}>Blog</h3>
      </div>
      <button className="w-4/5 m-auto flex gap-3 items-center bg-[#46A358] h-[49px] justify-center text-white font-medium text-[16px] mt-[41px] rounded-md">
        <LoginOutlined />
        Login
      </button>
    </Modal>
  );
};

export default SiteMap;
