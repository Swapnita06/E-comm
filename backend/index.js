const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDb= async ()=>{
    mongoose.connect('mongodb://localhost:27017')
}

app.listen(5000)