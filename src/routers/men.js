const express=require('express')
const router=new express.Router()
const MensRanking=require('../models/mens')

router.get("/mens",async(req,res)=>{
    try{
        const getMens=await MensRanking.find({}).select({_id:0,__v:0}).sort({"ranking":1})
        res.status(201).send(getMens)
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.get("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMen=await MensRanking.findById({_id})
        res.status(200).send(getMen)
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.post('/mens',async(req,res)=>{
    try{
        const addingMen= new MensRanking(req.body)
        console.log(req.body)
        const insertMens=await addingMen.save();
        res.status(201).send(insertMens)
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.put("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMen=await MensRanking.findByIdAndUpdate(_id,req.body,{new:true})
        res.status(200).send(getMen)
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.delete("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const deleteMen=await MensRanking.findByIdAndDelete(_id)
        res.status(200).send(deleteMen)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports=router




// const hashedPwd=bcrypt.hash(req.body.password,10)
            // console.log(hashedPwd)
            // await Users.findByIdAndUpdate(addedUser._id,{"password":hashedPwd})