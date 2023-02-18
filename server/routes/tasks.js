const express = require('express');
const router = express.Router();

// import the controller, make sure it is exported
const taskCtrl = require("../controllers/taskController");

router.get("/tasks", taskCtrl.getTask);

// router.get("/tasks",)

router.post ("/tasks", taskCtrl.saveTask);
// router.get("/",taskCtrl.test);

module.exports = router;
