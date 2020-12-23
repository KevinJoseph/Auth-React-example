import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/AuthContext";

export default function Logout() {
  const { authData, setAuthData } = useContext(UserContext);

  const history = useHistory();
  //const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setAuthData({
      token: undefined,
      user: undefined,
    });
    localStorage.removeItem("auth-token")
    localStorage.removeItem("auth-user");
    history.push("/login")
  };

  return (
    <>
      {authData.token ? (
        <button onClick={logout}>Log out</button>
      ) : (
        <>
          <button onClick={login}>Log in</button>
        </>
      )}
    </>
  );
}
