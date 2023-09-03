const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Bus = require('../models/bus.model');



router.get('/', async (req,res, next)=>{
    try{
        const buses = await Bus.find({}).populate(['driver', 'helper']);
        res.send(buses);
    }catch(err){
        console.log(err).message;
        next(err);
    }
    //es.send(buses);
})

router.get('/:id', (req,res)=>{
    // const id = req.params.id;
    // console.log("requested bus id: ",id);
    // if(id<1 || id>= buses.length){
    //     res.send("Invalid bus id");
    // }
    // else
    //     res.send(buses[id-1]);
})

router.post('/', async (req,res, next)=>{
    try{
        const data = req.body;
        console.log(data);
        const newBus = new Bus({...data});
        const savedBus =  await newBus.save();
        res.send(savedBus);
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