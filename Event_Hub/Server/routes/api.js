const express = require('express');
const router  = express.Router();

const {MongoClient} = require('mongodb');
const URL = "mongodb://127.0.0.1:27017"
const client  = new MongoClient(URL)

// Get Connections 
async function getConnectonUser()
{
    let conn = await client.connect();
    if(!conn)
    {
        console.log("Failed to connect with MONGODB");
    }
    else
    {
        let db = await conn.db("Marvellous");
        return db.collection("users")
    }
}

async function getConnectionEvents(){
    let conn = await client.connect();
    if(!conn)
    {
        console.log("Connection to MongoDb Events is Failed");
    }
    let db = conn.db("Marvellous");
    return db.collection("events")
}

async function getConnectionSpecialEvents()
{
    let conn = await client.connect();
    if(!conn)
    {
        console.log("Connection to MongoDb Special Events is Failed");
    }
    let db = conn.db("Marvellous");
    return  db.collection("specialEvents")
}

// ///////////////////////////////

// Regitser Component
router.post('/register' , async(req , res) => {
    let conn =await getConnectonUser();
    let data =await readUser();
    console.log(data);
    let userData = req.body;
    let iCnt = 0;
    for (iCnt = 0 ; iCnt < data.length; iCnt++)
    {
        if(data[iCnt].email == userData.email)
        {
            res.status(400).send("Already register with that email")
            break;
        }
    }
    if(iCnt == data.length)
    {
        let query = await conn.insertOne({"email" : userData.email , "password" : userData.password})
        if( query.acknowledged)
        {
            res.status(200).send("Data Added")
        }
        else
        {
            res.status(400).send("Technical issue at our side")
        }
    }
})

// Login Component
router.post('/login' , async ( req , res) => {
    let userData = req.body;
    let data = await readUser()
    console.log(data);
    let conn = await getConnectonUser();
    let iCnt = 0;
    for (iCnt = 0 ; iCnt < data.length; iCnt++)
    {
        if(data[iCnt].email == userData.email)
        {
            if(data[iCnt].password == userData.password)
            {
                res.status(200).send("Login Succesful");
                break;       
            }
            else{
                res.status(400).send("Password Not Match")
                break;
            }
        }
    }
    if(data.length == iCnt)
    {
        res.status(400).send("Does Not Have Account")
    }
})

// events Component
router.get( '/events' , async (req ,  res) => {
    res.status(200).send( await readEvents())
})

// Special Events Component
router.get('/specialEvents' , async (req , res) => {
    res.status(200).send(await readSpecialEvents())
})

// ///

// Get
router.get('/' , (req , res) => {
    res.send("Hello From API")
})



module.exports = router


// Read User
async function readUser()
{
    let conn = await getConnectonUser();
    let data = await conn.find({}).toArray();

    return data;
}

async function readEvents()
{
    let conn = await getConnectionEvents()
    let data = conn.find({}).toArray();
    return data;
}
async function readSpecialEvents(){
    let conn = await getConnectionSpecialEvents()
    let data = conn.find({}).toArray();

    return data;
}