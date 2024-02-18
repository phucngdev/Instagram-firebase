import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const RightSide = ({ user }) => {
  return (
    <>
      <div className="flex flex-col mt-9 w-[319px] ps-[64px] h-[100vh]">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            {user?.photoUrl ? (
              <img
                className="w-[44px] h-[44px] rounded-full object-cover"
                src={user.photoUrl}
                alt=""
              />
            ) : (
              <Link>
                <Avatar
                  size="large"
                  className="bg-gray-500"
                  icon={<UserOutlined className="text-white " />}
                />
              </Link>
            )}
            <div className="flex flex-col">
              <Link to="/profile" className="text-[#f5f5f5] text-sm font-bold">
                {user?.username}
              </Link>
              <span className="text-[#a8a8a8] font-light text-sm">
                {user?.fullname}
              </span>
            </div>
          </div>
          <span className="text-[12px] font-semibold text-[#0095f6]">
            Switch
          </span>
        </div>
      </div>
    </>
  );
};

export default RightSide;
