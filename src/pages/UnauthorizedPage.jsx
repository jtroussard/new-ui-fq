import React from "react";
import { Link } from "react-router-dom";

const UnauthorizedPage = () => {
  console.log("UnauthorizedPage: rendered");
  return (
    <div>
      <h1>Unauthorized Access</h1>
      <p>You do not have permission to view this page.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default UnauthorizedPage;
