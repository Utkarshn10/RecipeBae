import React, {useState, useEffect} from "react";
import {Modal, Button} from "react-bootstrap";

function MealModal({title, description, ingredients}) {
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
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>{description}</Modal.Body> */}
        <Modal.Body>Procedure : {description}</Modal.Body>
        <Modal.Body>Video : {ingredients}</Modal.Body>
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
