const User = require('../modals/userSchema.js');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const jwt = require('jsonwebtoken');
const JWT_SECRET = "ZainIjazxuwe8230";


router.post('/',async(req,res,next)=>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({message:"All fields are required"})
    }

    try {
        const validUser = await User.findOne({email})
        if(!validUser){
            return res.status(400).json({message:"Invalid credentials"})
        }

        const comparePassword = await bcrypt.compare(password,validUser.password)
        if(!comparePassword){
            return res.status(400).json({message:"Invalid credentials"})
        }

       
        const token = jwt.sign({
            id:validUser._id,
        },
        
        JWT_SECRET,{
            expiresIn: "1h"
        },
       )

        const {password:hashedPassword,...rest} = validUser._doc;
        const expiryDate = new Date(Date.now() + 60 * 60 * 1000)
        res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: expiryDate,
      })
      .status(200)
      .json(rest);
        
    } catch (error) {
        next(error);
    }
})






module.exports = router;