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
        // required : true
    },
    license : {
        type: String,
        // required : true
    },
    NID : {
        type : String,
        required : true 
    },
    mobile : {
        type : String,
        // required : true
    },
    bus : {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Bus',
    },
    status : {
        type : String,
        enum : ["Active", "Inactive"],
        default : "Inactive"
    }
    
});
const Staff = mongoose.model("Staff", staffScheme);

module.exports = Staff;