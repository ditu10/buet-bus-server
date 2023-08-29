const mongoose = require('mongoose');

const staffScheme = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true,
        enum: ['Driver', 'Helper']
    },
    staffId : {
        type: String,
        required : true
    },
    dob : {
        type: Date,
        required : true
    },
    busId : {
        type: String,
        required : true
    },
    photo : {
        type : String,
        // required : false
    },
    licence : {
        type: String,
        required : true
    },
    
});

module.exports = staffScheme;