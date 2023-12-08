const { ERROR, OK } = require("../../utils/responseHelper");
const { getUserOrders, createOrder } = require("../services/orders.service");

const getUserOrdersController = async (req, res) => {
  try {
    const id = req.query.id;
    const data = await getUserOrders(id);
    return OK(res, data, "Orders fetched successfully");
  } catch (error) {
    return ERROR(res, null, error.message);
  }
};

const createOrderController = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const data = await createOrder(userId, productId, quantity);
    return OK(res, data, "Orders Created successfully");
  } catch (error) {
    return ERROR(res, null, error.message);
  }
};

module.exports = {
  getUserOrdersController,
  createOrderController,
};
