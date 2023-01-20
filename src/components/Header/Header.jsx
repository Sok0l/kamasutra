import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  const navigate = useNavigate();
  const goNext = () => navigate(-1);
  const goForward = () => navigate(+1);

  return (
    <header className={s.header}>
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo" />
      <button onClick={goNext}>Go Next</button>
      <button onClick={goForward}>Go Forward</button>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>{" "}
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
