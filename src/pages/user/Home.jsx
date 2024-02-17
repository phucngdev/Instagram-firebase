import React, { useState } from "react";
import LeftSide from "../../components/user/home/LeftSide";
import RightSide from "../../components/user/home/RightSide";
import { useLocation } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex justify-center">
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </div>
    </>
  );
};

export default Home;
