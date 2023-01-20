import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { FormControl } from "../../common/Preloader/FormsControls/FormsControls";
import { maxLengthCreator, requiredField } from "../../utils/validators";

const maxLength100 = maxLengthCreator(100);

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElevtyns = state.dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} key={dialog.id} name={dialog.name} />
  ));

  let messagesElement = state.messages.map((messeg) => (
    <Message message={messeg.message} key={messeg.id} id={messeg.id} />
  ));

  let addNewMessage = (values) => {
    props.onAddMessage(values.newMessageBady);
  };

  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElevtyns}</div>
      <div className={s.messages}>{messagesElement}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={FormControl}
        validate={[requiredField, maxLength100]}
        name="newMessageBady"
        placeholder="Enter your message"
        types="textarea"
      />

      <div>
        <button className={s.buttonPrimariRecalor}>Add message</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
