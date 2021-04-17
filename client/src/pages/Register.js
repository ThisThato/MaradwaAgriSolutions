import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container className="form">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6} lg={12}>
          <h1>Sign Up</h1>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email"></Form.Control>
            </Form.Group>
            <Form.Group controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" placeholder="Enter Password"></Form.Control>
            </Form.Group>
            <Form.Group controlId="Password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="Password" placeholder="Confirm Password"></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Sign up
            </Button>
            <Row className="py-3">
              <Col>
                Already Have an Account?<Link to="login"> Login</Link>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
