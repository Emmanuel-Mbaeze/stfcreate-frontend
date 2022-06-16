const express = require("express")
const myRoute = express.Router()
const {signinUser,getUSers,oneUser,deleteUser} = require ("../Contoller/UserController")
myRoute.post("/signin",signinUser)
myRoute.get("/allUsers",getUSers)
myRoute.get("/singleUsers/:id",oneUser)
myRoute.delete("/removeUSer/:id",deleteUser)
module.exports = myRoute