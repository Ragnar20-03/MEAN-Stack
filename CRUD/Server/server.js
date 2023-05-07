batches = [
    {id : 1,name :"PPA" , duration : "4 Monhs"},
    {id : 2,name :"Lb" , duration : "3.5 Months"},
    {id : 3,name :"Python" , duration : "3 Monhs"},
    {id : 4,name :"LSP" , duration : "4.5 Monhs"}
];



// ///////////////////////////////////
// /////////////////////////////////////
// //////////////////////////////////////
const express = require('express');

eobj = express();

eobj.use(express.json());

eobj.listen(5100 , function(){
    console.log("Server started");
});

eobj.get('/',function(req,res){
    res.send("Marvellous InfoSystems")
});

///////////////////////////////////////////////

// Read data from database
eobj.get('/getbatches' , function(req,res){
    res.send(batches)
})


eobj.get('/getBatches/:id' , ReadDataID)
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

// ////////////////////////////////////////
//////////////////////////////////////////


// Delete the Data From database(Delete)
eobj.delete('/getbatches/:id',(req,res) => {
 var iCnt=0;
 for(iCnt=0; iCnt<batches.length; iCnt++)
 {
    if(batches[iCnt].id == req.params.id)
    {
        break;
    }
 }
 if(iCnt == batches.length)
 {
    res.status(404).send("There is No such batch to delete");
 }
 else{
    batches.splice(iCnt,1);
    res.send(batches);
 }
})

////////////////////////////////////////////
///////////////////////////////////


// Create Data into The database(Post)


eobj.post('/batches',function(req,res){
    const newData={
        id : batches.length+1,
        name:req.body.name,
        duration : req.body.duration
    }

    batches.push(newData);
    res.send(batches);
    
})

// /////////////////////////////////////////
// /////////////////////////////////////////

// Update the data From DataBase(Put)

eobj.put('/getbatches/:id' , (req,res) => {
    var iCnt=0;
    for (iCnt= 0; iCnt<batches.length; iCnt++)
    {
        if(batches[iCnt] == req.params.id)
        {
            break;
        }
    }
    if(iCnt == batches.length)
    {
        res.status(404).send("There is no such Record to UPDATE");
    }

    else{
        batches[iCnt].name=req.body.name;
        batches[iCnt].name=req.body.duration;

        res.send(batches[iCnt]);
    }
})