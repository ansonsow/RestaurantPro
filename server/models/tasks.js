const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tasksSchema = new Schema({
    task_id:{
        type:String,
    }
})

const Task = mongoose.model("Tasks", tasksSchema);

module.exports= Task;