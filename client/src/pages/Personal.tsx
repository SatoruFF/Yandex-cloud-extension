import React, { useEffect, useState } from "react";
import "../style/personal.scss";
import avatar from "../assets/avatar.jpg";
import MyButton from "../components/UI/MyButton";
import MyStatus from "../components/UI/MyStatus";
import MyLoader from "../components/UI/MyLoader";
import { NavLink } from "react-router-dom";
import { GROUP_ROUTE } from "../utils/consts";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchUsers } from "../store/actionCreators";

const Personal = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, userError, currentUser }: any = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="personal__wrapper">
      <div className="left__sidebar animate__animated animate__backInLeft">
        <div className="sidebar__avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="status__title">
          <p>name:</p>
          <MyStatus> {currentUser.firstName} </MyStatus>
        </div>
        <div className="status__title">
          <p>status:</p>
          <MyStatus> {currentUser.role} </MyStatus>
        </div>
        <div className="status__title">
          <p>budget:</p>
          <MyStatus> {currentUser.budget} </MyStatus>
        </div>

        {currentUser.role == "ADMIN" ? 
          <MyButton> edit </MyButton>
         : 
          <div className="void"></div>
        }
        
      </div>

      <div className="banner first">
        {userError && <h1>${userError} is happened...</h1>}
        {isLoading || !users.length ? (
          <MyLoader />
        ) : (
          <div className="first">
            <div className="banner__first__title">
              <h1>My group</h1>
              <h1>Group Leader : {users[0].name}</h1>
            </div>
            <p>other users in this group:</p>
            {users.map((elem: any) => (
              <MyStatus key={elem.id}>{elem.firstName}</MyStatus>
            ))}
          </div>
        )}
      </div>

      <div className="banner second">
        {userError && <h1>error ${userError} is happened...</h1>}
        {isLoading || !users.length ? (
          <MyLoader />
        ) : (
          <div className="second">
            {currentUser.role == "ADMIN" ? (
              <div className="admin">
                <MyButton>
                  <NavLink to={GROUP_ROUTE}>Full info about this group</NavLink>
                </MyButton>
                <MyButton>Create new group</MyButton>
              </div>
            ) : (
              <div className="default"></div>
            )}

            <p>Group character:</p>
            <MyStatus>Your group name: {users[1].firstName}</MyStatus>
            <MyStatus>Your id: {users[1].id}</MyStatus>
            <MyStatus>user count: {users.length} Users</MyStatus>
          </div>
        )}
      </div>
    </div>
  );
};

export default Personal;
