


const {MongoClient} = require ("mongodb")  //Mongo DB Driver
// const URL = "mongodb://localhost:27017"
const URL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(URL)  //Mongo DB Driver Object


// User define Function

async function getConnection()
{
    let result = await client.connect();  //1 connect With MongoDB
            //  .connect takes time hence . [  await  ]

    let db = result.db("Marvellous");    // Connect with Marvellous Database   
    
    let collection = db.collection("Batches"); // Connect with Batches collection (table) in Marvellous database
    
    let res = await collection.find({}).toArray(); // takes data in response variable via Find Method;

    console.log(res);
    
}
getConnection();

