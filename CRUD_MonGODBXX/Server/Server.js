
const { MongoClient } = require("mongodb")  //Mongo DB Driver
// const URL = "mongodb://localhost:27017"
const URL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(URL)  //Mongo DB Driver Object


///////////////////////////////////////////////////////
//
// getConnection
// User define Function
// Used to Connect with MongoDBServer -> Database -> Collection
//
///////////////////////////////////////////////////////

async function getConnection() {
    let result = await client.connect();  //1 connect With MongoDB
    //  .connect takes time hence . [  await  ]

    let db = result.db("Marvellous");    // Connect with Marvellous Database   

    return db.collection("Batches"); // Connect with Batches collection (table) in Marvellous database

}
///////////////////////////////////////////////////////
//
// readData
// User define Function
// used to read data From database
//
///////////////////////////////////////////////////////

async function readData() {

    let data = await getConnection();
    data = await data.find().toArray();
    console.log("Data From Marvellous Database is :");
    console.log(data);
}

///////////////////////////////////////////////////////
//
// deleteData
// User define Function
// Used to delete Data from database
//
///////////////////////////////////////////////////////

async function deleteData() {

    let data = await getConnection();
    let result = await data.deleteOne({ "Batch": "PPA" })
    if (result.acknowledged) {
        console.log("Delete Operation is Prefrom Sussecfully");
    }
}



///////////////////////////////////////////////////////
//
// insertData
// User define Function
// Used to Write Data to database
//
///////////////////////////////////////////////////////

async function insertData() {

    let data = await getConnection();
    let result = await data.insertOne({ "Batch": "PPA" })
    if (result.acknowledged) {
        console.log("Write Operation is Prefrom Sussecfully");
    }
}


///////////////////////////////////////////////////////
//
// insertData
// User define Function
// Used to Update  Data to database
//
///////////////////////////////////////////////////////

async function updateData() {

    let data = await getConnection();
    let result = await data.updateOne({ "Batch": "LSP" } ,{ $set: { "Fees": 89000 }});
if (result.acknowledged) {
    console.log("Update Operation is Prefrom Sussecfully");
}
}

// Entry point function of node.JS + Express Server
function main() {
    // deleteData();
    // readData();
    // insertData();
    // updateData();

}

// Starter of The Application
main();