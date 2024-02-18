import React from "react";
import { Link } from "react-router-dom";

const ContentPost = ({ user, content }) => {
  return (
    <>
      <div className="mt-1">
        <span className="text-sm text-[#f5f5f5] font-normal">
          <Link className="font-bold text-white me-2">{user.username}</Link>
          {content}
        </span>
      </div>
    </>
  );
};

export default ContentPost;
