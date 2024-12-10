import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const SideNav = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={{ width: "200px", backgroundColor: "#f0f0f0", padding: "1rem" }}>
      <nav>
        <ul>
          <li>
            <Link to="/">Landing</Link>
          </li>
          {!user ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={`/member/${user.id}/dashboard`}>Dashboard</Link>
              </li>
              <li>
                <button onClick={logout} style={{ all: "unset", cursor: "pointer", color: "blue" }}>
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
