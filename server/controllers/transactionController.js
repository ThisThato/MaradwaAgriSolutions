import asyncHandler from "express-async-handler";
import Transaction from "../models/transactionModel.js";

const getTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({});
  res.json(transactions);
});

const getTransactionById = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);

  if (transaction) {
    res.json(transaction);
  } else {
    res.status(404).json({ message: "Transaction not found" });
  }
});

export { getTransactions, getTransactionById };
