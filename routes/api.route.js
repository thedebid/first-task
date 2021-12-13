const router = require("express").Router();
const productRoute = require("../modules/product/product.route");

router.use("/product", productRoute);

module.exports = router;