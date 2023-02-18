const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userTasksSchema = new Schema({
    task_id:{
        type:String
    },
    user_id: {
        type:String
    },
    status: {
        type:String
    }
});

const userTask = mongoose.model("userTasks", userTasksSchema);

module.exports= userTask;