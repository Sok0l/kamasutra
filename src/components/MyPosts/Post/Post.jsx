import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://images.pexels.com/photos/3027175/pexels-photo-3027175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="ava"
      />
      {props.messege}
      <div>
        <span>{props.count} likes</span>
      </div>
    </div>
  );
};

export default Post;
