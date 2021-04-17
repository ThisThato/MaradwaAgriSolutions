import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const TransactionCreate = () => {
  return (
    <>
      <Row className="container mt-5  mx-auto">
        <Col>
          <h2>Add Transaction</h2>
        </Col>
        <Col className="text-right">
          <Link className="btn btn-light" to="/transactions">
            <i className="fas fa-arrow-left"></i> Go back
          </Link>
        </Col>
      </Row>
      <Container className="form mt-3">
        <Form>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control type="date"></Form.Control>
          </Form.Group>
          <Form.Group controlId="text">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select">
              <option>Inventory</option>
              <option>Variable Expenses</option>
              <option>Salaries</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Transaction Description</Form.Label>
            <Form.Control type="text" placeholder="Enter transaction description"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Amount (R)</Form.Label>
            <Form.Control type="number" placeholder="Enter amount"></Form.Control>
          </Form.Group>
        </Form>

        <Button type="submit" variant="primary">
          Add
        </Button>
      </Container>
    </>
  );
};

export default TransactionCreate;
