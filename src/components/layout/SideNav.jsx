import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/logo.png";
import "./navigation.css";
import SideNavItem from "./SideNavItem";

const SideNav = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="side-nav p-3" style={{ backgroundColor: "#f0f0f0", borderRight: "3px solid blue" }}>
      <nav>
        <div className="side-nav-logo">
          <Link to="/"><img src={logo} alt="App Logo" className="side-nav-logo-img" /></Link>
        </div>
        <ul className="nav flex-column justify-content-center align-items-center">
          <li className="nav-item mt-3">
            <SideNavItem label="Home" path="/" icon="home" />
          </li>
          {!user ? (
            <>
              <li className="nav-item">
                <SideNavItem label="Login" path="/login" icon="login" />
              </li>
              <li className="nav-item">
                <SideNavItem label="Register" path="/register" icon="person_add" />
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <SideNavItem label="Dashboard" path={`/member/${user.id}/dashboard`} icon="dashboard" />
              </li>
              <li className="nav-item">
                <SideNavItem label="Profile" path={`/member/${user.id}/profile`} icon="person" />
              </li>
              <li className="nav-item">
                <button className="btn btn-danger w-100" onClick={logout} style={{ all: "unset", cursor: "pointer", color: "blue" }}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
