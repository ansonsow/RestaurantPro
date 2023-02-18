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
    }
});

const user = mongoose.model("users", usersSchema);

module.exports= user;