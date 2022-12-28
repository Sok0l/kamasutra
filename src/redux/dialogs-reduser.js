const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReduser = (state, action) => {
  if (action.type === "ADD-MESSAGE") {
    let newMessage = {
      id: 4,
      message: state.newTextMessages,
      ava:
        "https://decider.com/wp-content/uploads/2020/12/AVA-NETFLIX-REVIEW.jpg?quality=75&strip=all",
    };
    state.newTextMessages = "";
    state.messages.push(newMessage);
  } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
    state.newTextMessages = action.newMessage;
  }
  return state;
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});

export default dialogsReduser;
