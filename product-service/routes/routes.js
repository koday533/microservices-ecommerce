const express = require('express');
const router = express.Router();
const { createProductValidator } = require('../validation/createProductValidator');
const ProductController = require("../controller/ProductController");
const productController = new ProductController();

router.post("/product/createProduct", createProductValidator, productController.createProduct);
router.post("/product/productAll", productController.getProductAll);
router.get("/product/getProductByProductId", productController.getProductByProductId);



module.exports = router