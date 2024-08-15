const express = require('express');
const ShowProduct =  require('../modals/AddNewProductSchema.js');

const router = express.Router();

router.get("/",async function(req,res){
    console.log("Getting all products..........");


   await ShowProduct.find({})
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
    ShowProduct.find(query, function (err, docs) {
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



module.exports= router;
