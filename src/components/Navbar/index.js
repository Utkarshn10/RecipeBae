import React from "react";
import {Navbar, Container} from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"> Recipe Bae</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
