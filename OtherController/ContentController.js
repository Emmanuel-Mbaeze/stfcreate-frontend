const express = require("express")
const router = express.Router()
const cloudinary = require("../Connect/CLoudinary")
const Verify = require ("../Connect/authorize")
const {image} = require("../Connect/Multer")
const userModel = require ("../Schema/UserSchema")
const contentModel = require("../Schema/ContentSchema")

router.post("/createContent/:id",Verify,image,async (req,res)=>{
    try {
      if(req.user.Admin === true){
const {description,title,category} = req.body
const cloudImage = await cloudinary.uploader.upload(req.file.path)
const getUser = await userModel.findById(req.params.id)
const getContent = new contentModel({
    description,
    title,
    category,
    image:cloudImage.secure_url,
    imageID : cloudImage.public_id
})
getContent.user = getUser
getContent.save()
getUser.content.push(getContent)
getUser.save()
res.status(201).json({
    status:"content created",
    data:getContent
})
} else{
 res.status(404).json({
     messag:"Acess Denied"
 })
      } 
    } catch (error) {
        console.log(error.message);
    }
})

// router.get("/viewContent/:id",async,(req,res)=>{
//     try {
//       const getUser = await contentModel.findById(req.params.id).populate("content")
//       res.status(201).json({
//           status:"View content",
//           data:getUser
//       })  
//     } catch (error) {
//         console.log(error.message);
//     }
// })
// router.get("/viewContent/:id/:contentID",async,(req,res)=>{
//     try {
//       const getUser = await contentModel.findById(req.params.id).populate("user")
//       res.status(201).json({
//           status:"View contents",
//           data:getUser
//       })  
//     } catch (error) {
//         console.log(error.message);
//     }
// })
module.exports= router