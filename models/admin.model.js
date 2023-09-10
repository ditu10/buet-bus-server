const mongoose = require('mongoose');

const adminScheme = mongoose.Schema({
    username : {
        Type : String,
        // required : true
    },
    password : {
        Type : String,
        // required : true 
    },
    email : {
        Type: String,
        // required : true 
    }
})

const Admin = mongoose.model("Admin",adminScheme);

module.exports = Admin;