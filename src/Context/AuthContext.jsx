import React, { createContext, useState } from "react";
import { login } from "../features/accountSlice";
import { useDispatch, useSelector } from "react-redux";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const { isAuthenticated } = useSelector((state) => state.account);
  const signin = (form) => {
    dispatch(login(form));
  };

  return (
    <AuthProvider.Provider value={{ user, signin, isAuthenticated }}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthProvider;
