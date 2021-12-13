const productService = require("./product.service");

function createProduct(req, res) {
  productService
    .save(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.json(err);
    });
}

function getProducts(req, res) {
  productService
    .getAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.json(err);
    });
}

module.exports={
    createProduct,
    getProducts
}