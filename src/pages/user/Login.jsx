import React, { useEffect, useState } from "react";
import login from "../../../public/login.png";
import phone from "../../../public/home-phones-2x.png";
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  createFromIconfontCN,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { Spin, message } from "antd";
import getFirebase from "../../functions/getFIrebase";
import { auth } from "../../firebase/config";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import postFirebase from "../../functions/postFirebase";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

export const bottomLogin = [
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
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(() => {
    const userlocal = JSON.parse(localStorage.getItem("userLocal")) || false;
    return userlocal;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, []);

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const { user, additionalUserInfo } = result;
      if (additionalUserInfo?.isNewUser) {
        postFirebase("users", user.uid, {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          providerId: additionalUserInfo.providerId,
          keywords: generateKeywords(user.displayName?.toLowerCase()),
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.username === "" || user.password === "") {
      message.error({
        content: "Vui lòng nhập thông tin tài khoản",
        icon: <CloseCircleTwoTone twoToneColor="#ff0000" />,
      });
      return;
    }
    setIsLoading(true);
    const dataFirebase = await getFirebase("user");
    const { username, password } = user;
    for (const userId in dataFirebase) {
      if (
        dataFirebase[userId].username === username &&
        dataFirebase[userId].password === password
      ) {
        localStorage.setItem("userLocal", JSON.stringify(dataFirebase[userId]));
        navigate("/");
        setIsLoading(false);
        return;
      } else {
        message.error({
          content: "Tài khoản không tồn tại",
          icon: <CloseCircleTwoTone twoToneColor="#ff0000" />,
        });
        setIsLoading(false);
        return;
      }
    }
    setIsLoading(false);
  };
  return (
    <>
      {isLoading && (
        <>
          <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Spin />
          </div>
        </>
      )}
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
                <button
                  type="button"
                  onClick={handleFacebookLogin}
                  className="w-full flex items-center justify-center gap-2 mt-3"
                >
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
