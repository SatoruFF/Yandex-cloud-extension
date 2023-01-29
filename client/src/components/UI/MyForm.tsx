import React, { useContext, useState } from "react";
import MyButton from "./MyButton";
import "../../style/MyForm.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { LOGIN_ROUTE, PERSONAL_ROUTE } from "../../utils/consts";
import userSlice, {
  isAuthFunc,
  setCurrentUser,
  setToken,
} from "../../store/slices/userSlice";
import { log, reg } from "../../http/auth";

const MyForm = () => {
  const dispatch = useAppDispatch();

  // const { currentUser }: any = useAppSelector((state) => state.userReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("USER");
  const [budget, setBudget] = useState(0);

  const navigate = useNavigate();

  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const authoriz: any = async (e: any) => {
    e.preventDefault();
    try {
      if (email == "" || password == "") {
        return alert("You havent entered anything");
      }
      if (isLogin) {
        const response: any = await log(email, password);
        dispatch(setCurrentUser({ ...response }));
      } else {
        const response: any = await reg(
          firstName,
          lastName,
          email,
          password,
          role,
          budget
        );
        dispatch(setCurrentUser({ ...response }));
      }
      dispatch(isAuthFunc());
      navigate(PERSONAL_ROUTE);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <form onSubmit={authoriz} className="myForm">
      {isLogin ? (
        <div className="log">
          <input
            type="email"
            placeholder="input email here..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="input password here..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <MyButton>submit</MyButton>
        </div>
      ) : (
        <div className="reg">
          <input
            name="firstName"
            type="text"
            placeholder="input firstName here..."
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            name="lastName"
            type="lastName"
            placeholder="input lastName here..."
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="input email here..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="input password here..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <input
            name="role"
            type="text"
            placeholder="input role here..."
            value={role}
            onChange={(e) => setRole(e.target.value)}
          /> */}
          <div className="selectRole" onClick={(e) => e.preventDefault()}>
            <MyButton onClick={() => setRole("USER")}>USER</MyButton>
            <MyButton onClick={() => setRole("ADMIN")}>ADMIN</MyButton>
          </div>
          <input
            name="budget"
            type="text"
            placeholder="input budget here..."
            value={budget}
            onChange={(e) => setBudget(parseInt(e.target.value))}
          />
          <MyButton>submit</MyButton>
        </div>
      )}
    </form>
  );
};

export default MyForm;
