import React from "react";
import {Card, Button} from "react-bootstrap";
import "./styles.css";
import {useState} from "react";

function PostCard({strCategory, strArea, strMealThumb, strMeal}) {
  const [isLiked, updateLike] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      updateLike(true);
    } else {
      updateLike(false);
    }
  };

  return (
    <Card style={{width: "18rem"}}>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        <Card.Text>{strArea}</Card.Text>
        <Button variant="primary">See More</Button>
      </Card.Body>
    </Card>
  );
}

export default PostCard;
