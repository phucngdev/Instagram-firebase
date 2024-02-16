import React from "react";
import login from "../../../public/login.png";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  AppstoreTwoTone,
  BellOutlined,
  IdcardOutlined,
  MessageOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
const Sidebar = () => {
  return (
    <>
      <div className="fixed left-0 top-0 flex flex-col w-[245px] h-[100vh] px-2 border-e border-gray-300">
        <Link
          to="/"
          className="w-[175px] h-[51px] overflow-hidden bg-center mt-9 mb-3 mx-auto"
        >
          <img className="" src={login} alt="" />
        </Link>
        <Link
          to="/"
          className="w-full h-[52px] flex items-center px-4 gap-2 rounded-md hover:bg-gray-100"
        >
          <AppstoreOutlined />
          Home
        </Link>
        <Link
          to="/search"
          className="w-full h-[52px] flex items-center px-4 gap-2 rounded-md hover:bg-gray-100"
        >
          <SearchOutlined />
          Search
        </Link>
        <Link
          to="/explore"
          className="w-full h-[52px] flex items-center px-4 gap-2 rounded-md hover:bg-gray-100"
        >
          <AppstoreTwoTone />
          Explore
        </Link>
        <Link
          to="/reels"
          className="w-full h-[52px] flex items-center px-4 gap-2 rounded-md hover:bg-gray-100"
        >
          <AppstoreTwoTone />
          Reels
        </Link>
        <Link
          to="/messages"
          className="w-full h-[52px] flex items-center px-4 gap-2 rounded-md hover:bg-gray-100"
        >
          <MessageOutlined />
          Messages
        </Link>
        <Link
          to="/notification"
          className="w-full h-[52px] flex items-center px-4 gap-2 rounded-md hover:bg-gray-100"
        >
          <BellOutlined />
          Notification
        </Link>
        <Link
          to="/create"
          className="w-full h-[52px] flex items-center px-4 gap-2 rounded-md hover:bg-gray-100"
        >
          <PlusOutlined />
          Create
        </Link>
        <Link
          to="/profile"
          className="w-full h-[52px] flex items-center px-4 gap-2 rounded-md hover:bg-gray-100"
        >
          <IdcardOutlined />
          Profile
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
