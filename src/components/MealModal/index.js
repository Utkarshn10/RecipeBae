import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";
import "./styles.css";

function MealModal({title, description, video, category}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn btn-danger" onClick={handleShow}>
        Recipe
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="row">
              <div className="col">{title}</div>
            </div>
            <div className="row">
              <h4 className="col-highlight" style={{fontSize: "1rem"}}>
                {category}
              </h4>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Procedure :</h4> {description}
        </Modal.Body>
        <Modal.Body>
          <Button variant="danger" href={video}>
            Video
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default MealModal;
