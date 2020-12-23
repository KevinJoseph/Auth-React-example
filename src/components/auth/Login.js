import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Axios from "axios";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setAuthData } = useContext(AuthContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      
      const loginRes = await Axios.post(
        "http://localhost:4000/api/auth/signin",
        loginUser
      );
  
      setAuthData({
        token: loginRes.data.token,
        user: loginRes.data.user.displayName,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      // save user localstorage
      localStorage.setItem("auth-user",loginRes.data.user.displayName)
      history.push("/");
      
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <div className="page">
      <h2>Log in</h2>

      <form className="form" onSubmit={submit}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}
