import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { user, isLoading } = useContext(AuthContext);

  console.log("ProtectedRoute rendered");
  if (isLoading) {
    console.log("ProtectedRoute: Auth state is loading");
    return <p>Loading...</p>; // Or a loading spinner
  }

  console.log("ProtectedRoute: User is", user);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
