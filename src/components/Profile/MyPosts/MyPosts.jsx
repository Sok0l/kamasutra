import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.profilePage.postData.map((post) => (
    <Post messege={post.messege} count={post.count} id={post.id} />
  ));
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.onAddPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.profilePage.newPostText}
          />
        </div>
        <div>
          <button className={s.buttonPrimariRecalor} onClick={onAddPost}>
            Add Post
          </button>
        </div>
      </div>
      <div className={s.profilePage}></div>
      {postElements}
    </div>
  );
};

export default MyPosts;
