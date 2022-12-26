import React from "react";
import s from "./../Nav.module.css";
import { NavLink } from "react-router-dom";

const Friends = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className={s.FriendsIMg}>
      <NavLink to={path}>
        <img src={props.src} alt="alt" />
      </NavLink>
    </div>
  );
};

export default Friends;
