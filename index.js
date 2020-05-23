const express = require('express'); // importing express
const port = 3000; 
const db = require('./config/mongoose') // importing mongoose file
const app = express(); // using express
const bodyParser = require('body-parser'); // using body parser
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
// routing action
app.use('/',require('./routers/index'))


// listening to server
app.listen(port,function(err){
    if(err){
        console('Error in running server')
    }

    console.log(`Server is running in port ${port}`);
})