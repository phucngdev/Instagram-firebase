import { PlusOutlined } from "@ant-design/icons";
import React from "react";

const Story = (datatory) => {
  return (
    <>
      {datatory.length > 0 ? (
        datatory?.map((item, index) => (
          <div
            key={index}
            className="flex gap-2 w-full h-[101px] overflow-x-auto mt-4 mb-6 py-2"
          >
            <div className="flex justify-between flex-col items-center w-[66px] h-[85px]">
              <div className="w-[64px] h-[64px] cursor-pointer flex items-center justify-center rounded-full bg-gradient-to-br from-[#d301c5] to-[#ffc703]">
                <img
                  className="w-[60px] h-[60px] border-2 border-black rounded-full object-cover"
                  src={item.storyUrl}
                  alt=""
                />
              </div>
              <div className="max-w-[74px] overflow-hidden whitespace-nowrap text-[12px] text-white">
                {item.name}
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="flex gap-2 w-full h-[101px] overflow-x-auto mt-4 mb-6 py-2">
            <div className="flex justify-between flex-col items-center w-[66px] h-[85px]">
              <div className="w-[64px] h-[64px] cursor-pointer text-white flex items-center justify-center rounded-full bg-gradient-to-br from-[#d301c5] to-[#ffc703]">
                <PlusOutlined />
              </div>
              <div className="max-w-[74px] overflow-hidden whitespace-nowrap text-[12px] text-white">
                Thêm mới
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Story;
