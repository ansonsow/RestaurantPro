const express = require("express");
const router = express.Router();

// import the controller, make sure it is exported
const taskCtrl = require("../controllers/taskController");

router.get("/tasks", taskCtrl.getTask);

router.post("/tasks", taskCtrl.saveTask);


router.get("/tasks/:tid", taskCtrl.getTask);
router.put("/task/", taskCtrl.getTasks);

router.put("/tasks/:tid", taskCtrl.updateTask);
router.put("/task/:tid", taskCtrl.updateTaskStatus);
router.put("/tasks/updateAssigned/:tid", taskCtrl.updateAssignedTask);

module.exports = router;
