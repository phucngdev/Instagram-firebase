import { EllipsisOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Likes from "./Likes";
import Comments from "./Comments";
import ContentPost from "./ContentPost";
import AddComment from "./AddComment";

const Post = () => {
  return (
    <>
      <div className="w-full flex justify-center pb-4 border-b border-gray-800">
        <div className="w-[470px] flex flex-col">
          <div className="flex items-center justify-between text-white">
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
              <div className="flex items-center gap-2">
                <Link className=" flex items-center justify-center ">
                  <span className="text-[13px] font-bold">ANvbsbf</span>
                </Link>
                <span>·</span>
                <span className="text-[12px] text-[#a8a8a8]">
                  6:30 12/12/2022
                </span>
              </div>
            </div>
            <EllipsisOutlined className="cursor-pointer p-1 rounded-full hover:bg-gray-800" />
          </div>
          <div className="h-[468px] flex justify-center mt-3 border-x border-gray-800">
            <img
              className="rounded-sm h-full object-cover"
              src="https://scontent.cdninstagram.com/v/t39.30808-6/427642404_18421098388027730_7880305453225096293_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE2NTUuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=VW0IfeyKkt8AX93K5MX&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI5OTY4MDcwNzU1MDk4MzkwNg%3D%3D.2-ccb7-5&oh=00_AfAF-_hNmauFC_87qThgFNdtvFXWng4yBRSXIWNh_biF3Q&oe=65D59509&_nc_sid=10d13b"
              alt=""
            />
          </div>
          <Comments></Comments>
          <Likes></Likes>
          <ContentPost></ContentPost>
          <AddComment></AddComment>
        </div>
      </div>
    </>
  );
};

export default Post;
