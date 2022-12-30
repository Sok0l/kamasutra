const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postData: [
    { id: 1, messege: "Hi, how are you?", count: 15 },
    { id: 2, messege: "It's my first post", count: 30 },
  ],
  newPostText: "it-kamasutra",
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: 5,
            messege: state.newPostText,
            count: 0,
          },
        ],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default profileReduser;
