const express = require('express');
const router = new express.Router();
const users = require('../models/users');

router.post("/add", async(req, res)=>{
    try {
        const addusers = new users(req.body)
        const adding = await addusers.save();
        res.send({ok:true});
    } catch (error) {
        res.send({ok:false});
    }
})

router.get("/find/:email", async(req,res)=>{
    try {
        const findingdata = await users.find({email:req.params.email});
        res.send({ok:true});
    } catch (error) {
        res.send({ok:false});
    }
})

router.patch("/update", async(req, res)=>{
    try {
        const updatingdata = await users.findOneAndUpdate({email:req.body.email}, req.body,{
            new:true
        })
        res.send({ok:true});
    } catch (error) {
        res.send({ok:false});
    }
})

router.delete("/delete", async(req, res)=>{
    try {
        const deletingdata = await users.findOneAndDelete({email:req.body.email});
        res.send({ok:true});
    } catch (error) {
        res.send({ok:false});
    }
})

module.exports = router;