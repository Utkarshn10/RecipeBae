import React from "react";
import {Card, Button} from "react-bootstrap";
import "./styles.css";
import {useState} from "react";

function PostCard({url, title, date, explanation}) {
  const [isLiked, updateLike] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      // updateButton(() => (button = "btn btn-success"));
      updateLike(true);
    } else {
      updateLike(false);
    }
  };
  return (
    <div className="card">
      <div
        className="bg-image hover-overlay ripple"
        data-mdb-ripple-color="light"
      >
        <img src={url} height="40px" width="100%" class="img-fluid" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{explanation}</p>
        <div>
          <button
            className="like btn btn-primary"
            onClick={handleLike}
            disabled={isLiked}
          >
            Like
          </button>
          <button
            className="unlike btn btn-primary"
            onClick={handleLike}
            disabled={!isLiked}
          >
            Unlike
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
