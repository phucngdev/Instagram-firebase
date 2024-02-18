import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/user/Sidebar";
import getProfile from "../functions/getProfile";

const Public = () => {
  const [isLogin, setIsLogin] = useState(() => {
    const userlocal = JSON.parse(localStorage.getItem("userLocal")) || false;
    return userlocal;
  });
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const userLocal = JSON.parse(localStorage.getItem("userLocal"));
  //       const dataFirebase = await getProfile(userLocal);
  //       setUser(dataFirebase);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      {isLogin ? (
        <>
          <Sidebar></Sidebar>
          <div className="ms-[245px] h-[100dvh] overflow-scroll bg-black">
            <Outlet></Outlet>
          </div>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Public;
