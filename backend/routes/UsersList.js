const express = require('express');
const router = express.Router();
const User = require('../modals/userSchema.js');
router.get("/",async function(req,res){
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
module.exports = router;