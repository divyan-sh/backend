const OrdersModels = require("../models/Orders.models");

const getUserOrders = async (userId) => {
  const data = await OrdersModels.find({ user: userId });
  if (data.length === 0) {
    throw new Error("No Orders Found");
  }
  return data;
};

const createOrder = async (userId, productId, quantity) => {
  const data = await OrdersModels.create({
    user: userId,
    product: productId,
    quantity,
  });

  if (!data) {
    throw new Error("Something went wrong");
  }

  return data;
};

module.exports = {
  getUserOrders,
  createOrder,
};
