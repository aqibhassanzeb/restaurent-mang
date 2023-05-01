import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    contact: {
      type: String,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 1,
    },
    method: {
      type: Number,
      required: true,
    },
    items: [
      {
        _id: {
          type: String,
        },
        title: {
          type: String,
        },
        price: {
          type: Number,
        },
        quantity: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
