
const { MongodbClient, MongoClient } = require('mongodb');
const URL = "mongodb://127.0.0.1:27017"
const client = new MongoClient(URL);

async function getConnection() {

    let result = await client.connect();
    let database = result.db("Marvellous");
    return await database.collection("Batches");

}

async function readData() {
    let conn = await getConnection();
    let data = await conn.find({}).toArray();
    console.log(data);

}
async function insertData() {
    let conn = await getConnection();
    let data = await conn.insertOne({ "Batch": "Linux", "Fees": 5000 })
    if (data.acknowledged) {
        console.log("Succesfully enterd data");
    }
}
async function updateData() {
    let conn = await getConnection();
    let result = await conn.updateOne({ "Batch": "Linux" }, { $set: { "Fees": "20001" } })
    if (result.acknowledged) {
        console.log("Update Data Operaion Succesfull");
    }
}
async function deleteData() {
    let conn = await getConnection();
    let result = await conn.deleteOne({ "Batch": "Linux" })
    if (result.acknowledged) {
        console.log("Delete Data Operaion Succesfull");
    }
}

function main() {
    // insertData();
    // deleteData();
    // updateData();
    readData();
}
main();


// Angular to Node Express Server Connection ..
const express = require('express');
const app = express();

app.listen(5100), function (req, res) {
    console.log("Server Started");
}


// //Handling cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200");

    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-with, Content-Type, Accept");

    next();
});


app.get('/', (req, res) => {
    res.status(202).send("Marvelllous Server is live on ROOT");
    res.json("Marvelllous Server is live on ROOT")
})
app.get('/getBatches', function (req, res) {
    res.json([
        { "PPA": "18000" },
        { "LSP": "19000" }
        ]
        )
        readData();
})