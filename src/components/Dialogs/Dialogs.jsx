import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  console.log(props.dialogsData);
  let dialogsElevtyns = props.dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));

  let messagesElement = props.messages.map((messeg) => (
    <Message message={messeg.message} id={messeg.id} />
  ));

  let textMessage = React.createRef();

  let addMessage = () => {
    let text = textMessage.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElevtyns}</div>
      <div className={s.messges}>{messagesElement}</div>
      <textarea ref={textMessage}></textarea>
      <button onClick={addMessage}></button>
    </div>
  );
};

export default Dialogs;
