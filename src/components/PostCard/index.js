import React, {useState} from "react";
import {Card} from "react-bootstrap";
import "./styles.css";
import MealModal from "../MealModal";

function PostCard({
  strCategory,
  strInstructions,
  strArea,
  strYoutube,
  strMealThumb,
  strMeal,
}) {
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
        <MealModal
          title={strMeal}
          description={strInstructions}
          video={strYoutube}
          category={strCategory}
        />
      </Card.Body>
    </Card>
  );
}

export default PostCard;
