import React from "react";
import s from "../ProfileInfo.module.css";

const ProfileStatus = (props) => {
  return (
    <>
      <div>
        <sapn>{props.status} </sapn>
      </div>
      <div>
        <input>{props.status} </input>
      </div>
    </>
  );
};

export default ProfileStatus;
