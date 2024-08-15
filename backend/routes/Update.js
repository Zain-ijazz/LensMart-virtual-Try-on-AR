const express = require('express');

const Product = require('../modals/AddNewProductSchema.js');
const router = express.Router();

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { productQuantity } = req.body;
  
    try {
      // Find the product by id
      const product = await Product.findById(id);
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Subtract the productQuantity from the existing quantity
      const updatedQuantity = product.productQuantity-productQuantity;
  
      // Update the quantity field with the updated value
      product.set({ productQuantity: updatedQuantity });
  
      // Save the updated product
      await product.save();
  
      res.json({ message: 'Product quantity updated successfully', product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  module.exports = router;