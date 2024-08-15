
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  productPrice: {
    type: Number,
  },
  productDescription: {
    type: String,
  },
  MainProductImage: String,
   Image1: String,
   Image2: String,
   Image3: String,
  productCategory: String,
  productDiscount: Number,
  productQuantity: Number,
  quantity: Number,
  productAddDate: Date,
});
const Product = mongoose.model('allproducts', productSchema);
module.exports = Product;