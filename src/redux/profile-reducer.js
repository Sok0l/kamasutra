const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReduser = (state, action) => {
  if (action.type === "ADD-POST") {
    let newPost = {
      id: 5,
      messege: state.newPostText,
      count: 0,
    };
    state.postData.push(newPost);
    state.newPostText = "";
  } else if (action.type === "UPDATE-NEW-POST-TEXT") {
    state.newPostText = action.newText;
  }
  return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReduser;
