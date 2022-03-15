var express = require('express');
var router = express.Router();
var Movie = require('./Models/luxury')
// var User = require('./Models/User')
// var bcrypt = require('bcryptjs')
// var jwt = require('jsonwebtoken')

//to fetch movies
router.get('/luxurys',async(req,res)=>{
    const iluxury = await Movie.find()
    res.send(iluxury)
})

//to add the movies
router.post("/luxurys",async(req,res)=>{
    const iluxury = new Movie({
        name:req.body.name,
        rating:req.body.rating
    })

    await iluxury.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating movie

router.patch('/luxurys/:id',async (req,res)=>{
    const iluxury = await Movie.findOne({_id:req.params.id})
    iluxury.name = req.body.name
    iluxury.rating = req.body.rating
    await iluxury.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api

router.delete("/luxury/:name",async(req,res)=>{
    await luxury.deleteOne({name:req.params.name},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }

    })
})

/*
router.post('/users',async(req,res)=>{
    
    //generate salt key
    salt = await bcrypt.genSalt(10)
    console.log(salt)

    hashedpswd = await bcrypt.hash(req.body.password,salt)
    console.log(hashedpswd)

    const iuser = new User({
        uname:req.body.uname,
        password:hashedpswd
    })  
    await iuser.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

}) */

module.exports = router 