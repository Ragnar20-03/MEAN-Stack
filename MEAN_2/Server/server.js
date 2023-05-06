express = require('express');

eobj = express();

eobj.listen(5100,function(){
    console.log("Server Started Susccesfully");
});

// http://localhost:5100/
eobj.get('/',function(req,res){
    res.send("Server is Live at Root....");
});

// http://localhost:5100/PPA
eobj.get('/PPA',function(req,res){
    res.send("Server is Live at PPA....");
});

// http://localhost:5100/Angular
eobj.get('/Angular',function(req,res){
    res.send("Server is Live at Angular....");
});

