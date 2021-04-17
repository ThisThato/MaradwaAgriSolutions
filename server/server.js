import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import transactions from "./data/Transactions.js";

const app = express();
dotenv.config();
connectDB();

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

const PORT = process.env.PORT || 5000;
const ENVIRONMENT = process.env.NODE_ENV;

app.listen(PORT, console.log(`Server running in ${ENVIRONMENT} mode on port ${PORT}`));
