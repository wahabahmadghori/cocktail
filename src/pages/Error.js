import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div className="error-page section">
        <div className="error-container">
          <h3>
          Opps, It's A Dead End
          </h3>
          <Link to="/" className="btn btn-primary">
            Go To Home
          </Link>
          </div>
      </div>
    </>
  );
}
