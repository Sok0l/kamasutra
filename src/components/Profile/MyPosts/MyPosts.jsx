import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={"textarea"} />
      </div>
      <div>
        <button className={s.buttonPrimariRecalor}>Add Post</button>
      </div>
    </form>
  );
};

const WAddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

const MyPosts = (props) => {
  let postElements = props.profilePage.postData.map((post) => (
    <Post
      messege={post.messege}
      count={post.count}
      key={post.id}
      id={post.id}
    />
  ));

  let onAddPost = (values) => {
    props.onAddPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <WAddNewPostForm onSubmit={onAddPost} />
      <div className={s.profilePage}></div>
      {postElements}
    </div>
  );
};

export default MyPosts;
