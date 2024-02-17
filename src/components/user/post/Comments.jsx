import React, { useState } from "react";
import {
  BookOutlined,
  CommentOutlined,
  HeartFilled,
  HeartOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Modal, Tooltip } from "antd";
const Comments = () => {
  const [like, setLike] = useState(false);
  const [isScaled, setIsScaled] = useState(false);
  const handleLike = () => {
    setLike(!like);
    setIsScaled(true);
    setTimeout(() => {
      setIsScaled(false);
    }, 200);
  };
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="text-white flex items-center justify-between my-4">
        <div className="flex items-center gap-3">
          <Tooltip title="Like">
            {like ? (
              <HeartOutlined
                onClick={handleLike}
                style={{
                  fontSize: "23px",
                  transition: "transform 0.3s, font-size 0.3s",
                  transform: isScaled ? "scale(1.2)" : "scale(1)",
                }}
                className="cursor-pointer hover:text-[#a8a8a8]"
              />
            ) : (
              <HeartFilled
                onClick={handleLike}
                style={{
                  fontSize: "23px",
                  transition: "transform 0.3s, font-size 0.3s",
                  transform: isScaled ? "scale(1.2)" : "scale(1)",
                }}
                className="cursor-pointer text-[#ff2f40] "
              />
            )}
          </Tooltip>
          <Tooltip title="Comment">
            <CommentOutlined
              onClick={() => setOpen(true)}
              style={{ fontSize: "23px" }}
              className="cursor-pointer hover:text-[#a8a8a8]"
            />
          </Tooltip>
          <Modal
            title="Modal 1000px width"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
            footer={false}
          >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
          <Tooltip title="Share Post">
            <SendOutlined
              style={{ fontSize: "23px" }}
              className="cursor-pointer hover:text-[#a8a8a8]"
            />
          </Tooltip>
        </div>
        <Tooltip title="Save">
          <BookOutlined
            style={{ fontSize: "23px" }}
            className="cursor-pointer hover:text-[#a8a8a8]"
          />
        </Tooltip>
      </div>
    </>
  );
};

export default Comments;
