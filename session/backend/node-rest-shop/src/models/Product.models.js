const { Schema, model } = require("mongoose");

const productSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    validate(val) {
      if (val < 0) throw new Error("Price Cannot Be Negative");
    },
  },
  productImage: {
    type: String,
    required: false,
  },
});

module.exports = model("Product", productSchema);
