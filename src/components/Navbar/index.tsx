import type { FC } from "react";
import {
  BellOutlined,
  LoginOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import { useReduxDispatch } from "../../hooks/useRedux";
import {
  setAuthMapModalVisibility,
  setsiteMapModalVisibility,
} from "../../redux/modalSlice";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import type { UserType } from "../../@types";
const iconStyle: string = "cursor-pointer text-[20px]";

const Navbar: FC = () => {
  const dispatch = useReduxDispatch();
  const isAuthed = useIsAuthenticated()();
  const auth: UserType = useAuthUser()() ?? {};
  console.log(auth, isAuthed);

  return (
    <div className="flex justify-between h-[90px] items-center border-b border-[#46A358]">
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
          alt="logo"
        />
      </div>
      <div className="flex gap-4 max-md:hidden">
        <h3 className="cursor-pointer">HOME</h3>
        <h3 className="cursor-pointer">Blog</h3>
      </div>
      <div className="flex gap-[30px] items-center">
        <SearchOutlined className={`${iconStyle}`} />
        <BellOutlined className={`${iconStyle}`} />
        <ShoppingCartOutlined className={`${iconStyle}`} />
        <button
          onClick={() => {
            dispatch(setAuthMapModalVisibility({ loading: false, open: true }));
          }}
          className="text-white w-[100px] h-[35px] bg-[#46A358] flex justify-center items-center rounded-md gap-2 max-md:hidden"
        >
          {isAuthed ? (
            `${String(auth.name)}`
          ) : (
            <>
              <LoginOutlined />
              Login
            </>
          )}
        </button>
        <MenuOutlined
          onClick={() => dispatch(setsiteMapModalVisibility())}
          className={`${iconStyle} hidden max-md:flex`}
        />
      </div>
    </div>
  );
};

export default Navbar;
