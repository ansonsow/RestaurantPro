let UserTask = require("../models/users_tasks")

const isToday = (someDate) => {
    const today = new Date()
    return someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
}

const convertTZ = (date, tzString) => {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   

}


const getUserTask = (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
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


// api endpoint to recrive all the user task for today
const getUserTaskToday = async (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    const uid = req.params.uid;
    const tid = req.params.tid;
    const data = []

    if(typeof(uid)=="undefined"&&typeof(tid)=="undefined"){
        const userTask = await UserTask.find()

        for(let i = 0 ;i<userTask.length;i++){
            // console.log(isToday(convertTZ(userTask[i].date, "America/Vancouver")))
            if(!userTask[i].date){
                break;
            }
            const convertDate = convertTZ(userTask[i].date, "America/Vancouver")
            // console.log(userTask[i])
            // console.log(convertDate)
            if(isToday(convertDate)){
                data.push(userTask[i])
            }
        }

        res.json(data).status(200)
    }else{

        if(typeof(uid)=="undefined"){
            const userTask = await UserTask.find({task_id:tid})

            if(!userTask){
                res.json({"message":"unassigned task"}).status(404)
            }else{
                for(let i = 0 ;i<userTask.length;i++){
                    // console.log(isToday(convertTZ(userTask[i].date, "America/Vancouver")))
                    const convertDate = convertTZ(userTask[i].date, "America/Vancouver")

                    if(isToday(convertDate)){
                        data.push(userTask[i])
                    }
                }
        
                res.json(data).status(200)
            }
        }else if(typeof(tid)=="undefined"){
            const userTask = await UserTask.find({user_id:uid})

            if(!userTask){
                res.json({"message":"this user does not have a task today"}).status(404)
            }else{
                for(let i = 0 ;i<userTask.length;i++){
                    // console.log(isToday(convertTZ(userTask[i].date, "America/Vancouver")))
                    const convertDate = convertTZ(userTask[i].date, "America/Vancouver")

                    if(isToday(convertDate)){
                        data.push(userTask[i])
                    }
                }
        
                res.json(data).status(200)
            }
        }else{
            const userTask = await UserTask.find({task_id:tid, user_id:uid})
        }
    }
}



const saveUserTask = (req,res) =>{
    res.header("Access-Control-Allow-Origin", "*");
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

// update the user task for today's document if there is a matching 
const updateUserTask = async (req,res) =>{
    const tid = req.params.tid;
    const uid = req.params.uid;
    const userTask = await UserTask.find({task_id:tid, user_id:uid})
    res.header("Access-Control-Allow-Origin", "*");

    if(!userTask){
        res.json({"message": "can't find document"}).status(404)
    }else{
        for(let i = 0 ;i<userTask.length;i++){
        
            // console.log(convertTZ(userTask[i].date, "America/Vancouver"))
    
            // console.log(isToday(convertTZ(userTask[i].date, "America/Vancouver")))
            if(isToday(userTask[i].date)){
                userTask[i].status = !userTask[i].status
                const updateDocument = await userTask[i].save()
                res.json(userTask[i]).status(201)
            }
        }
    }    
}

module.exports= {getUserTask, saveUserTask,updateUserTask,getUserTaskToday}