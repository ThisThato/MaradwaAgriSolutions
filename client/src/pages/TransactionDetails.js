import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";

const TransactionDetails = ({ id }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [transaction, setTransaction] = useState({});

  // useEffect(() => {
  //   const fetchTransaction = async () => {
  //     const { data } = await axios.get(`/api/transactions/${match.params.id}`);
  //     setTransaction(data);
  //   };

  //   fetchTransaction();
  // }, [match]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Title> {id}</Modal.Title>
    </Modal>
  );
};

export default TransactionDetails;
