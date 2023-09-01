const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Route = require('../models/route.model');


router.get('/',async (req,res, next)=>{
    try{
        const allRoutes = await Route.find({});
        console.log("GET : All routes");
        res.send(allRoutes);
    }catch(err){
        console.log(err);
        next(err);
    }
})

router.get('/:id', async (req,res, next)=>{
    try{
        const id = req.params.id;
        console.log("request for route id: ", id);
        const singleRoute = await Route.findById(req.params.id);
        res.send(singleRoute);
    }catch(err){
        console.log(err)
        next(err);
    }
})

router.post('/', async (req,res, next)=>{
    try{
        const data = req.body;
        const newRoute = new Route({...data});
        const savedRoute =  await newRoute.save();
        res.send(savedRoute);
    }catch(err){
        console.log(err);
        next(err);
    }
    
})

router.put('/',(req,res)=>{

})

router.delete('/:id', (req,res)=>{

})


module.exports = router;