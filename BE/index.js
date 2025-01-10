const express = require("express");
const mongoose= require("mongoose");
const app=express();


app.get('/',(req,res)=>{
    res.json({
        message:"Server is running"
    });
});

app.get("")


const PORT = process.env.PORT||3000;
app.listen(PORT , ()=>{
    console.log(`Serving on http://localhost:${PORT}`);
});
