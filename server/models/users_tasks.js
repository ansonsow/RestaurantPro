const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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
        default: false
    }
});

const userTask = mongoose.model("userTasks", userTasksSchema);

module.exports= userTask;