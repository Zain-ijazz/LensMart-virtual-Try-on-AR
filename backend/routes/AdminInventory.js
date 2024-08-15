
const express = require('express');
//const products = require('../modals/addProdctschema.js');
const products = require('../modals/AddNewProductSchema.js');

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

module.exports= router;