const express = require('express');
const cors = require("cors");
const {createProduct, getAllProducts, getProduct, replaceProduct, updateProduct, deleteProduct} = require("../controller/product.js");
const productRouter = express.Router();


module.exports = productRouter;

productRouter
.post('/', cors(), createProduct)
.get('/', cors(), getAllProducts)
.get('/:id', cors(), getProduct)
.put('/:id', cors(), replaceProduct)
.patch('/:id', cors(), updateProduct)
.delete('/:id', cors(), deleteProduct);

// exports.productRouter = productRouter;