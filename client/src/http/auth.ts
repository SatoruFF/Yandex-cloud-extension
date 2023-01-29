import axios from "axios";
import jwtDecode from "jwt-decode";

export const log = async (email: string, password: string) => {
    const {data}: any = await axios.post("http://localhost:8080/auth/login", {
      email: email,
      password: password,
    });
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token);
};

export const reg = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  role: string,
  budget: number
) => {
    const {data}: any = await axios.post(
      "http://localhost:8080/auth/registration",
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        role: role,
        budget: budget,
      }
    );
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token);
};
