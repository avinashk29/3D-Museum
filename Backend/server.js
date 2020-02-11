const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const mongoose = require('mongoose');

// Routes Imports
const productRoutes = require('./Routes/product');
const userRoutes = require('./Routes/user');



// Database Connection to MLab
mongoose.connect('mongodb+srv://avinash:vgAB2Gx3Xmq74Wl9@cluster0-y6gls.mongodb.net/test?retryWrites=true&w=majority').then(res => {
    console.log("connected to database");
    const server = http.listen(8080, function(){
        console.log('Server working on port 8080');
      });
}).catch(err => {
    console.log(err);
})


// CROS Code to connect to angular
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin' , 'http://localhost:4200');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers,  Origin,Accept, X-Requested-With, Content-Type, authorization, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.append("Access-Control-Request-Headers", "Origin, Accept,Access-Control-Allow-Headers,  Origin,Accept, X-Requested-With,  Content-Type, authorization, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.append('Access-Control-Allow-Credentials', true);
    next();
});

// To parse the coming data 
app.use(bodyParser.json());

// Routes for the app

app.use(productRoutes);
app.use(userRoutes);