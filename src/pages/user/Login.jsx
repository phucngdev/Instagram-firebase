import React, { useState } from "react";
import login from "../../../public/login.png";
import phone from "../../../public/home-phones-2x.png";
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  createFromIconfontCN,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { message } from "antd";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const bottomLogin = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Terms",
  "Locations",
  "Instagram Lite",
  "Threads",
  "Contact Uploading & Non-Users",
  "Meta Verified",
  "@2024 Instagram from Meta",
];

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username === "" || user.password === "") {
      message.success({
        content: "Vui lòng nhập thông tin tài khoản",
        icon: <CloseCircleTwoTone twoToneColor="#ff0000" />,
      });
      return;
    }
    console.log("ok");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="flex items-center gap-8">
          <div className="w-[380px] h-[580px]">
            <img className="w-full h-full object-cover" src={phone} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col items-center w-[350px] border border-gray-300 py-[10px]">
              <div className="w-[175px] h-[51px] overflow-hidden bg-center mt-9 mb-3">
                <img className="" src={login} alt="" />
              </div>
              <form className="w-full px-10" onSubmit={handleSubmit}>
                <div className="mb-[6px]">
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    className="text-[13px] mt-6 border border-gray-200 w-full h-[38px] px-1"
                    placeholder="Phone number, username, or email"
                  />
                </div>
                <div className=" mb-[6px]">
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="text-[13px] border border-gray-200 w-full h-[38px] px-1"
                    placeholder="Password"
                  />
                </div>
                <div className=" my-3">
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center py-1 text-white text-[16px] font-medium bg-blue-400 rounded-lg"
                  >
                    Login
                  </button>
                </div>
                <div className="flex items-center ">
                  <div className="h-[1px] flex-1 bg-gray-300"></div>
                  <div className="mx-[18px] text-sm font-medium">OR</div>
                  <div className="h-[1px] flex-1 bg-gray-300"></div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 mt-3">
                  <IconFont type="icon-facebook" />
                  Log in with Facebook
                </button>
                <button className="w-full text-[13px] flex items-center justify-center gap-2 mt-3">
                  Forgot password?
                </button>
              </form>
            </div>
            <div className="flex items-center gap-2 justify-center text-[15px] my-[10px] py-[10px] border border-gray-300">
              Don't have account?{" "}
              <Link to="/register" className="text-blue-500 font-semibold">
                {" "}
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-3 max-w-[65%] justify-center">
          {bottomLogin.map((item, index) => (
            <Link
              key={index}
              className="text-sm text-gray-600 hover:border-b hover:border-gray-800"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Login;
