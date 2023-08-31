const express = require('express');
const cors = require('cors');
const app = express();
const busHandler = require('./routes/busHandler')
const routeHandler = require('./routes/routeHandler');
const staffHandler = require('./routes/staffHandler')
const mongoose = require('mongoose');
require('dotenv').config()
const connectDB = require('./config/dbConfig')



//middleware
app.use(cors()); 
app.use(express.json());

const PORT = process.env.PORT || 5000;


const connect_to_db = async () => {
    try {
        // const conn = await mongoose.connect(process.env.MONGO_URI);
        await connectDB();
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log(error);
    }
};

//Connect to the database before listening
connect_to_db().then(() => {
    app.listen(PORT, () => {
        console.log('Buet bus system Server is Listening at port : ',PORT);
    });
});






// busHandler 
app.use('/bus', busHandler);

// staffHandler
app.use('/staff', staffHandler);

// routeHandler 
app.use('/route', routeHandler)


app.get('/', (req,res)=>{
    res.send("Hello from Node server");
})

// not found any route error : 404
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    console.log('no route found');
    res.send(error);
});

// final error handling  middl eware error : 500

app.use((err, req, res, next) => {
    console.log('last middleware');
    res.status(err.status || 500).send(err.message);
});










