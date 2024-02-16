import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/user/Sidebar";

const Public = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </>
  );
};

export default Public;
