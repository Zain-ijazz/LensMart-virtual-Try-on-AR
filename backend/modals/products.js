const mongoose = require('mongoose');
const productsSchema = new mongoose.Schema({
  title: String,
  price: Number,
  descrp: String,
  image: String,
  cast:String,

})

module.exports= mongoose.model("products", productsSchema)

