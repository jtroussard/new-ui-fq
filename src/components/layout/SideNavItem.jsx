import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const SideNavItem = ({ label, path, icon }) => (
  <li className="nav-item">
    <Link to={path} className="nav-link d-flex align-items-center text-dark">
      <i className="material-icons me-2">{icon}</i>
      {label}
    </Link>
  </li>
);

export default SideNavItem;