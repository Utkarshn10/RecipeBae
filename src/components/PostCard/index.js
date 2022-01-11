import React from "react";
import {Card, Button} from "react-bootstrap";
import "./styles.css";
import {useState} from "react";

function PostCard({url, title, date, explanation}) {
  const [isLiked, updateLike] = useState(false);
  const [button, updateButton] = useState("btn btn-primary");

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
        <button
          padding-left="0.5rem"
          className={button}
          onClick={handleLike}
          disabled={isLiked}
        >
          Like
        </button>
        <button
          padding-left="0.5rem"
          class={button}
          onClick={handleLike}
          disabled={!isLiked}
        >
          Unlike
        </button>
      </div>
    </div>
  );
}

export default PostCard;
