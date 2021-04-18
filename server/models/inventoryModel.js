import mongoose from "mongoose";

const customerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: false,
    },
    physicalAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    contactDetails: {
      phone: { type: Number, required: false },
      email: { type: String, required: false },
    },
  },
  {
    timestamps: true,
  }
);

const inventorySchema = mongoose.Schema(
  {
    transaction: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Transaction",
    },
    customers: [customerSchema],
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Supplier",
    },
    description: {
      type: String,
      required: true,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    unitPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    qty: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    lineTotal: {
      type: Number,
      required: true,
      default: 0,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Inventory = mongoose.Schema("Inventory", inventorySchema);

export default Inventory;
