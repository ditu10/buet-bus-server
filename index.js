const express = require('express');
const cors = require('cors');
const app = express();

//middleware
app.use(cors()); 
app.use(express.json());

const PORT = 5000;

app.get('/', (req,res)=>{
    res.send("Hello from Node server");
})

const buses = [
    {id:1, name: 'ঢাকা মেট্রো স', busno: '40-6032', driver: "Alam"},
    {id:2, name: 'ঢাকা মেট্রো স', busno: '40-6033', driver: "Salam"},
    {id:3, name: 'ঢাকা মেট্রো স', busno: '40-6034',driver: "Kalam"},
    {id:4, name: 'ঢাকা মেট্রো স', busno: '40-6036',driver: "Jamal"},
    {id:5, name: 'ঢাকা মেট্রো স', busno: '40-6031',driver: "Helal"},
    {id:6, name: 'ঢাকা মেট্রো স', busno: '40-6042',driver: "Sadek"},
    {id:7, name: 'ঢাকা মেট্রো স', busno: '40-6041',driver: "Kadir"},
    {id:8, name: 'ঢাকা মেট্রো স', busno: '40-6044',driver: "Polash"},
    {id:9, name: 'ঢাকা মেট্রো স', busno: '40-6045',driver: "Mehedi"},
    {id:10, name: 'ঢাকা মেট্রো স', busno: '40-6046',driver: "Saifur"},
];

app.get('/buses', (req, res)=>{
    // const search = req.query.search;
    // console.log(search);
    // if(search){
    //     const searchResult = buses.filter(bus=> bus.driver.toLocaleLowerCase().includes(search));
    //     res.send(searchResult);
    // }
    // else{
    //     res.send(buses);
    // }  const data = req.body;
    console.log('new Bus Data : ', data);
    res.send(data);
    res.send(buses);
})

// create a new bus
app.post('/bus', (req, res)=>{

    const data = req.body;
    console.log('new Bus Data : ', data);
    res.send(data);
})



app.get('/buses/:id', (req, res)=>{ 
    const id = req.params.id;
    console.log("requested bus id: ",id);
    if(id<1 || id>= buses.length){
        res.send("Invalid bus id");
    }
    else
        res.send(buses[id-1]);
})

app.listen(PORT, ()=>{
    console.log("buet bus backend demo is listening on PORT: " + {PORT});
})