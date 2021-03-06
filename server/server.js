import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/transactions", transactionRoutes);
app.use("/api/users", userRoutes);

//Middlerware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const ENVIRONMENT = process.env.NODE_ENV;

app.listen(PORT, console.log(`Server running in ${ENVIRONMENT} mode on port ${PORT}`));
