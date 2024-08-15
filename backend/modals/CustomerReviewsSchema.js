const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true
  },
  reviewText: {
    type: String,
    required: true
  },

  cusnamef: 
    {
      type: String,
       required: true 
     
    },

    cusnamel: 
    {
       type: String, 
       required: true 
     
     
    },

    productid: 
    {
       type: String, 
       required: true 
     
     
    },

  createdAt: {
    type: Date,
    default: Date.now
  },
  // You can add more fields like userId, productId, etc. if needed
});

const Review = mongoose.model('CustomerReviews', reviewSchema);

module.exports = Review;
