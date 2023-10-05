import {
  FacebookFilled,
  GoogleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Divider, Form, Input } from "antd";
import type { FC } from "react";
import { useAxios } from "../../../../../hooks/useRedux/useAxios";
import {
  useReduxDispatch,
  useReduxSelector,
} from "../../../../../hooks/useRedux";
import {
  setAuthMapModalVisibility,
  setInProcessModalVisibility,
} from "../../../../../redux/modalSlice";
import { useSignIn } from "react-auth-kit";
import type { AuthResponseType } from "../../../../../@types";
import { signInWithGoogle } from "../../../../../config/config";

interface OnRegisterType {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmingpassword: string;
}

const Register: FC = () => {
  const dispatch = useReduxDispatch();
  const signIn = useSignIn();
  const { authModalVisibility } = useReduxSelector((state) => state.modal);
  const axios = useAxios();
  const onAuth = async (e: OnRegisterType) => {
    if (e.password !== e.confirmingpassword) return;
    dispatch(setAuthMapModalVisibility({ loading: true, open: true }));
    axios({
      url: "/user/sign-up",
      method: "POST",
      body: e,
    })
      .then((res) => {
        const { data }: AuthResponseType = res.data;
        signIn({
          token: data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: data.user,
        });
      })
      .catch(() => {
        dispatch(setAuthMapModalVisibility({ loading: false, open: true }));
      });
    dispatch(setAuthMapModalVisibility({ loading: false, open: true }));
  };
  const onAuthWithGoogle = async () => {
    try {
      dispatch(setAuthMapModalVisibility({ loading: false, open: false }));
      const result = await signInWithGoogle();
      dispatch(setInProcessModalVisibility());
      const { data }: { data: AuthResponseType } = await axios({
        url: "/user/sign-up/google",
        method: "POST",
        body: {
          email: result.user.email,
          name: result.user.displayName?.split(" ")[0] ?? " ",
          surname: result.user.displayName?.split(" ")[1] ?? " ",
        },
      });
      signIn({
        token: data.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: data.data.user,
      });
      dispatch(setInProcessModalVisibility());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-4/5 m-auto">
      <h3 className="text-sm mt-8 font-normal">
        Enter your username and password to ligin.
      </h3>
      <Form onFinish={onAuth}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            className="h-[40px] mt-[12px] border border-[#46A358]"
            placeholder="Name"
            type="text"
          />
        </Form.Item>
        <Form.Item
          name="surname"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            className="h-[40px] mt-[12px] border border-[#46A358]"
            placeholder="Surname"
            type="text"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            className="h-[40px] mt-[12px] border border-[#46A358]"
            placeholder="...@mail.com"
            type="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            className="h-[40px] mt-[12px]  border border-[#46A358]"
            placeholder="Your password"
            type="password"
          />
        </Form.Item>
        <Form.Item
          name="confirmingpassword"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            className="h-[40px] mt-[12px]  border border-[#46A358]"
            placeholder="Confirm your password!"
            type="password"
          />
        </Form.Item>

        <button
          type="submit"
          className="w-full h-[45px] my-[10px] bg-[#46A358] text-white rounded-md"
        >
          {authModalVisibility.loading ? <LoadingOutlined /> : "Register"}
        </button>
      </Form>
      <Divider className="font-normal text-xs">Or register with</Divider>
      <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]">
        <FacebookFilled className="pl-[15px]" />
        Login with Facebook
      </button>
      <button
        onClick={() => onAuthWithGoogle()}
        className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]"
      >
        <GoogleOutlined className="pl-[15px]" />
        Login with Google
      </button>
    </div>
  );
};

export default Register;
