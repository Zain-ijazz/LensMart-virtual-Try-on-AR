

const express = require('express');
const Order = require('../modals/OrderSchema.js');



const router = express.Router();

const createOrder = async (checkoutData) => {
  try {
    // Set the createdAt field to the current date
    checkoutData.createdAt = new Date();

    const order = new Order(checkoutData);
    const savedOrder = await order.save();
    return savedOrder;
  } catch (error) {
    console.error('Error creating order:', error);
    throw new Error('Internal Server Error');
  }
};

router.post('/', async (req, res) => {
  try {
    const checkoutData = req.body;
    const savedOrder = await createOrder(checkoutData);
    res.json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
