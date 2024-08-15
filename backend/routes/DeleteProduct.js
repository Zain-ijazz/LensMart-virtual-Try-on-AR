
const express = require('express');
const del =  require('../modals/AddNewProductSchema.js'); // Import the product schema/model
const Order = require('../modals/OrderSchema.js');
const router = express.Router();
router.delete('/:productId', async (req, res) => {
    try {
      const { productId } = req.params;
  
      // Find the product by productId and delete it
      const deletedProduct = await del.findByIdAndRemove(productId);
  
      if (!deletedProduct) {
        // If the product with the given productId is not found, return a 404 status
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.json({ message: 'Product deleted successfully', deletedProduct });
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ message: 'Server error' });
    }
});


router.delete('delord/:productId', async (req, res) => {
  try {
    const { productId} = req.params;

    // Find the product by productId and delete it
    const deletedProduct = await Order.findByIdAndRemove(productId);

    if (!deletedProduct) {
      // If the product with the given productId is not found, return a 404 status
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully', deletedProduct });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
