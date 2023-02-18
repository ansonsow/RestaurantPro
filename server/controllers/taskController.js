

let Task = require("../models/tasks")

// const findTask = (tid,res) =>{
//         const tasks = Task.find({task_id:tid}).then(result=>{
//             // res.status(201)
//             //    .json(result);
//             // return result;
//         }).catch(err=>{
//             console.log(err)
//             // res.status(500)
//             //    .json(err);
//             // return false;
//         });
// }

// const findAllTasks = (res) =>{
//     const tasks = Task.find().then(result=>{
//         res.status(201)
//            .json(result);
//     }).catch(err=>{
//         res.status(500)
//            .json(err);
//     });
// }

const getTask = async (req,res)=>{
    const tid = req.params.tid;

    if(typeof(tid)=="undefined"){
        const tasks = Task.find().then(result=>{
            res.status(201)
               .json(result);
        }).catch(err=>{
            res.status(500)
               .json(err);
        });
    }else{
        const tasks = Task.find({task_id:tid}).then(result=>{
            res.status(201)
               .json(result);
        }).catch(err=>{
            console.log(err)
            res.status(500)
               .json(err);
        });
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


const updateTask = async (req,res) =>{
    const tid = req.params.tid;
    const task = await Task.findOne({task_id:tid})
    task.task_name = req.body.task_name;

    for (const key in req.body) {
        task[key] = req.body[key]
    }
    const updatedDocument = await task.save();
    res.send(task);

}


module.exports= {getTask,saveTask,updateTask}