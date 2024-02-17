import React from "react";
import login from "../../../public/login.png";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  BellOutlined,
  CompassOutlined,
  IdcardOutlined,
  MessageOutlined,
  PlaySquareOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
const Sidebar = () => {
  return (
    <>
      <div className="fixed bg-black left-0 top-0 flex flex-col w-[245px] h-[100vh] px-2 border-e border-gray-800">
        <Link
          to="/"
          className="w-[175px] h-[51px] relative overflow-hidden mt-9 mb-3 mx-auto"
        >
          <img className="absolute top-[-50px] left-0" src={login} alt="" />
        </Link>
        <Link
          to="/"
          className="w-full h-[52px] mt-6 text-white flex items-center px-6 cursor-pointer gap-3 rounded-md hover:bg-gray-800"
        >
          <AppstoreOutlined />
          Home
        </Link>
        <Link
          to="/search"
          className="w-full h-[52px] text-white flex items-center px-6 cursor-pointer gap-3 rounded-md hover:bg-gray-800"
        >
          <SearchOutlined />
          Search
        </Link>
        <Link
          to="/explore"
          className="w-full h-[52px] text-white flex items-center px-6 cursor-pointer gap-3 rounded-md hover:bg-gray-800"
        >
          <CompassOutlined />
          Explore
        </Link>
        <Link
          to="/reels"
          className="w-full h-[52px] text-white flex items-center px-6 cursor-pointer gap-3 rounded-md hover:bg-gray-800"
        >
          <PlaySquareOutlined />
          Reels
        </Link>
        <Link
          to="/messages"
          className="w-full h-[52px] text-white flex items-center px-6 cursor-pointer gap-3 rounded-md hover:bg-gray-800"
        >
          <MessageOutlined />
          Messages
        </Link>
        <Link
          to="/notification"
          className="w-full h-[52px] text-white flex items-center px-6 cursor-pointer gap-3 rounded-md hover:bg-gray-800"
        >
          <BellOutlined />
          Notification
        </Link>
        <Link
          to="/create"
          className="w-full h-[52px] text-white flex items-center px-6 cursor-pointer gap-3 rounded-md hover:bg-gray-800"
        >
          <PlusOutlined />
          Create
        </Link>
        <Link
          to="/profile"
          className="w-full h-[52px] text-white flex items-center px-6 cursor-pointer gap-3 rounded-md hover:bg-gray-800"
        >
          <IdcardOutlined />
          Profile
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
