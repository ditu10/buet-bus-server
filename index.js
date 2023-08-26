const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

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
    // }
    res.send(buses);
})
app.get('/buses/:id', (req, res)=>{ 
    const id = req.params.id;
    console.log("requested bus id: ",id);
    res.send(buses[id-1]);
})

app.listen(PORT, ()=>{
    console.log("buet bus backend demo is listening on PORT: " + {PORT});
})