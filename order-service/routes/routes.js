const express = require('express');
const router = express.Router();
const OrderController = require("../controller/orderController");
const orderController = new OrderController();

router.post("/order/createOrder", orderController.createOrder);
router.post("/order/cancelOrder", orderController.cancelOrder);
router.post("/order/orderDetail", orderController.orderDetail);
router.post("/order/orderHistory", orderController.orderHistory);

module.exports = router