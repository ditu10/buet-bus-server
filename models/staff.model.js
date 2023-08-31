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
        type: String,
        // required : true
    },
    busId : {
        type: String,
        // required : true
    },
    photo : {
        type : String,
        // required : false
    },
    license : {
        type: String,
        // required : true
    },
    
});
const Staff = mongoose.model("Staff", staffScheme);

module.exports = Staff;