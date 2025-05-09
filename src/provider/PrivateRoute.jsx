import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Navigate } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) return <Loading />;

  // if -> user is logged in then return children
  if (user && user?.email) return children;

  // else -> return login page
  return <Navigate to="/auth/login" />;
};

export default PrivateRoute;
