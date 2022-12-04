const db = require("../models");
const path = require('path');
const { type } = require("os");

//create main Model
const Product = db.product;
const User = db.users;
const Op = db.Op;

//create User 
const createUser = async (req,res)=>{
    let info ={
        userName:req.body.userName,
        phone:req.body.phone,
        email:req.body.email,
        gender:req.body.gender,
        password:req.body.password,
        address:req.body.address
    }
    let user = await User.create(info);
    res.status(201).send(user);  
}

const loginUser = async  (req, res) => {
    const data = req.body
    const { email, password } = data;
    console.log(data);
    let user = await User.findOne({
         where:{
            email: email,
            password: password
          } });
    console.log(user)
    if(!user){
        res.status(404).send("email || password Incoreact");
    }else{
        res.status(200).send("user Auth");
    }
    // res.status(200).send(user);
}
module.exports = {
    createUser,
    loginUser
}