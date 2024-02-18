import React from "react";
import Story from "../post/Story";
import Post from "../post/Post";

const LeftSide = () => {
  return (
    <>
      <div className="flex flex-col max-w-[630px] w-full">
        <Story></Story>
        <Post></Post>
      </div>
    </>
  );
};

export default LeftSide;
