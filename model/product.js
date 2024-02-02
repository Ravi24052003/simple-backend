const mongoose = require('mongoose');


// Schema
const productSchema = new mongoose.Schema({
    title : {type: String, required: true, unique: [true, "Title should be unique"]},
    description : String,
    price : {type: Number, min: [0, 'wrong price'], required: [true, "price is required"]},
    discountPercentage : {type: Number, min: [0, 'wrong min discount'], max: [50, 'wrong max discount']},
    rating : {type: Number, min: [0, 'wrong min rating'], max: [5, 'wrong max rating'], default: 0},
    stock : Number,
    brand : {type: String, required: [true, "Brand is required"]},
    category : {type: String, required: [true, "Category is required"]},
    thumbnail : {type: String, required: [true, "Thumbnail is required"]},
    images: [String]
  });

const Product = mongoose.model('Product', productSchema);

module.exports = {Product}