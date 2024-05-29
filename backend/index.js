const express = require('express'); // Import the Express library
const cors = require("cors"); // Import the CORS middleware
require('./db/config'); // Connect to the database
const User = require("./db/User") // Import the User model
const app = express(); // Create an Express application

app.use(express.json()); // Use the JSON parser middleware
app.use(cors()); // Use the CORS middleware
app.post("/register",async (req,resp)=>{
    const user = new User(req.body); // Create a new User with the order details
    let result= await user.save(); // Save the user in the database (kitchen)
    result = result.toObject();// Convert the result to a standard format that is plain javascript object
    delete result.password; // Remove the password before sending back to the customer
       resp.send(result);// Send the response back to the customers
})

app.post("/login",async(req,resp)=>{
    console.log(req.body) 
    if(req.body.password && req.body.email){ // Check if both email and password are provided

        let user = await  User.findOne(req.body).select("-password"); // Find the user in the database
    if(user){
        resp.send(user) // Send the user details back to the client
    }else{
        resp.send("user not found") // Inform the customer that the user was not found
    }
    }else{
        resp.send("please enter email and password") // Ask the client to provide both email and password
    }
    
    
})

app.listen(5000)