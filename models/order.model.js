const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const OrderSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    products: [{ type: Schema.Types.ObjectId, ref: "Food" }],
    totalFood: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Order = model("Order", OrderSchema);

module.exports = Order;
