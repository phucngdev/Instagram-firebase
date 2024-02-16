import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../../../public/login.png";
import { CloseCircleTwoTone, createFromIconfontCN } from "@ant-design/icons";
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
const Register = () => {
  const [user, setUser] = useState({
    phoneOremail: "",
    fullname: "",
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
    if (
      user.fullname === "" ||
      user.phoneOremail === "" ||
      user.username === "" ||
      user.password === ""
    ) {
      message.success({
        content: "Vui lòng nhập đủ thông tin",
        icon: <CloseCircleTwoTone twoToneColor="#ff0000" />,
      });
      return;
    }
    const newUser = {
      userid: "",
      fullname: user.fullname,
      phoneOremail: user.phoneOremail,
      username: user.username,
      password: user.password,
      imgAvt: "",
      follow: 0,
      following: 0,
      posts: [],
      story: [],
      created: new Date().toLocaleString(),
    };
  };
  return (
    <>
      <div className="w-[350px] flex flex-col mx-auto mt-8">
        <div className="flex flex-col items-center border border-gray-300 py-[10px]">
          <div className="w-[175px] h-[51px] overflow-hidden bg-center mt-9 mb-3">
            <img className="" src={login} alt="" />
          </div>
          <form className="w-full px-10" onSubmit={handleSubmit}>
            <button
              type="button"
              className="w-full py-1 rounded-lg text-white bg-[#0095f6] flex items-center justify-center gap-2 mt-3"
            >
              <IconFont type="icon-facebook" />
              Log in with Facebook
            </button>
            <div className="flex items-center my-3">
              <div className="h-[1px] flex-1 bg-gray-300"></div>
              <div className="mx-[18px] text-sm font-medium">OR</div>
              <div className="h-[1px] flex-1 bg-gray-300"></div>
            </div>
            <div className="mb-[6px]">
              <input
                type="text"
                name="phoneOremail"
                value={user.phoneOremail}
                onChange={handleChange}
                className="text-[13px] border border-gray-200 w-full h-[38px] px-1"
                placeholder="Mobile number or email"
              />
            </div>
            <div className="mb-[6px]">
              <input
                type="text"
                name="fullname"
                value={user.fullname}
                onChange={handleChange}
                className="text-[13px] border border-gray-200 w-full h-[38px] px-1"
                placeholder="Fullname"
              />
            </div>
            <div className="mb-[6px]">
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                className="text-[13px] border border-gray-200 w-full h-[38px] px-1"
                placeholder="Username"
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
            <div className="flex flex-col justify-center items-center text-center mt-2">
              <span className=" text-[12px] ">
                People who use our service may have uploaded your contact
                information to Instagram.
              </span>
              <Link className="text-[12px] font-medium">Learn More</Link>
            </div>
            <div className="flex justify-center items-center text-center mt-3">
              <span className=" text-[12px] ">
                By signing up, you agree to our Terms , Privacy Policy and
                Cookies Policy .
              </span>
            </div>
            <div className="my-3">
              <button
                type="submit"
                className="w-full flex justify-center items-center py-1 text-white text-[16px] font-medium bg-blue-400 rounded-lg"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center gap-2 justify-center text-[15px] my-[10px] py-[10px] border border-gray-300">
          Have an account?{" "}
          <Link to="/login" className="text-blue-500 font-semibold">
            {" "}
            Login
          </Link>
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-3 max-w-[65%] justify-center mx-auto mt-10">
        {bottomLogin.map((item, index) => (
          <Link
            key={index}
            className="text-sm text-gray-600 hover:border-b hover:border-gray-800"
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Register;
