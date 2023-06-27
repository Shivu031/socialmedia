const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs');  

// Routes1 : Register a user
router.post('/register',async(req,res)=>{
    try{
        // generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt)

        // Create new user
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        })

        // save user and return response
        const user = await newUser.save();
        res.status(200).json(user)
    }catch(err){
        //console.log(err)
        res.status(500).json(err)
    }
});

// Routes2 : Login 
router.post('/login',async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        if (!user) {
            res.status(404).json("user not found")
            return;
        }

        const  validPassword = await bcrypt.compare(req.body.password,user.password)
        if (!validPassword) {
            res.status(400).json("Wrong Password")
        } else {
            res.status(200).json(user)
        }
    }catch(err){
        // console.log(err)
        res.status(500).json(err)
    }
});




module.exports = router;