const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    
    user_id:{
        type:String,
        minLength:1,
        required: true
    },
    name:{
        type:String,
        minLength:1,
        required: true
    },
    surname: {
        type:String,
        minLength:1
    },
    email: {
        type:String,
        minLength:1,
        required: true
    },
    password: {
        type:String,
        minLength:6,
        required: true
    },
    job_title: {
        type:String,
        minLength:1
    },
    branch_id: {
        type:String,
        minLength:1
    },
    gender: {
        type:String,
        minLength:1
    },
    contact_number: {
        type:Number,
        minLength:10
    },
    notes: {
        type:String,
        minLength:1
    },
    type: {
        type:String,
        required: true,
        enum: ["Manager", "Employee", "Admin"]
    },
    shift: {
        type:String,
        minLength:1
    },
    Birthday: {
        type:String,
        minLength:1
    },
    lastLogin: {
        type:Date,
        // required: true,
        default: new Date(Date.now())
    }
});

const user = mongoose.model("users", usersSchema);

module.exports= user;