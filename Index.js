require ("./Connect/Connect")
const express = require ("express")
const cors = require ("cors")
const myRoute = require("./Router/Router")
const PORT = 1372
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api",myRoute)
app.use("/api/user", require("./OtherController/UserUpload"))
app.use("/api/Contentupload",require("./OtherController/ContentController"))
app.listen(PORT,()=>{
    console.log(`Connecting to .... ${PORT}`);
})