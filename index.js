const express = require('express');
const cors = require('cors');
const app = express();
const busHandler = require('./routes/busHandler')
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


app.get('/', (req,res)=>{
    res.send("Hello from Node server");
})










