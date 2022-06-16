const mongoose = require ("mongoose")
const url = "mongodb://localhost/stfcreateDB"
mongoose.connect(url).then(()=>{
    console.log("Connected to databasse");
}).catch(()=>{
    console.log("Connection failed");
})