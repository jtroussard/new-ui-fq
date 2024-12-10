import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // New loading state

  useEffect(() => {
    console.log("AuthProvider: useEffect: checking for user in localStorage");
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      console.log("AuthProvider: useEffect: found user, setting user state");
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false); // Finished initializing
  }, []);

  const login = (mockUser) => {
    console.log("AuthProvider: login: setting user state to", mockUser);
    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
  };

  const logout = () => {
    console.log("AuthProvider: logout: clearing user state");
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
