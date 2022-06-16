const mongoose = require ("mongoose")
const Schema = mongoose.Schema
const ContentSChema = Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    category:{
        type:String
    },
    image:{
        type:String
    },
    imageID:{
        type:String
    },
    rating:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ratings"
    }],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
},{timestamps:true})
module.exports = mongoose.model("contents",ContentSChema)