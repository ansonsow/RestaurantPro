const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let todaysDate = new Date(Date.now());

let isoTime = todaysDate.toISOString("en-CA", {timeZone: "America/Vancouver"});


const userTasksSchema = new Schema({
    task_id:{
        type:String,
        required: true
    },
    user_id: {
        type:String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    date: {
        type: Date,
        default: isoTime
    }
});

const userTask = mongoose.model("userTasks", userTasksSchema);

module.exports= userTask;