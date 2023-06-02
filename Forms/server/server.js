const { MongoClient } = require('mongodb');
URL = "mongodb://127.0.0.1:27017"
const client = new MongoClient(URL)

 express = require('express');
 app = express();

 app.listen(5100 , ()=>{
    console.log("Server started on 5100");
 })

 app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200");

    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-with, Content-Type, Accept");

    next();
});
 
 app.get(('/') , (req,res) => {
    res.send("Server is started")
 })

 app.post('/post' , async function(req , res) {
    let usreData = req.body;
    console.log(usreData);
    let result = await client.connect();
    let db = result.db('registration');
    let collection = db.collection('data');

    // let query = await collection.insertOne({"Name" : usreData.username , "password" : usreData.password, "city" : usreData.city})

    // if((await query).acknowledged){
    //     console.log("Data added");
    // }

 } )