const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tasksSchema = new Schema({
    task_id:{
        type: String,
        required: true,
        minLength: 1
    },
    task_name:{
        type: String,
        required: true,
        minLength: 1
    },
    task_desc:{
        type: String,
        minLength: 1
    },
    task_status:{
        type: Boolean,
        default: false
    },
    task_type:{
        type:String,
        minLength: 1
    },
    created_date:{
        type: Date,
        default: Date.now()
    },
    due_date:{
        type: Date
    },
    priority:{
        type: Number,
        default: 1
    },
    brach_id:{
        type: String
    }
})

const Task = mongoose.model("Tasks", tasksSchema);

module.exports= Task;