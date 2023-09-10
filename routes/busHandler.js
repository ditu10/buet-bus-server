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
        const busUdpate = {
            bus : busId,
            status : "Active"
        }
        const updateDriver = await Staff.findOneAndUpdate({_id : driver._id},busUdpate);
        const updateHelper = await Staff.findOneAndUpdate({_id : helper},busUdpate);
        
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
        const prevBus = await Bus.findById(id);
        const savedBus = await Bus.findByIdAndUpdate(id,data);

        // update driver , helper & route


        // driver
        const driver = savedBus?.driver;


        if(prevBus?.driver?._id === savedBus.driver._id){
            
        }
        else if(!prevBus?.driver._id && savedBus.driver._id){
            const busUdpate = {
                bus : busId,
                status : "Active"
            }
            const updateDriver = await Staff.findOneAndUpdate({_id : savedBus.driver._id},busUdpate);

        }
        else if(prevBus.driver._id && !savedBus.driver._id){
            const busUpdate = {
                bus : "",
                status : "Inactive"
            }
            await Staff.findOneAndUpdate({_id : prevBus.driver._id},busUdpate);
        }
        else{
            const busUdpate = {
                bus : busId,
                status : "Active"
            }
            const updateDriver = await Staff.findOneAndUpdate({_id : savedBus.driver._id},busUdpate);
            const prevBusUpdate = {
                bus : "",
                status : "Inactive"
            }
            const updateDriver2 = await Staff.findOneAndUpdate({_id : prevBus.driver._id},busUdpate);

        }


        // helper

        const helper = savedBus?.helper;

        if(prevBus?.helper?._id === savedBus.helper._id){
            
        }
        else if(!prevBus?.helper._id && savedBus.helper._id){
            const busUdpate = {
                bus : busId,
                status : "Active"
            }
            const updateDriver = await Staff.findOneAndUpdate({_id : savedBus.helper._id},busUdpate);

        }
        else if(prevBus.helper._id && !savedBus.helper._id){
            const busUpdate = {
                bus : "",
                status : "Inactive"
            }
            await Staff.findOneAndUpdate({_id : prevBus.helper._id},busUdpate);
        }
        else{
            const busUdpate = {
                bus : busId,
                status : "Active"
            }
            const updateDriver = await Staff.findOneAndUpdate({_id : savedBus.helper._id},busUdpate);
            const prevBusUpdate = {
                bus : "",
                status : "Inactive"
            }
            const updateDriver2 = await Staff.findOneAndUpdate({_id : prevBus.helper._id},busUdpate);

        }

        const route = savedBus?.route;
        const busId = id;
        

        
        // update route-------
        if(prevBus?.route?._id === savedBus?.route?._id){
            res.send(result);
        }
        else if(!prevBus?.route?._id && savedBus.route._id){
            const updateRoute = await Route.updateOne(
                { _id: savedBus.route._id },
                { $push: { bus: busId } }
            );
            res.send(result);
        }
        else if(!savedBus?.route?._id && prevBus.route._id){
            const updatePrevRoute = await Route.updateOne(
                {_id : prevBus.route._id},
                { $pull : {bus: busId} }
            )
            res.send(result);
        } 
        else{
            const updateRoute = await Route.updateOne(
                { _id: route._id },
                { $push: { bus: busId } }
            );

            const updatePrevRoute = await Route.updateOne(
                {_id : prevBus.route._id},
                { $pull : {bus: busId} }
            )
    
            res.send(result);
        }
        
    }catch(err){
        console.log(err);
        next(err);
    }
})

router.delete('/:id', async(req,res, next)=>{
    try{
        // const thisbus = await Bus.findById(req.params.id);

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