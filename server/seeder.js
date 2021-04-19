import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/Users.js";
import transactions from "./data/Transactions.js";
import User from "./models/userModel.js";
import Inventory from "./models/inventoryModel.js";
import Transaction from "./models/transactionModel.js";
import Supplier from "./models/supplierModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Inventory.deleteMany();
    await Transaction.deleteMany();
    await Supplier.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleTransaction = transactions.map((transaction) => {
      return { ...transaction, user: adminUser };
    });

    await Transaction.insertMany(sampleTransaction);

    console.log("Data imported!".green.inverse);

    process.exit(1);
  } catch (error) {
    console.error(error.message.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Inventory.deleteMany();
    await Transaction.deleteMany();
    await Supplier.deleteMany();

    console.log("Data destroyed!".green.inverse);

    process.exit(1);
  } catch (error) {
    console.error(error.message.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
