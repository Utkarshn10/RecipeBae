import React from "react";
import {Container} from "react-bootstrap";
import "./styles.css";

function Footer() {
  return (
    <Container className="footer-container">
      <h5 style={{fontSize: "1rem"}} className="footer-mark">
        &copy; {new Date().getFullYear()} Utkarsh Nagar. All Rights Reserved.
      </h5>
    </Container>
  );
}

export default Footer;
