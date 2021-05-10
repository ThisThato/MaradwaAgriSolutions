import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import moment from "moment";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listTransactionDetails } from "../actions/transactionActions";

const TransactionDetails = ({ history, match }) => {
  const dispatch = useDispatch();

  const transactionDetails = useSelector((state) => state.transactionDetails);
  const { loading, error, transaction } = transactionDetails;

  const transactionId = match.params.id;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listTransactionDetails(transactionId));
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo, transactionId]);

  return (
    <>
      <Row className="align-items-center m-4">
        <Col>
          <h3>Transaction Details</h3>
        </Col>
        <Col className="text-right">
          <Link className="btn btn-light my-4" to="/transactions">
            <i className="fas fa-arrow-left"></i> Go back
          </Link>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date recorded</th>
                <th>Recorded by</th>
                <th>Qty</th>
                <th>Category</th>
                <th>Transaction Description</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr key={transaction._id}>
                <td>{transaction._id}</td>
                <td>{moment(transaction.createdAt).format("YYYY-MM-DD")}</td>
                <td>{userInfo.name}</td>
                <td>{transaction.qty}</td>
                <td>{transaction.category}</td>
                <td>{transaction.description}</td>
                <td>R {transaction.lineTotal}</td>
                <td>
                  <LinkContainer to={`/admin/transaction/${transactionId}/edit`}>
                    <Button className="btn-sm" varaint="light">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                </td>
                <td>
                  <Button variant="danger" className="btn-sm">
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
      <Row className="m-4">
        <Col>
          <Button className="btn-sm" varaint="light">
            Print Transaction
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default TransactionDetails;
