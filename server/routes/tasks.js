const express = require("express");
const router = express.Router();

// import the controller, make sure it is exported
const taskCtrl = require("../controllers/taskController");

router.get("/tasks", taskCtrl.getTask);

router.get("/tasks/:tid", taskCtrl.getTask);
router.put("/task/", taskCtrl.getTasks);

// router.post ("/tasks", taskCtrl.saveTask);
// router.get("/",taskCtrl.test);

router.put("/tasks/:tid", taskCtrl.updateTask);
router.put("/task/:tid", taskCtrl.updateTaskStatus);

module.exports = router;
