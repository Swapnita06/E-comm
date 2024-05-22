const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB= async ()=>{
    mongoose.connect('mongodb://localhost:27017/e-commerce');
    const productSchema = new mongoose.Schema({});
    const product = mongoose.model('product', productSchema);
    const data = await product.find();
    console.warn(data);
}
connectDB();
app.listen(5000)