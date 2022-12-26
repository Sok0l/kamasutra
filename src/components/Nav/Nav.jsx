import React from "react";
import s from "./Nav.module.css";
import Friends from "./Friends/Friends";

const NavBar = (props) => {
  console.log(props.sidebar.friends);
  let friendImg = () => {
    props.sidebar.friends.map((elem) => (
      <Friends src={elem.src} path={elem.id} />
    ));
  };
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={s.item}>
        <a href="/dialogs">Messeges</a>
      </div>
      <div className={s.item}>
        <a href="/news">News</a>
      </div>
      <div className={s.item}>
        <a href="/music">Music</a>
      </div>
      <div className={s.item}>
        <a href="/settings">
          <h3>Settings</h3>
        </a>
      </div>
      <div className={s.item}>
        <a href="/friends">
          <h2>Friends</h2>
          {friendImg}
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
