import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/YLogo.png";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { exitAuthFunc } from "../store/slices/userSlice";
import "../style/Navbar.scss";
import {
  LOGIN_ROUTE,
  WELCOME_ROUTE,
  PERSONAL_ROUTE,
  EDIT_ROUTE,
  GROUP_ROUTE,
} from "../utils/consts";
import MyButton from "./UI/MyButton";

const MyNavbar = () => {
  const { isAuth }: any = useAppSelector((state) => state.userReducer);
  // const { exitAuthFunc }: any = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const exit = () => {
    dispatch(exitAuthFunc())
    navigate(WELCOME_ROUTE)
    localStorage.removeItem('token')
  }

  return isAuth ? (
    <div className="wrapper ex">
      <div className="logo">
        <NavLink to={PERSONAL_ROUTE}>
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <NavLink to={LOGIN_ROUTE}>
        <MyButton onClick={exit}>exit</MyButton>
      </NavLink>
    </div>
  ) : (
    <div className="wrapper">
      <div className="logo">
        <NavLink to={WELCOME_ROUTE}>
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className="nav">
        <NavLink to={LOGIN_ROUTE}>
          <MyButton>log in</MyButton>
        </NavLink>
      </div>
    </div>
  );
};

export default MyNavbar;
