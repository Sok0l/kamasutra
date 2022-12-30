import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return { profilePage: state.profilePage };
};
let mapDispathcToProps = (dispatch) => {
  return {
    onAddPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

let MyPostsContainer = connect(mapStateToProps, mapDispathcToProps)(MyPosts);

export default MyPostsContainer;
