import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";

const Likes = () => {
  const [openLikes, setOpenLikes] = useState(false);
  return (
    <>
      <span
        onClick={() => setOpenLikes(true)}
        className="text-sm text-white cursor-pointer font-bold"
      >
        123.123 likes
      </span>
      <Modal
        title={
          <>
            <h3 className="bg-[#262626] text-center text-white">Likes</h3>
          </>
        }
        centered
        open={openLikes}
        onOk={() => setOpenLikes(false)}
        onCancel={() => setOpenLikes(false)}
        footer={false}
        closeIcon={<CloseOutlined className="text-white" />}
      >
        <div className="flex flex-col gap-3 pt-3 border-t border-gray-500">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-[42px] h-[42px] cursor-pointer flex items-center justify-center rounded-full bg-gradient-to-br from-[#d301c5] to-[#ffc703]">
                <Link>
                  <img
                    className="w-[38px] h-[38px] border-2 border-black rounded-full object-cover"
                    src="https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-phong-c-nh-dan-ba-ng-i-d-ng-c.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex flex-col">
                <Link className="flex items-center justify-center ">
                  <span className="text-white text-[13px] font-bold">
                    ANvbsbf
                  </span>
                </Link>
                <span className="text-[#a8a8a8] text-[13px] font-normal">
                  ANvbsbf
                </span>
              </div>
            </div>
            <Button type="primary" className="bg-blue-500">
              <span className="font-bold">Follow</span>
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-[42px] h-[42px] cursor-pointer flex items-center justify-center rounded-full bg-gradient-to-br from-[#d301c5] to-[#ffc703]">
                <Link>
                  <img
                    className="w-[38px] h-[38px] border-2 border-black rounded-full object-cover"
                    src="https://images.pexels.com/photos/17604370/pexels-photo-17604370/free-photo-of-phong-c-nh-dan-ba-ng-i-d-ng-c.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex flex-col">
                <Link className="flex items-center justify-center ">
                  <span className="text-white text-[13px] font-bold">
                    ANvbsbf
                  </span>
                </Link>
                <span className="text-[#a8a8a8] text-[13px] font-normal">
                  ANvbsbf
                </span>
              </div>
            </div>
            <Button type="primary" className="bg-blue-500">
              <span className="font-bold">Follow</span>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Likes;
