let UserTask = require("../models/users_tasks")

const getUserTask = (req,res)=>{
    // let newTask = new Task
    UserTask.find().then(result=>{
        res.status(200)
           .json(result)
    });
};

const saveUserTask = (req,res) =>{
    
    let newUserTask = new UserTask(req.body);
    newUserTask.save().then(
        result=>{
            res.status(201)
               .json("Successfully posted entry in Database");
        }
    ).catch(error=>{
        res.status(500)
           .json(error);
    })
}
module.exports= {getUserTask, saveUserTask}