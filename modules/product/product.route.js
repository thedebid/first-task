const router = require("express").Router();
const productController = require("./product.controller");

router
  .route("/")
  .post(productController.createProduct)
  .get(productController.getProducts);

module.exports = router;
