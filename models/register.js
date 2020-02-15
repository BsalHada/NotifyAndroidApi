const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const Register= new mongoose.Schema(
{
    fullname:{
        type:String
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true
    },
    address:{
        type:String
    }
});

module.exports=mongoose.model('register',Register);