import React from "react";
import Notfound from "../../../public/404.gif";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  };
  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <img className="w-full h-full object-cover" src={Notfound} alt="" />
        <button
          className="px-4 py-2 rounded-lg border-0 bg-blue-600 hover:bg-blue-500 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          onClick={handleCancel}
        >
          <span className=" text-xl text-white font-normal">
            Quay lại trang chủ
          </span>
        </button>
      </div>
    </>
  );
};

export default NotFound;
