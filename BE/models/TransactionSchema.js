const mongoose= require("mongoose");
const {Schema}=mongoose;
const ObjectId=mongoose.Types.ObjectId;


// Defining Schema
const TransactionSchema= new mongoose.Schema({
    accountNumber:{
        type:ObjectId
    },

    type: {
        type: String,
        enum: ["credit", "debit", "transfer"], 
        required: true, 
      },

      amount: {
        type: Number,
        required: true,
        min: [1, "Amount must be greater than zero"], 
      },

      date: {
        type: Date,
        default: Date.now, 
      },

      recipient_account: {
        type: String,
        required: function () {
          return this.type === "transfer";
        }, 
      },

      remarks: {
        type: String,
        trim: true,
      },

});

const TransactionModel=mongoose.model("user",TransactionSchema);
    
module.exports=TransactionModel;



