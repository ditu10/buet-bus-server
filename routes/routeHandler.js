const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


router.get('/', (req,res)=>{
    r//es.send(buses);
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

router.post('/', (req,res)=>{
    // const data = req.body;
    // console.log('new Bus Data : ', data);
    // res.send(data);
})

router.put('/',(req,res)=>{

})

router.delete('/:id', (req,res)=>{

})


module.exports = router;