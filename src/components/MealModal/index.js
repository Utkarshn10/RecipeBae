import React, {useState, useEffect} from "react";
import {Modal, Button} from "react-bootstrap";

function MealModal({strMeal, strInstructions}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Recipe
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>{strMeal}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>{strMeal}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MealModal;
