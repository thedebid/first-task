const productModel = require("./product.model")

function getAll(){
    return productModel.find({});
   
}


function save(product){
    let newProduct = new productModel({});
    newProduct.title = product.title;
    newProduct.description = product.description;
    newProduct.price=product.price;
    return newProduct.save();
}

module.exports={
    getAll,
    save
}