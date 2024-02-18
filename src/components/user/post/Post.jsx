import { EllipsisOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Likes from "./Likes";
import Comments from "./Comments";
import ContentPost from "./ContentPost";
import AddComment from "./AddComment";
import getFirebase from "../../../functions/getFIrebase";

const Post = () => {
  const [dataPost, setDataPost] = useState([]);

  useEffect(() => {
    const loaddingPost = async () => {
      const dataFirebase = await getFirebase("posts");
      const newDataArr = Object.values(dataFirebase);
      setDataPost(newDataArr);
    };
    loaddingPost();
  }, []);

  return (
    <>
      {dataPost?.map((item, index) => (
        <div
          key={index}
          className="w-full flex justify-center pb-4 border-b border-gray-800"
        >
          <div className="w-[470px] flex flex-col">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="w-[42px] h-[42px] cursor-pointer flex items-center justify-center rounded-full bg-gradient-to-br from-[#d301c5] to-[#ffc703]">
                  <Link>
                    <img
                      className="w-[38px] h-[38px] border-2 border-black rounded-full object-cover"
                      src={item.user.photoUrl}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Link className=" flex items-center justify-center ">
                    <span className="text-[13px] font-bold">
                      {item.user.username}
                    </span>
                  </Link>
                  <span>·</span>
                  <span className="text-[12px] text-[#a8a8a8]">
                    {item.created}
                  </span>
                </div>
              </div>
              <EllipsisOutlined className="cursor-pointer p-1 rounded-full hover:bg-gray-800" />
            </div>
            <div className="h-[468px] flex justify-center mt-3 border border-gray-800">
              <img
                className="rounded-sm h-full object-cover"
                src={item.photoPost}
                alt=""
              />
            </div>
            <Comments></Comments>
            <Likes likes={item.likes}></Likes>
            <ContentPost user={item.user} content={item.caption}></ContentPost>
            <AddComment></AddComment>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
