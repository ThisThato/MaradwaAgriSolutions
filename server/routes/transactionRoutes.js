import express from "express";
import { getTransactionById, getTransactions } from "../controllers/transactionController.js";

const router = express.Router();

router.get("/", getTransactions);
router.get("/:id", getTransactionById);

export default router;
