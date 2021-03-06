import mongoose from "mongoose";

//Used by inventorySchema
const supplierSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    physicalAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    contactDetails: {
      phone: { type: Number, required: true },
      email: { type: String, required: false },
    },
  },
  {
    timestamps: true,
  }
);

const Supplier = mongoose.model("Supplier", supplierSchema);

export default Supplier;
