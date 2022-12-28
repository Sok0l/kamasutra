import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";
// import Friends from "./Friends/Friends";

const NavBar = (props) => {
  // let friendImg = () => {
  //   props.sidebar.friends.map((elem) => (
  //     <Friends src={elem.src} path={elem.id} />
  //   ));
  // };
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile">Profile </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs">Messeges </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news">News </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music">Music </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings">
          <h3>Settings</h3>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/friends">
          <h2>Friends</h2>
          {/* {friendImg} */}
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
