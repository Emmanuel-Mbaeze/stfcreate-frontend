const  userModel =  require("../Schema/UserSchema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const signinUser = async(req,res)=>{
    try {
        const {email,password}=req.body
        const findUser = await userModel.findOne({email})
        if (findUser) {
            const passCheck = await bcrypt.compare(password,findUser.password)
            if (passCheck) {
                const token = jwt.sign(
                    {
                        _id:findUser._id,
                        email:findUser.email,
                        userName:findUser.userName,
                        Admin:findUser.Admin,
                        avatar:findUser.avatar,
                    },
                    "stfCreates",{expiresIn:"1d"}
                )
                const {password, ...info}=findUser._doc
                res.status(201).json({
                    status:`welcome back ${findUser.userName}`,
                    data:{token,...info}
                })
            } else {
                res.status(500).json({
                    status:"Incorrect password"
                })
            }
        } else {
            res.status(500).json({
                status:"User not found"
            })  
        }
    } catch (error) {
        console.log(error.message);
    }
}

const getUSers = async(req,res)=>{
  try {
    const allusers = await userModel.find()
    res.status(201).json({
        status:"all users gotten",
        data:allusers
    }) 
  } catch (error) {
      console.log(error.message);
  }
}

const oneUser = async (req,res)=>{
    try {
        const singleUser = await userModel.findById(req.params.id)
        res.status(201).json({
            status:"singleUser gotten",
            data:singleUser
        })
    } catch (error) {
        console.log(error.message);
    }
}

const deleteUser = async (req,res)=>{
    try {
      const removeUSer = await userModel.findByIdAndDelete(req.params.id)  
      res.status(204).json({
          data:removeUSer
      })
    } catch (error) {
        console.log(error.message);
    }
}
module.exports={
    signinUser,
    getUSers,
    oneUser,
    deleteUser
}