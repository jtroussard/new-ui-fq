import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    const mockUser = { id: 1, username: "mm_sparrow", userTag: "msparrow1" };
    login(mockUser);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login as Mock User</button>
    </div>
  );
};

export default LoginPage;
