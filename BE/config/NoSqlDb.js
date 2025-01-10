const mongoose =require("mongoose");
require("dotenv").config();
async function ConnectToDb() {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to database");
    }
    catch(error){
        console.error("The error is : ",error);
        res.json({
            message:"Can't connect to the Database right now",
            error:error.message
        })
    }
}

module.exports= ConnectToDb;