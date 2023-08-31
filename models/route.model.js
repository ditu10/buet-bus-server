const mongoose = require('mongoose');

const routeScheme = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    stoppage : {
        type : [String],
        required : true
    },
    startTime : {
        type : Date,
        // required : true
    },
    endTime : {
        type : Date,
        // required : true
    }
    
});
const Route = mongoose.model("Route", routeScheme);

module.exports = Route;