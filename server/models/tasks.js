const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todaysDate = new Date(Date.now());
// const isoTime = todaysDate.toISOString("en-CA", {timeZone: "America/Toronto"});

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}
const twoHLater = todaysDate.addHours(2);


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
    // due date defult to 2 hours later unless specified
    due_date:{
        type: Date,
        default: twoHLater
    },
    priority:{
        type: Number,
        default: 0
    },
    brach_id:{
        type: String
    }
})

const Task = mongoose.model("Tasks", tasksSchema);

module.exports= Task;