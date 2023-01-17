import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return { profilePage: state.profilePage };
};
let mapDispathcToProps = (dispatch) => {
  return {
    onAddPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};

let MyPostsContainer = connect(mapStateToProps, mapDispathcToProps)(MyPosts);

export default MyPostsContainer;
