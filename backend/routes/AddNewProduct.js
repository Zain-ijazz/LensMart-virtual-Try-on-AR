const express = require('express');
const multer = require('multer');
const path = require('path');
const Product = require('../modals/AddNewProductSchema.js');
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

router.post('/', upload.fields([
  { name: 'MainProductImage' },
   { name: 'Image1' },
   { name: 'Image2' },
   { name: 'Image3' },
  // { name: 'imageWithShade' },
  // { name: 'imageWithOutShade' },
]), async (req, res) => {
  try {
    // Create a new product using the Product schema/model
    const newProduct = new Product({
      ...req.body,
      MainProductImage: req.files['MainProductImage'] ? req.files['MainProductImage'][0].filename : null,
       Image1: req.files['Image1'] ? req.files['Image1'][0].filename : null,
       Image2: req.files['Image2'] ? req.files['Image2'][0].filename : null,
       Image3: req.files['Image3'] ? req.files['Image3'][0].filename : null,
      // imageWithShade: req.files['imageWithShade'] ? req.files['imageWithShade'][0].filename : null,
      // imageWithOutShade: req.files['imageWithOutShade'] ? req.files['imageWithOutShade'][0].filename : null,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
