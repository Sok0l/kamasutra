import React from "react";
import s from "./MyPosts.module.css";
import Post from "../MyPosts/Post/Post";

const MyPosts = (props) => {
  let postElements = props.data.map((post) => (
    <Post messege={post.messege} count={post.count} id={post.id} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    alert(newPostElement.current.value);
  };
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}></div>
      {postElements}
    </div>
  );
};

export default MyPosts;
