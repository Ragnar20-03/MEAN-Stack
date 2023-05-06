express = require('express'); // Module Loading
//express (Any name);

const eobjxx = express();

portxx = 5100;     // Variable declaration;
                 // Project Port Number;

                 
function StartServerxx()
{
    console.log("Server is Listening..");
}

// Server is Listening; 
eobjxx.listen(portxx , StartServerxx ); 

function GetMethodxx(requestxx , responsexx)
{
    responsexx.send("Marvellous Server is Live...");
}

eobjxx.get('/' , GetMethodxx)
    //   Route   Method Name