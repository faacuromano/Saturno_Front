import React from "react";
import { createContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const handleLogin = (user) => {
    setAuth(user);
  };

  const data = { auth, handleLogin };
  return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
};

export { LoginProvider };
export default LoginContext;
