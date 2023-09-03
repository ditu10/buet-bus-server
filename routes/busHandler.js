const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Bus = require('../models/bus.model');



router.get('/', async (req,res, next)=>{
    try{
        const buses = await Bus.find({}).populate(['driver', 'helper','route']);
        res.send(buses);
    }catch(err){
        console.log(err).message;
        next(err);
    }
    //es.send(buses);
})

router.get('/:id', async (req,res, next)=>{
    try{
        const id = req.params.id;
        console.log("requested bus id : ", id);
        const bus = await Bus.findById(req.params.id).populate(['driver', 'helper','route']);
        console.log(bus);
        res.send(bus);
    }catch(err){
        console.log(err);
        next(err);
    }
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