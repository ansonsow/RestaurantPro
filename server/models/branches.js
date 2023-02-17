const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const branchesSchema = new Schema({
    branch_id:{
        type:String,
    }
})