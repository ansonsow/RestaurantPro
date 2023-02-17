

let Task = require("../models/tasks")

const saveTask = (req,res) =>{
    
    // let newTask = new Task(req.body);
    // newTask.save().then(
    //     result=>{
    //         res.status(201)
    //            .json(result);
    //     }
    // ).catch(error=>{
    //     res.status(500)
    //        .json(error);
    // })
    res.send("woo")

}

const test = (req,res) =>{
    res.send("huhu")
}

