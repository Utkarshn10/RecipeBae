import React from "react";
import {Form, Button} from "react-bootstrap";

function Signup() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCheckBox">
          <Form.Check type="checkbox" placeholder="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Singn Up
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
