let Task = require("../models/tasks");
let UserTask = require("../models/users_tasks")


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

/* get one task by id*/
const getTask = async (req, res) => {
  const tid = req.params.tid;
  res.header("Access-Control-Allow-Origin", "*");
  if (typeof tid == "undefined") {
    const tasks = Task.find()
      .then((result) => {
        // console.log("result: " + result);
        res.status(201).json(result);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } else {
    const tasks = Task.find({ task_id: tid })
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
};

/* get multiple tasks by ids*/
const getTasks = (res, req) => {
  let ids = req.query
  // console.log("ids in controller : " + ids);

  const tasks = Task.find({ task_id: { $in: ids } })
    .then((result) => {
      console.log(res)
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      // res.status(400).json(err);
    });
};

const saveTask = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let newTask = new Task(req.body);
  newTask
    .save()
    .then((result) => {
      res.status(201).json(newTask);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
  // res.send("woo")
};

const updateTask = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const tid = req.params.tid;
  const task = await Task.findOne({ task_id: tid });
  // console.log("found task:" + task);
  task.task_name = req.body.task_name;

  for (const key in req.body) {
    task[key] = req.body[key];
  }
  const updatedDocument = await task.save();
  res.send(task);
};

const updateTaskStatus = async (req, res) => {
  const id = req.params.tid;
  const updatedData = { $set: req.body };
  const options = { new: true };
  try {
    const task = await Task.findByIdAndUpdate(id, updatedData, options);
    // console.log("found task:" + task);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(task);
  } catch (error) {
    console.error(error.message);
    res.send(400).send("Server Error");
  }
};

const updateAssignedTask = async (req,res) => {
  // console.log("updateAssignedTask");
  // const id = req.params.tid;
  // const userTasks = await UserTask.findOne({task_id: id});
  // const task = await Task.findOne({ _id: id });
  // if(!userTasks){
  //   if(typeof(task.task_assigned)!==undefined){
  //       task.task_assigned = false;
  //   }
  // }else{
  //   task.task_assigned = true;
  // }
  // const updateDocument = await task.save();
  res.json({"message":"updated"}).status(201)
}

module.exports = { getTask, saveTask, updateTask, updateTaskStatus, getTasks, updateAssignedTask };
