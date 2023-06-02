express = require('express');
const app = express();

const {MongoClient, Collection} = require('mongodb');
const URL = "mongodb://127.0.0.1:27017" ;
const client = new MongoClient(URL);

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");
    res.header("Access-Control-Allow-Header",
    "Origin, X-Requested-with, Content-Type, Accept"
    );
    next();
})
app.listen (5100 , ()=>{
    console.log("Server Started");
})

app.get('/' , async (req , res) => {
    let result = await client.connect();
    let db =    result.db("Marvellous");
    let collection = db.collection("Batches");
    let data = await collection.find({}).toArray();
    console.log(data);
    res.send(data);
})