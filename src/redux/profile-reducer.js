import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";

const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-SET-STATUS-PROFILE";

let initialState = {
  postData: [
    { id: 1, messege: "Hi, how are you?", count: 15 },
    { id: 2, messege: "It's my first post", count: 30 },
  ],

  profile: null,
  status: "",
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
            messege: action.newPostText,
            count: 0,
          },
        ],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  debugger;
  profileAPI.updateStatus(status).then((response) => {
    if ((response.data.resultCode = 0)) dispatch(setStatus(status));
  });
};

export default profileReduser;
