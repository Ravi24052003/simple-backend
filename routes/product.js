const express = require('express');
const {createProduct, getAllProducts, getProduct, replaceProduct, updateProduct, deleteProduct} = require("../controller/product.js");
const productRouter = express.Router();


module.exports = productRouter;

productRouter
.post('/',  createProduct)
.get('/',  getAllProducts)
.get('/:id',  getProduct)
.put('/:id',  replaceProduct)
.patch('/:id',  updateProduct)
.delete('/:id',  deleteProduct);

// exports.productRouter = productRouter;