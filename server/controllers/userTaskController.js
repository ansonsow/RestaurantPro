let UserTask = require("../models/users_tasks")

const getUserTask = (req,res)=>{

    const uid = req.params.uid;
    const tid = req.params.tid;

    if(typeof(uid)=="undefined"||typeof(tid)=="undefined"){
        UserTask.find().then(result=>{
            res.status(200)
               .json(result)
        });
    }else{
        UserTask.find({user_id:uid, task_id:tid}).then(result=>{
            res.json(result)
        }).catch(err=>{
            res.json(err)
        })
    }

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

const updateUserTask = (req,res) =>{
    
}

module.exports= {getUserTask, saveUserTask}