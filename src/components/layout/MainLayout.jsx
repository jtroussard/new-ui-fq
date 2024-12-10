import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const MainLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideNav />
      <div style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
