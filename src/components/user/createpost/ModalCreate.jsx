import {
  CloseOutlined,
  DownOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const { TextArea } = Input;
const ModalCreate = ({ openCreate, setOpenCreate }) => {
  const [user, setUser] = useState(() => {
    const userLocal = JSON.parse(localStorage.getItem("userLocal"));
    return userLocal;
  });
  const [urlPhotoNew, setUrlPhotoNew] = useState("");
  const [newPost, setNewPost] = useState({
    id: uuidv4(),
    uid: user.uid,
    caption: "",
    photoPost: "",
    created: new Date().toLocaleDateString(),
  });
  const handleChange = async (e) => {
    const getUrl = await upload(e.target);
    setUrlPhotoNew(getUrl);
  };
  const handleShare = () => {};
  return (
    <>
      <Modal
        title={
          <>
            <div className="bg-[#262626] flex items-center justify-between">
              <h3 className="text-transparent">Share</h3>
              <h3 className="text-white">Create new post</h3>
              <button
                onClick={handleShare}
                className="text-[#0095f6] hover:text-white"
              >
                Share
              </button>
            </div>
          </>
        }
        centered
        open={openCreate}
        onOk={() => setOpenCreate(false)}
        onCancel={() => setOpenCreate(false)}
        footer={false}
        width={900}
        closeIcon={false}
      >
        <div className="flex pt-3 border-t h-[450px] border-gray-500">
          <div className="flex flex-col gap-3 justify-center items-center w-[65%] h-full ">
            {urlPhotoNew === "" ? (
              <>
                <InstagramOutlined
                  style={{ fontSize: "60px", color: "#fff" }}
                />
                <span className="text-white text-lg">
                  Drag photos & videos here
                </span>
                <label
                  htmlFor="photoNewPost"
                  className="px-3 py-2 rounded-xl bg-[#0095f6]  hover:bg-blue-400"
                >
                  <span className="text-white font-medium cursor-pointer">
                    Select from computer
                  </span>
                </label>
                <input
                  type="file"
                  id="photoNewPost"
                  onChange={handleChange}
                  hidden
                />
              </>
            ) : (
              <>
                <img className="h-full object-cover" src={urlPhotoNew} alt="" />
              </>
            )}
          </div>
          <div className="flex-1 flex flex-col ps-4 border-s border-gray-500">
            <div className="flex items-center gap-3">
              <img
                className="w-[30px] h-[30px] rounded-full object-cover"
                src={user?.photoUrl}
                alt=""
              />
              <span className="text-white font-semibold">{user.username}</span>
            </div>
            <TextArea
              showCount
              maxLength={2200}
              placeholder="Write a caption"
              className="mt-4"
              style={{
                height: 120,
                resize: "none",
              }}
            />
            <SmileOutlined className="mt-1 text-white text-xl cursor-pointer" />
            <div className="mt-3 flex items-center justify-between">
              <input
                className="bg-transparent text-white"
                type="text"
                placeholder="Add a location"
              />
              <EnvironmentOutlined className="text-white text-xl" />
            </div>
            <div className="mt-3 flex items-center justify-between cursor-pointer">
              <span className="text-white">Accessibility</span>
              <DownOutlined className="text-white text-xl" />
            </div>
            <div className="mt-3 flex items-center justify-between cursor-pointer">
              <span className="text-white">Advanced settings</span>
              <DownOutlined className="text-white text-xl" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalCreate;
