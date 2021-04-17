const express = require("express");

const transactions = require("./data/Transactions");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/transactions", (req, res) => {
  res.json(transactions);
});

app.get("/api/transactions/:id", (req, res) => {
  const transaction = transactions.find((t) => t._id === req.params.id);
  res.json(transaction);
});

app.listen(5000, console.log("Server running on port 5000"));
