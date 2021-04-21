import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { listTransactions } from "../actions/transactionActions";
import Loader from "../components/Loader";

const TransactionList = () => {
  const dispatch = useDispatch();
  const transactionList = useSelector((state) => state.transactionList);
  const { loading, error, transactions } = transactionList;

  useEffect(() => {
    dispatch(listTransactions());
  }, [dispatch]);

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const calculate = () => {
    var total = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].type === "dr") {
        total = total - transactions[i].lineTotal;
      } else {
        total = total + transactions[i].lineTotal;
      }
    }
    return addDecimals(total);
  };

  return (
    <>
      <Row className="m-4">
        <Col>
          <h2>Transactions</h2>
        </Col>
        <Col className="mt-5">
          <ProgressBar>
            <ProgressBar variant="success" now={35} key={1} />
            <ProgressBar variant="danger" now={20} key={2} />
            <ProgressBar variant="warning" now={45} key={3} />
          </ProgressBar>
        </Col>
        <Col className="text-right">
          <Link className="btn btn-light" to="/addtransaction">
            <i className="fas fa-plus"></i> Add Transaction
          </Link>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Row className="align-items-center m-4">
          <Table stripped="true" bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Qty</th>
                <th>Category</th>
                <th>Transaction Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions &&
                transactions.map((transaction) => (
                  <tr key={transaction._id}>
                    <td>{transaction._id}</td>
                    <td>-</td>
                    <td>{transaction.qty}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.description}</td>
                    <td>R {addDecimals(transaction.lineTotal)}</td>
                    <td>
                      <LinkContainer to={`/transactions/${transaction._id}`}>
                        <Button className="btn-sm" varaint="light">
                          Details
                        </Button>
                      </LinkContainer>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              {transactions ? (
                <tr>
                  <td colSpan="5">Total </td>
                  <td colSpan="2">R {calculate()}</td>
                </tr>
              ) : null}
            </tfoot>
          </Table>
          <Row className="m-4">
            <Col>
              <Button className="btn-sm" varaint="light">
                Print Transactions
              </Button>
            </Col>
          </Row>
        </Row>
      )}
    </>
  );
};

export default TransactionList;
