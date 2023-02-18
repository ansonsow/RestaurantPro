let UserTask = require("../models/users_tasks")

const isToday = (someDate) => {
    const today = new Date()
    return someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
}

const getUserTask = (req,res)=>{

    const uid = req.params.uid;
    const tid = req.params.tid;

    if(typeof(uid)=="undefined"&&typeof(tid)=="undefined"){
        UserTask.find().then(result=>{
            res.status(200)
               .json(result)
        });
    }else{

        if(typeof(uid)=="undefined"){
            UserTask.find({task_id:tid}).then(result=>{
                res.json(result)
            })
        }else if(typeof(tid)=="undefined"){
            UserTask.find({user_id:uid}).then(result=>{
                res.json(result)
            })
        }else{
            UserTask.find({user_id:uid, task_id:tid}).then(result=>{
                res.json(result)
            }).catch(err=>{
                res.json(err)
            })
        }
    }

};

// const getUserTaskToday = async (req,res)=>{
//     const utToday = await UserTask.find({date: {$gt: Date.now()}});
//     res.json(utToday);
// }

const saveUserTask = (req,res) =>{

    let newUserTask = new UserTask(req.body);
    newUserTask.save().then(
        result=>{
            res.status(201)
               .json(newUserTask);
        }
    ).catch(error=>{
        res.status(500)
           .json(error);
    })
}


const updateUserTask = async (req,res) =>{
    const tid = req.params.tid;
    const uid = req.params.uid;
    const userTask = await UserTask.findOne({task_id:tid, user_id:uid})

    userTask.status = !userTask.status
    const updatedDocument = await userTask.save();
    res.json(userTask);

}

module.exports= {getUserTask, saveUserTask,updateUserTask}