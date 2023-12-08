const express = require("express");
const {
  getUserOrdersController,
  createOrderController,
} = require("../controllers/orders.controllers");

const router = express.Router();

router.get("/get-order", getUserOrdersController);

router.post("/create-order", createOrderController);

module.exports = router;
