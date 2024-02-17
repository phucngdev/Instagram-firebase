import { SmileOutlined } from "@ant-design/icons";
import React from "react";

const AddComment = () => {
  return (
    <>
      <div className="flex items-center mt-1">
        <input
          type="text"
          className="addcomment flex-1 bg-transparent text-white text-sm "
          placeholder="Add a comment…"
        />
        <SmileOutlined
          style={{ fontSize: "15px" }}
          className="cursor-pointer text-[#a8a8a8]"
        />
      </div>
    </>
  );
};

export default AddComment;
