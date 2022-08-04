const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {authSource:"admin",useNewUrlParser:true, useUnifiedTopology:true, user:process.env.USER, pass:process.env.PASS}).then(()=>{
    console.log("DB Connected Succesfully");
}).catch((e)=>{
    console.log(e);
})