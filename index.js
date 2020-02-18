const express = require('express');
const router = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express aap
const app = express();
//connecting to db
mongoose.connect('mongodb://navendu:navolu09@ds155730.mlab.com:55730/blood-bank',{useNewUrlParser : true});
mongoose.Promise = global.Promise;

//serving static files
app.use(express.static('public'))

//middleware for parsing the post body
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//home route
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/home.html');
});
//middleware for router
app.use(router);
//middleware for error handling
app.use((err,req,res,next)=>{
    res.status(422).send({error:err.message});
    console.log('error:',err.message);
})


app.listen(process.env.PORT || 8000,()=>{
    console.log('listening on port 8000');
})