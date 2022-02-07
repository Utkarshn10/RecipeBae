import React from "react";
import image from "../../images/error.webp";

// Page to show Error for invalid searches
function Error() {
  return (
    <div>
      <div className="error-heading">
        <img width="100%" alt="error" height="30%" src={image} />
        <h1>Sorry, no meals were found</h1>
      </div>
    </div>
  );
}

export default Error;
