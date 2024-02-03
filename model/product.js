const mongoose = require('mongoose');


// Schema
const productSchema = new mongoose.Schema({
    title : {type: String, required: [true, "Title is required"], unique: [true, "Title should be unique"]},
    description : String,
    price : {type: Number, min: [1, 'price should not be below 1'], required: [true, "price is required"]},
    discountPercentage : {type: Number, min: [0, "discount can't be less than 0%"], max: [50, "discount can't be above 50%"]},
    rating : {type: Number, min: [0, 'wrong min rating'], max: [5, 'wrong max rating'], default: 0},
    stock : Number,
    brand : {type: String, required: [true, "Brand is required"]},
    category : {type: String, required: [true, "Category is required"]},
    thumbnail : {type: String, required: [true, "Thumbnail is required"]},
    images: [String]
  });

const Product = mongoose.model('Product', productSchema);

module.exports = {Product}