import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="form">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6} lg={12}>
          <h1>Contact Us</h1>
          <Form className="mt-4">
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email"></Form.Control>
            </Form.Group>
            <Form.Group controlId="text">
              <Form.Label>What is this about ?</Form.Label>
              <Form.Control as="select">
                <option>Sales</option>
                <option>Services</option>
                <option>General Enquiry</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="Password">
              <Form.Label>Tell us more</Form.Label>
              <Form.Control as="textarea" rows={4}></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
          <Link to="">
            <i className="fab fa-facebook fa-2x"></i>
          </Link>
          <Link to="">
            <i className="fab fa-twitter fa-2x"></i>
          </Link>
          <Link to="">
            <i className="fab fa-instagram fa-2x"></i>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
