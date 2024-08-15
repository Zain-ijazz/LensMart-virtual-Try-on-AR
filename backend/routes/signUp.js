const User = require('../modals/userSchema.js');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();



router.post('/', async(req,res,next)=>{

    const {firstName,lastName,email,password} = req.body;
    if(!firstName || !lastName || !email || !password){
        return res.status(400).json({message:"All fields are required"})
    }

    try {
        
    
            const existingUser = await User.findOne({email})

            const hashedPassword = await bcrypt.hashSync(password, 10)

            if(existingUser){
                return res.status(400).json({message:"User already exists"})
            }

            const user = new User({
                firstName,
                lastName,
                email,
                password:hashedPassword
            })

            const savedUser = await user.save();
            res.status(201).json(savedUser)


    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Server error' });

        
    }

})


module.exports = router; 