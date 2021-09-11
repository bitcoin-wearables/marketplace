import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <Link
        to="/"
        style={{ padding: "10px", marginTop: "20px" }}
        className="btn"
      >
        Back home
      </Link>
    </div>
  );
};

export default Error;
