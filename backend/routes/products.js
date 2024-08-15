const express = require('express');
const products =  require('../modals/products.js');
const Product = require('../modals/addProdctschema.js');
// ------------------getting all the complaints------------------
const router = express.Router();

router.get("/",async function(req,res){
    console.log("Getting all products..........");


   await products.find({})
    .exec(function(err , allProducts){
        if(err){
            console.log("Error in retreiving products..........")
        }
        else{
            console.log(allProducts)
            res.json(allProducts);
        }
    });
    
});


router.get("/:productId", async function (req, res) {
    console.log("Getting all specific products..........");
    var productId = req.params.productId;
    console.log(productId);

    const query = { _id:productId};
    
    // Use the find method to retrieve data based on the 'cast' field
    products.find(query, function (err, docs) {
        if (err) {
            console.error('Error finding documents:', err);
            res.status(500).json({ error: 'Error finding documents' });
            return;
        }

        // Send the matching documents as a JSON response
        console.log('Found documents by name:', docs);
        res.json(docs[0]); // Send the data as a JSON response
    });
});

// Define your delete product route here
router.delete('/:productId', async (req, res) => {
    try {
      const { productId } = req.params;
  
      // Find the product by productId and delete it
      const deletedProduct = await Product.findByIdAndRemove(productId);
  
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
  
module.exports= router;