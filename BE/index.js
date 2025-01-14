const express = require("express");
const mongoose= require("mongoose");
const bcrypt = require("bcrypt");

const app=express();

// Middleware for parsing JSON
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        message:"Server is running"
    });
});

app.post("/api/v1/createacc", async (req,res)=>{
    const { fullname, email, dob, gender, address, city, state, pincode, password } = req.body;
    const hased_password = await bcrypt.hash(password,5);
    
    
})


const PORT = process.env.PORT||3000;
app.listen(PORT , ()=>{
    console.log(`Serving on http://localhost:${PORT}`);
});
