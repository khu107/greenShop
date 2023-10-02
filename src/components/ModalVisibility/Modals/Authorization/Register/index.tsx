import { FacebookFilled, GoogleOutlined } from "@ant-design/icons";
import { Divider, Form, Input } from "antd";
import type { FC } from "react";
import { useAxios } from "../../../../../hooks/useRedux/useAxios";

interface OnRegisterType {
  name: string;
  surname: string;
  email: string;
  password: string;
}

const Register: FC = () => {
  const axios = useAxios();
  const onRegisterHandler = async (e: OnRegisterType) => {
    try {
      const response = await axios({
        url: "user/sign-up",
        method: "POST",
        body: e,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-4/5 m-auto">
      <h3 className="text-sm mt-8 font-normal">
        Enter your username and password to ligin.
      </h3>
      <Form onFinish={onRegisterHandler}>
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
            placeholder="********"
            type="password"
          />
        </Form.Item>
        <Form.Item
          name="password1"
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
          Register
        </button>
      </Form>
      <Divider className="font-normal text-xs">Or register with</Divider>
      <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]">
        <FacebookFilled className="pl-[15px]" />
        Login with Facebook
      </button>
      <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]">
        <GoogleOutlined className="pl-[15px]" />
        Login with Google
      </button>
    </div>
  );
};

export default Register;
