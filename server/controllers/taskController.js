

let Task = require("../models/tasks")

const findTask = (tid,res) =>{
        const tasks = Task.find({task_id:tid}).then(result=>{
            res.status(201)
               .json(result);
        }).catch(err=>{
            res.status(500)
               .json(err);
        });
}

const findAllTasks = (res) =>{
    const tasks = Task.find().then(result=>{
        res.status(201)
           .json(result);
    }).catch(err=>{
        res.status(500)
           .json(err);
    });
}

const getTask = async (req,res)=>{
    const tid = req.params.tid;
    // let newTask = new Task
    let result = [200,"ha"];

    if(typeof(tid)=="undefined"){
        result = findAllTasks(res)
    }else{
        result = findTask(tid,res)
    }

}


const saveTask = (req,res) =>{
    
    let newTask = new Task(req.body);
    newTask.save().then(
        result=>{
            res.status(201)
               .json(newTask);
        }
    ).catch(error=>{
        res.status(500)
           .json(error);
    })
    // res.send("woo")
}



module.exports= {getTask,saveTask}