import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";

function MealModal({title, description, video}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button class="btn btn-danger" onClick={handleShow}>
        Recipe
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>{description}</Modal.Body> */}
        <Modal.Body>Procedure : {description}</Modal.Body>
        <Modal.Body>
          <button class="btn btn-outline-danger" href={video}>
            Video
          </button>
        </Modal.Body>
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
