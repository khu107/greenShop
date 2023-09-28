import type { FC } from "react";
import { Modal } from "antd";
import { useState } from "react";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import Login from "./Login";
import Register from "./Register";
import { setAuthMapModalVisibility } from "../../../../redux/modalSlice";

type ActiveType = "login" | "register";

const Authorization: FC = () => {
  const dispatch = useReduxDispatch();
  const [active, setActive] = useState<ActiveType>("login");
  const { authModalVisibility } = useReduxSelector((state) => state.modal);

  const activeStyle = "text-[#46A358]";
  return (
    <Modal
      onCancel={() =>
        dispatch(setAuthMapModalVisibility({ loading: false, open: false }))
      }
      open={authModalVisibility.open}
      footer={false}
    >
      <div className="m-auto flex flex-col items-center ">
        <div className="flex mt-[52px] items-center gap-3">
          <div
            className={`text-[#3D3D3D] text-xl transsition-all cursor-pointer ${
              active === "login" ? activeStyle : ""
            }`}
            onClick={() => {
              setActive("login");
            }}
          >
            Login
          </div>
          <div className="bg-[#3D3D3D] border-[1px] h-4 "></div>
          <div
            className={`text-[#3D3D3D] text-xl transsition-all cursor-pointer ${
              active === "register" ? activeStyle : ""
            }`}
            onClick={() => {
              setActive("register");
            }}
          >
            Register
          </div>
        </div>
        {active === "login" ? <Login /> : <Register />}
      </div>
    </Modal>
  );
};

export default Authorization;
