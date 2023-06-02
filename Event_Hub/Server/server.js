const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api')

const app = express();
app.use(bodyParser.json());
app.use('/api' , api);

const PORT = 5100;

app.listen(PORT ,  ()=> {
    console.log("Server Started on Port Number : "+PORT);
})

app.get('/' , (req , res) => {
    res.send("Hello From Server")
})