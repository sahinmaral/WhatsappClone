import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, isLoading, user, redirectPath = "/auth/login" }) {
  if (!user && !isLoading) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}

export default ProtectedRoute;
