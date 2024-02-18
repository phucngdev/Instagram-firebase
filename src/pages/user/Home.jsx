import React, { useEffect, useState } from "react";
import LeftSide from "../../components/user/home/LeftSide";
import RightSide from "../../components/user/home/RightSide";

const Home = () => {
  const [user, setUser] = useState(() => {
    const userLocal = JSON.parse(localStorage.getItem("userLocal"));
    return userLocal;
  });
  return (
    <>
      <div className="flex justify-center">
        <LeftSide user={user}></LeftSide>
        <RightSide user={user}></RightSide>
      </div>
    </>
  );
};

export default Home;
