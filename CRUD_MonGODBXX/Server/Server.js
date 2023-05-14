
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

async function readData()
{

    let data = await getConnection();
        data = await data.find().toArray();
        console.log("Data From Marvellous Database is :");
        console.log(data);
}

// Entry point function of node.JS + Express Server
function main()
{
    readData();
}

// Starter of The Application
main();