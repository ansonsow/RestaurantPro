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

        default: ""
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

        default: ""

    },
    branch_id: {
        type:String,

        default: ""

    },
    gender: {
        type:String,

        default: ""

    },
    restaurantName:{
        type:String,
        minLength:1,
        required: false
    },
    contact_number: {
        type:Number,

        default: ""

    },
    notes: {
        type:String,

        default: ""

    },
    type: {
        type:String,
        required: true,
    },
    shift: {
        type:String,

        default: ""

    },
    birthday: {
        type:String,

        default: ""

    },
    lastLogin: {
        type:Date,
        // required: true,
        default: new Date(Date.now())
    },

    thisLogin: {
        type:Date,
        // required: true,
        default: new Date(Date.now())
    }
});

const user = mongoose.model("users", usersSchema);

module.exports= user;