import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../redux/profile-reducer";

const MyPosts = (props) => {
  let postElements = props.profilePage.postData.map((post) => (
    <Post messege={post.messege} count={post.count} id={post.id} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
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
          <button className={s.buttonPrimariRecalor} onClick={addPost}>
            Add Post
          </button>
        </div>
      </div>
      <div className={s.posts}></div>
      {postElements}
    </div>
  );
};

export default MyPosts;
