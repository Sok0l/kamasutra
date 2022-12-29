import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "./../../redux/dialogs-reduser";

const Dialogs = (props) => {
  let dialogsElevtyns = props.dialogsPage.dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));

  let messagesElement = props.dialogsPage.messages.map((messeg) => (
    <Message message={messeg.message} id={messeg.id} />
  ));

  let textMessage = React.createRef();

  let addMessage = () => {
    let action = addMessageActionCreator();
    props.dispatch(action);
  };
  let onMessageChange = (event) => {
    let text = event.target.value;
    // let text = textMessage.current.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElevtyns}</div>
      <div className={s.messages}>{messagesElement}</div>
      <div>
        <textarea
          placeholder="Enter your message"
          ref={textMessage}
          onChange={onMessageChange}
          value={props.dialogsPage.newTextMessages}
        />
      </div>
      <div>
        <button className={s.buttonPrimariRecalor} onClick={addMessage}>
          Add message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
