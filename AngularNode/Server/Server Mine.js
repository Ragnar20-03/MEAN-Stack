const express = require('express');

//    eobj...
const app = express();

app.listen(5100 , function(req,res){
    console.log("Marvellous server is Started Succesfuuly..");
});

// //////////////////////////////////////////
// Handling CORS

app.use((req,res,next) => {
    res.header("Access-Control_Allow-Origin" , "http://localhost:4200");

    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept"    );
    next();
});


// ////////////////////////////
app.get('/' , function(req, res) {
    res.status(202).send(" Marvellous Server is ON ");
})

app.get('/getBatches' , (req,res) => {
    res.json({"Batch " : "PPA" , "Fees" : 18500});
})