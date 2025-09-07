import React from "react";
import HomePage from "../Components/HomePage";
import { useNavigate } from "react-router-dom";

const ProtectRoute = ({ isAuth, child }) => {
  const Navigate = useNavigate();

  return <>{isAuth ? child : <Navigate to="/login" />}</>;
};
export default ProtectRoute;
