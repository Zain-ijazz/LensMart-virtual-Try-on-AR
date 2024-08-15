

const express = require('express');
const multer = require('multer');
const path = require('path');
const Product = require('../modals/addProdctschema.js'); // Import the product schema/model
const router = express.Router();
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
});

router.post('/', upload.fields([{ name: 'productImage' }, { name: 'productImages' }]), async (req, res) => {
  try {
    // Create a new product using the Product schema/model
    const newProduct = new Product({
      ...req.body, // Use the request body as it contains the product data
      productImage: req.files['productImage']
       ? req.files['productImage'][0].filename 
       : null, // Use the first file as the main product image (if available)
      productImages: req.files['productImages'] 
      ? req.files['productImages'].map((file) => file.filename) 
      :[], // Map uploaded files to their filenames
    });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
