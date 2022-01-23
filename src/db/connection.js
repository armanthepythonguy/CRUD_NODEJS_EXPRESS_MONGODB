const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://root:root@cluster0.evzm0.mongodb.net/CRUD_DATABASE?retryWrites=true&w=majority").then(()=>{
    console.log("DB Connected Succesfully");
}).catch((e)=>{
    console.log(e);
})