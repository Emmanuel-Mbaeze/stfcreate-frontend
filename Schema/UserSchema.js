const mongoose = require ("mongoose")
const Schema  = mongoose.Schema
const userSChema = Schema({
    userName:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    location:{
        type:String
    },
    avatar:{
        type:String
    },
    avatarID:{
        type:String
    },
    Admin:{
        type:Boolean
    },
    content:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"contents"
    }],
    rating:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ratings"
    }],
},{timestamps:true})
module.exports = mongoose.model("users",userSChema)