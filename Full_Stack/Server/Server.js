    // /////////////////////////////////////////////////////////////////////////
    // 
    // node Express  Server Connection with MongoDB 
    //   Node Express Server. ->  MongoDb 
    // 
    // /////////////////////////////////////////////////////////////////////////

const {MongoClient} = require('mongodb')
// const URL  = "mongodb://localhost:27017";
const URL  = "mongodb://127.0.0.1:27017";
const DriverObj = new MongoClient(URL);

   async function getConnection()
    {
        let result = await DriverObj.connect();

        let db = result.db("Marvellous");

        return db.collection("Batches");

    }

    // Reading Data
    async function readData(){
        let data = await getConnection();
        data = await data.find({}).toArray();
        console.log("Data Reading From MArvellous Database ");
        console.log(data);
    }
    async function deleteData(){
        let data= await getConnection();
         let result = await data.deleteOne( {"Batch" : "Linux"}  )
        if(result.acknowledged)
        {
            console.log("Delete Operaion is sucesfull");
        }
    }
    async function updateData()
    {
        let data = await getConnection();
        let result = await data.updateOne({"Batch":"PPA"}, {$set : {"Fees":"20001"}})
        if(result.acknowledged)
        {
            console.log("Update Data Operaion Succesfull");
        }
    }
    async function insertData()
    {
        let data = await getConnection();
        let result = await data.insertOne({"Batch" :"Linux" , "Fees": 51});
        if(result.acknowledged)
        {
            console.log("Data Insert Operation Scussceful");
        }
    }

    function main()
    {
        // deleteData();
        // updateData();
        // insertData();
        readData();

    }

    main();


    // /////////////////////////////////////////////////////////////////////////
    // 
    // Angular  Connection with Node Express Server
    //  Angular -> Node Express Server.
    // 
    // /////////////////////////////////////////////////////////////////////////
    const express = require('express');
    const app = express();


app.listen(5100, function(req,res){
  console.log("Marvellous Server is started succesfully");
});

// //Handling cors
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin",
  "http://localhost:4200");

  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-with, Content-Type, Accept");

  next();
});

app.get('/',MarvellousGet);

function MarvellousGet(req,res)
{
  res.json("Marvellous Server is On");
}

app.get('/getBatches',MarvellousGetBatches);

function MarvellousGetBatches(req,res)
{
      res.json(
        [
        {"PPA" : "18000"} ,
        {"LSp": "14500"}, 
        {"Angular": "50000" }
        ]
        )
}