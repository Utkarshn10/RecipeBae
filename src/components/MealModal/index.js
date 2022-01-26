import React, {useState, Fragment} from "react";
import {Modal, Button} from "react-bootstrap";
import "./styles.css";
import ReactPlayer from "react-player/lazy";

function MealModal({title, description, video, category}) {
  const [show, setShow] = useState(false);
  const [desc, setDesc] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    handleProcedure();
  };

  function handleProcedure() {
    setDesc(
      description.split(".").map((value, index) => {
        return (
          <Fragment key={index}>
            • {value}
            <br />
          </Fragment>
        );
      })
    );
  }
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
          <h4>Procedure :</h4> {desc}
        </Modal.Body>
        <Modal.Body>
          <ReactPlayer width="100%" url={video}></ReactPlayer>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default MealModal;
