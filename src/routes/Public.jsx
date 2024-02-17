import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/user/Sidebar";

const Public = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="ms-[245px] h-[100dvh] overflow-scroll bg-black">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Public;
