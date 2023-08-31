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
    driver : {
        type: mongoose.SchemaType.ObjectId,
        ref: 'Staff',
        // required : true
    },
    helper : {
        type: mongoose.SchemaType.ObjectId,
        ref : 'Staff',
        // required : true
    },
    Capacity : {
        type: Number,
        required : true
    },
    route : {
        type : mongoose.SchemaType.ObjectId,
        ref : 'Route',
        // required : true
    }


});
const Bus = new mongoose.model("Bus", busSchema);

module.exports = Bus;