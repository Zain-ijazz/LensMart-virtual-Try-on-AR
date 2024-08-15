const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  paymentMethod: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  cart: [
    {
      productName: { type: String, required: true },
      productPrice: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
    // ... other fields as needed
  ],
  createdAt: { type: Date, default: Date.now },
  // ... other fields as needed
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;


