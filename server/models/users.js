const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    
    user_id:{
        type:String,
        minLength:1
    },
    name:{
        type:String,
        minLength:1
    },
    surname: {
        type:String,
        minLength:1
    },
    email: {
        type:String,
        minLength:1
    },
    password: {
        type:String,
        minLength:6
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