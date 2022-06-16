const mongoose = require ("mongoose")
const Schema =  mongoose.Schema
const RatingSchema = Schema ({
count:{
    type:Number
},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
},
content:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"contents"
}
},{timestamps:true})
module.exports = mongoose.model("ratings",RatingSchema)