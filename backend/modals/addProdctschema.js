// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   productName: {
//     type: String,
    
//   },
//   productPrice: {
//     type: Number,
   
//   },
//   productDescription: {
//     type: String,
   
//   },
//   productImage: String,
//   productImages: [String],
//   productCategory: String,
//   productQuantity: Number,
//   productAddDate: Date,
// });

// const Product = mongoose.model('product', productSchema);

// module.exports = Product;

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
  productImage: String, // Single image field
  productImages: [String], // Array of image filenames
  productCategory: String,
  productQuantity: Number,
  productAddDate: Date,
});
const Product = mongoose.model('admins', productSchema);
module.exports = Product;