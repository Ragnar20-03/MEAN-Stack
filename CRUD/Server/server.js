const express = require('express');

eobj = express();

eobj.use(express.json());

eobj.listen(5100 , function(){
    console.log("Server started");
});

eobj.get('/',function(req,res){
    res.send("Marvellous InfoSystems")
});


batches = [
    {id : 1,name :"PPA" , duration : "4 Monhs"},
    {id : 2,name :"Lb" , duration : "3.5 Months"},
    {id : 3,name :"Python" , duration : "3 Monhs"},
    {id : 4,name :"LSP" , duration : "4.5 Monhs"}
];

// Read data from database
eobj.get('/getbatches' , function(req,res){
    res.send(batches)
})


function ReadDataID(req,res)
{
    var iCnt=0;
    for(iCnt=0; iCnt<batches.length; iCnt++)
    {
                                 // url parameters
        if(batches[iCnt].id == req.params.id)
        {
            break;
        }
    }
    if(iCnt == batches.length)
    {
        res.status(402).send("There is No Such Batch");
    }
    else{
        res.send(batches[iCnt])
    }
}

eobj.get('/getBatches/:id' , ReadDataID)