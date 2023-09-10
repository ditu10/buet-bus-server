const mongoose = require('mongoose');

const pickupPoint = mongoose.Schema({
    place : {
        type: String
    },
    time : {
        type : String 
    }
})


const routeScheme = mongoose.Schema({
    routeName : {
        type : String,
        required : true
    },
    routeId : {
        type : String,
        required : true
    },
    pickupPoints : {
        type : [pickupPoint],
        required : true
    },
    departureTime : {
        type : String,
        // required : true 
    },
    bus : {
        type : [String]
    }
    
});
const Route = mongoose.model("Route", routeScheme);

module.exports = Route;