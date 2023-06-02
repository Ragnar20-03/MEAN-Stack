const express = require('express');
const app= express();
const {MongoClient} = require('mongodb');

const URL = "mongodb://127.0.0.1:27017";

const client = new MongoClient(URL);

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");
    res.header("Access-Control-Allow-Header",
    "Origin, X-Requested-with, Content-Type, Accept"
    );
    next();
})

app.get('/',async(req,res)=>{
    const result =await client.connect();
    const db = result.db("Marvellous");
    const collection = db.collection("Batches");
    const data = await collection.find({}).toArray();
    res.send(data);
})

app.listen(5100,function(req,res){
    console.log("Server is started")
});
