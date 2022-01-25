import React from "react";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand> Meals</Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
