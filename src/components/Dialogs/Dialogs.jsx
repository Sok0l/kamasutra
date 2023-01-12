import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElevtyns = state.dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} key={dialog.id} name={dialog.name} />
  ));

  let messagesElement = state.messages.map((messeg) => (
    <Message message={messeg.message} key={messeg.id} id={messeg.id} />
  ));

  let textMessage = React.createRef();

  let onAddMessage = () => {
    props.onAddMessage();
  };
  let onMessageChange = (event) => {
    let text = event.target.value;
    props.onMessageChange(text);
  };

  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElevtyns}</div>
      <div className={s.messages}>{messagesElement}</div>
      <div>
        <textarea
          placeholder="Enter your message"
          ref={textMessage}
          onChange={onMessageChange}
          value={state.newTextMessages}
        />
      </div>
      <div>
        <button className={s.buttonPrimariRecalor} onClick={onAddMessage}>
          Add message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
