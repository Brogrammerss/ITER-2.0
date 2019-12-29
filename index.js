require('./config/config')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGODB_URI ,{useNewUrlParser:true,useUnifiedTopology:true});
var root = require('./routes/index');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));





app.set('views',__dirname + '/public');
app.engine('html',require('ejs').renderFile)
app.set('view engine','ejs');



app.use('/',root);

app.use(express.static(__dirname+'/public'));


var PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
