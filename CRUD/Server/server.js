const express = require('express');

eobj = express();

eobj.use(express.json());

eobj.listen(5100 , function(){
    console.log("Server started");
})

eobj.get('/',function(req,res){
    res.send("Marvellous InfoSystems")
})