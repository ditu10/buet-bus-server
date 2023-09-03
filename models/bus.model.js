const mongoose = require('mongoose');

const busSchema = mongoose.Schema({
    busName : {
        type : String,
        required : true
    },
    busType : {
        type : String,
        required : true,
        enum: ["Teacher's Bus", "Student's Bus", "Staff Bus"] 
    },
    busNo : {
        type: String,
        required : true
    },
    regNo : {
        type : String,
        required : true
    },
    dateOfActivation : {
        type : Date,
        // required : true 
    },
    driver : {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Staff',
        // required : true
    },
    helper : {
        type: mongoose.SchemaTypes.ObjectId,
        ref : 'Staff',
        // required : true
    },
    capacity : {
        type: Number,
        // required : true
    },
    route : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'Route',
        // required : true
    }


});
const Bus = new mongoose.model("Bus", busSchema);

module.exports = Bus;