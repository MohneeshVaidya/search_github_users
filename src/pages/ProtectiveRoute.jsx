import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectiveRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth0();

  if (!isAuthenticated || !user) return <Navigate to="/login" />;

  return children;
};

export default ProtectiveRoute;
