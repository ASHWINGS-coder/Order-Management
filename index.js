const express = require('express'); // importing express
const port = 3000;

const app = express(); // using express
app.use(express.urlencoded());




// listening to server
app.listen(port,function(err){
    if(err){
        console('Error in running server')
    }

    console.log(`Server is running in port ${port}`);
})