import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
const Private = (props) => {
  const loggedInDetails = useContext(AuthContext);
  console.log(loggedInDetails);
  return loggedInDetails.isLoggedIn ? (
    <props.Component />
  ) : (
    <Navigate to="/login" />
  );
};

export default Private;
