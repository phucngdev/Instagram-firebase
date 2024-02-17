import React, { useEffect, useState } from "react";
import getProfile from "../../functions/getProfile";
import {
  CloseOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Modal } from "antd";
import Follower from "../../components/user/profile/Follower";
import upload from "../../firebase/config";
import updatePhoto from "../../functions/updatePhoto";

const Profile = () => {
  const [user, setUser] = useState();
  const [openPhoto, setOpenPhoto] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userLocal = JSON.parse(localStorage.getItem("userLocal"));
        const dataFirebase = await getProfile(userLocal);
        setUser(dataFirebase);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    return () => {
      fetchData();
    };
  }, []);
  const handleChange = async (e) => {
    const getUrl = await upload(e.target);
    updatePhoto(user.uid, getUrl);
    console.log(getUrl);
  };
  return (
    <>
      <div className="max-w-[935px] mx-auto px-5 pt-5">
        <header className="h-[150px] w-full mb-[44px] flex items-center">
          <div className="w-[290px] h-full flex items-center justify-center me-[30px]">
            {user?.photoUrl ? (
              <img
                onClick={() => setOpenPhoto(true)}
                className="w-[150px] h-[150px] rounded-full object-cover"
                src={user.photoUrl}
                alt=""
              />
            ) : (
              <Avatar
                onClick={() => setOpenPhoto(true)}
                className="bg-gray-500 w-[150px] h-[150px]"
                icon={<UserOutlined className="text-white " />}
              />
            )}
            <Modal
              title={
                <>
                  <h3 className="bg-[#262626] text-center text-white">
                    Change Profile Photo
                  </h3>
                </>
              }
              centered
              open={openPhoto}
              onOk={() => setOpenPhoto(false)}
              onCancel={() => setOpenPhoto(false)}
              footer={false}
              closeIcon={<CloseOutlined className="text-white" />}
            >
              <div className="flex flex-col gap-3 pt-3 border-t border-gray-500">
                <div className="flex items-center justify-center  text-base font-bold text-blue-400">
                  <label
                    htmlFor="getPhotoComputer"
                    className="w-full text-center py-2 px-3 cursor-pointer"
                  >
                    <input
                      hidden
                      type="file"
                      id="getPhotoComputer"
                      onChange={handleChange}
                    />
                    Upload Photo
                  </label>
                </div>
                <div className="flex items-center justify-center border-t border-gray-500 text-base font-bold text-red-400">
                  <button className="w-full text-center py-2 px-3 cursor-pointer">
                    Remove Photo
                  </button>
                </div>
                <div className="flex items-center justify-center border-t border-gray-500 text-base font-bold text-gray-400">
                  <button
                    onClick={() => setOpenPhoto(false)}
                    className="w-full text-center py-2 px-3 cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-5">
              <h3 className="text-[20px] text-white font-normal">
                {user?.username}
              </h3>
              <Button className="bg-[#363636] text-white font-semibold">
                Edit profile
              </Button>
              <Button className="bg-[#363636] text-white font-semibold">
                View archive
              </Button>
              <SettingOutlined
                style={{ fontSize: "25px" }}
                className="text-white"
              />
            </div>
            <Follower user={user}></Follower>
            <span className="text-white mt-3">{user?.fullname}</span>
          </div>
        </header>
      </div>
    </>
  );
};

export default Profile;
