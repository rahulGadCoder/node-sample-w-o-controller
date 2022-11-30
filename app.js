const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());
// Middle ware 


// Routes
const postRoute = require('./routes/posts');
app.use('/posts',postRoute)

app.get('/', (req, res) => {
    res.send('I am in home');
})


// connect mongoDb
mongoose.connect(process.env.DB_CONNECTION, 
() => {
    console.log('connected');
})


app.listen(3000);