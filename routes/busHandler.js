const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Bus = require('../models/bus.model');
const Staff = require('../models/staff.model');
const Route = require('../models/route.model');



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
        // update staff 
        const driver = savedBus?.driver;
        const helper = savedBus?.helper;
        const route = savedBus?.route;
        const busId = savedBus._id;
        // console.log(driverid, helperid, routeId);
        const updateDriver = await Staff.findOneAndUpdate({_id : driver._id},{bus: busId});
        const updateHelper = await Staff.findOneAndUpdate({_id : helper},{bus: busId});
        
        const updateRoute = await Route.updateOne(
            { _id: route._id },
            { $push: { bus: busId } }
        );
        
        

        
        res.send(savedBus);
    }catch(err){
        console.log(err);
        next(err);
    } 
})

router.put('/:id', async(req,res,next)=>{
    try{
        const data = req.body;
        const id = req.params.id;
        const result = await Bus.findByIdAndUpdate(id,data);
        res.send(result);
    }catch(err){
        console.log(err);
        next(err);
    }
})

router.delete('/:id', async(req,res, next)=>{
    try{
        //const thisbus = await Bus.findById(req.params.id);

        const result = await Bus.deleteOne({_id : req.params.id});

        // const thisDriver = thisbus.driver._id;
        // const thisHelper  = thisbus.helper._id;
        // const thisRoute = thisbus.route._id;

        // const updateDriver = await Staff.findOneAndUpdate({_id : thisDriver},{bus: });
        console.log(result);

        res.send(result);
    }catch(err){
        console.log(err);
        next(err);
    }
})

module.exports = router;