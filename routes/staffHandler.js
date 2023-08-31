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
        const staff = Staff.find({"staffId" : id});
        res.send(staff);
    }catch(err){
        console.log(err);
        next(err);
    }
    // if(id<1 || id>= buses.length){
    //     res.send("Invalid bus id");
    // }
    // else
    //     res.send(buses[id-1]);
})

router.post('/', async (req,res, next)=>{
    try{
        const data =  req.body;
        console.log('new Bus Data : ', data);
        
        const newStaff = new Staff({...data});
        const savedStaff =  await newStaff.save();
        res.send(savedStaff);
    

    }catch(err){
        console.log("error ")
        next(err)
    }
  
})

router.put('/',(req,res)=>{

})

router.delete('/:id', (req,res)=>{

})


module.exports = router;