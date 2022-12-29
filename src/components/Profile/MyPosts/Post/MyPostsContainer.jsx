import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../redux/profile-reducer";
import MyPosts from "../MyPosts";

const MyPostsContainer = (props) => {
  let postElements = props.profilePage.postData.map((post) => (
    <Post messege={post.messege} count={post.count} id={post.id} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    let action = addPostActionCreator();
    props.dispatch(action);
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return <MyPosts />;
};

export default MyPostsContainer;
