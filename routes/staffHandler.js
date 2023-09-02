const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Staff = require('../models/staff.model');


router.get('/', async (req,res,next)=>{
    try{
        const staffs = await Staff.find({});
        res.send(staffs);   
    }catch(err){
        console.log(err);
        next(err);
    }

})

router.get('/:id', async (req,res, next)=>{
    
    try{
        const id = req.params.id;
        console.log("requested staff id: ",id);
        const staff = await Staff.findById(req.params.id);
        res.send(staff);
    }catch(err){
        console.log(err);
        next(err);
    }
    
})

router.post('/', async (req,res, next)=>{
    try{
        const data =  req.body;
        console.log('new Staff data : ', data);
        
        // const busObj = Bus.findById(data.busId);
        const newStaff = new Staff({...data});
        const savedStaff =  await newStaff.save();
        res.send(savedStaff);
    

    }catch(err){
        console.log("error ")
        next(err)
    }
  
})

router.post('/all', async (req,res, next)=>{
    try{
        const data =  req.body;
        console.log('new Bus Data : ', data);
        
        const newStaff = await Staff.insertMany(data);
       
        res.send(newStaff);
    

    }catch(err){
        console.log("error ")
        next(err)
    }
  
})

router.put('/:id',async (req,res, next)=>{
    try{
        const data = req.body;
        const id = req.params.id;
        const result = await Staff.findByIdAndUpdate(id,data);
        res.send(result);
    }catch(err){
        console.log(err);
        next(err);
    }
})

router.post('/:id', async (req, res, next)=>{
    try{
        const id = req.params.id;
        console.log(id);
        const del = await Staff.deleteOne({_id : id});
        
        res.send(del);
    }catch(err){
        console.log(err)
        next(err)
    }
})


module.exports = router;