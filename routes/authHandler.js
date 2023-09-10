const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Admin = require('../models/admin.model');
console.log(Admin);


router.post('/signin', async(req,res,next)=>{
    try{
        const user = req.body;
        const authUser = await Admin.findOne({"username" : user.username});
        console.log(authUser);
        if(authUser){
            if(authUser.password == user.password){
                res.send({
                    "status" : "OK",
                    "msg" : "successfully sign in"
                });
            }
            else{
                res.send({
                    'status' : 'Fail',
                    'msg' : 'Invalid Password'
                });
            }
        }
        else{
            res.send({
                'status' : 'Fail',
                'msg' : 'Invalid username'
            });
        }

    }catch(err){
        console.log(err);
        next(err);
    }
})


module.exports = router;