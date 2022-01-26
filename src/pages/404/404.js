import React from "react";
import image from "../../images/error.jpg";
function Error() {
  return (
    <div>
      <div className="error-heading">
        <img height="30%" src={image} />
        <h1>Sorry, no meals were found</h1>
      </div>
    </div>
  );
}

export default Error;
