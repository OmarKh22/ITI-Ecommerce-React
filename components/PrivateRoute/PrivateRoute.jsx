import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const user = localStorage.getItem("user");
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
