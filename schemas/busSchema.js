const mongoose = require('mongoose');

const busSchema = mongoose.Schema({
    busName : {
        type : String,
        required : true
    },
    busType : {
        type : String,
        required : true,
        enum: ['Bus', 'Microbus', 'Ambulance']
    },
    busNo : {
        type: String,
        required : true
    },
    driverName : {
        type: String,
        // required : true
    },
    helperName : {
        type: String,
        // required : true
    },
    Capacity : {
        type: Number,
        required : true
    },
    route : {
        type: String,
        // required : true
    }


});

module.exports = busSchema;