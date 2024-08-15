const express = require('express');
const products = require('../modals/OrderSchema.js');
const User = require('../modals/userSchema.js');

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

router.get("/usersList",async function(req,res){
    console.log("Getting all products..........");
  
  
   await User.find({})
    .exec(function(err , userSchema){
        if(err){
            console.log("Error in retreiving products..........")
        }
        else{
            console.log(userSchema)
            res.json(userSchema);
        }
    });
    
  });


module.exports= router;