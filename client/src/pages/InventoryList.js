import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Row, Col, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const InventoryList = () => {
  return (
    <>
      <Row className="m-4">
        <Col>
          <h2>Inventory</h2>
        </Col>

        <Col className="text-right">
          <Link className="btn btn-light" to="/addtransaction">
            <i className="fas fa-plus"></i> Add Inventory
          </Link>
        </Col>
      </Row>
      <Row className="align-items-center m-4">
        <Col>
          <Table stripped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Type (Dr/Cr)</th>
                <th>Date</th>
                <th>Category</th>
                <th> Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <LinkContainer to="">
                    <Button className="btn-sm" varaint="light">
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>

              <tr>
                <td colspan="5">Total </td>
                <td colspan="2"></td>
              </tr>
            </tbody>
          </Table>
          <Button className="btn-sm" varaint="light">
            Print Inventory List
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default InventoryList;
