const { Schema, model } = require("mongoose");

const orderSchema = Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  quantity: {
    type: Number,
    min: 1,
    default: 1,
  },
});

module.exports = model("Order", orderSchema);
