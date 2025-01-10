const mongoose = require("mongoose");
const { number } = require("zod");
const {schema} = mongoose;


// Defining Scehma
const UserSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [50, "Name must not exceed 50 characters"],
      },
      accountNumber: {
        type: String,
        required: [true, "Account Number is required"],
        unique: true,
        validate: {
          validator: function (value) {
            return /^[0-9]{10}$/.test(value); // ensures 10-digit account number
          },
          message: "Account Number must be a 10-digit number",
        },
      },
      dob: {
        type: Date,
        required: [true, "Date of Birth is required"],
        validate: {
          validator: function (value) {
            return value < new Date(); // since DOB is some past date 
          },
          message: "Date of Birth must be in the past",
        },
      },
      city: {
        type: String,
        required: [true, "City is required"],
        trim: true,
      },
      password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"],
        validate: {
          validator: function (value) {
            // at least one uppercase, one lowercase, one digit, and one special character
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
          },
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
        },
      },
      initialBalance: {
        type: Number,
        required: [true, "Initial Balance is required"],
        min: [2000, "Initial Balance must be at least 2000"],
      },
      contactNumber: {
        type: String,
        required: [true, "Contact Number is required"],
        unique: true,
        validate: {
          validator: function (value) {
            return /^[6-9]\d{9}$/.test(value); // validates Indian 10-digit mobile number
          },
          message: "Contact Number must be a valid 10-digit Indian number",
        },
      },
      email: {
        type: String,
        required: [true, "Email ID is required"],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
          validator: function (value) {
            // Email validation
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          },
          message: "Invalid Email ID format",
        },
      },
      address: {
        type: String,
        required: [true, "Address is required"],
        trim: true,
      },
    });


    // generate a random 10-digit account number before saving a user
    userSchema.pre("save", function (next) {
        if (!this.accountNumber) {
          this.accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString(); 
        }
        next();
      });


const UserModel=mongoose.model("user",UserSchema);

module.exports=UserModel;