import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElevtyns = props.dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));

  let messagesElement = props.messages.map((messeg) => (
    <Message message={messeg.message} id={messeg.id} />
  ));

  let textMessage = React.createRef();

  let addMessage = () => {
    props.dispatch({ type: "ADD-MESSAGE" });
  };
  let onMessageChange = () => {
    let text = textMessage.current.value;
    props.dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", newMessage: text });
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElevtyns}</div>
      <div className={s.messges}>{messagesElement}</div>
      <textarea
        ref={textMessage}
        onChange={onMessageChange}
        value={props.newTextMessages}
      />
      <button className={s.buttonPrimariRecalor} onClick={addMessage}>
        Add message
      </button>
    </div>
  );
};

export default Dialogs;
