import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={s.dialog}>
      <img
        src="https://decider.com/wp-content/uploads/2020/12/AVA-NETFLIX-REVIEW.jpg?quality=75&strip=all"
        alt="alt"
      />
      {props.message}
    </div>
  );
};

export default Message;
