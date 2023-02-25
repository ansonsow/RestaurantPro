const express = require('express');
const router = express.Router();

// import the controller, make sure it is exported
const taskCtrl = require("../controllers/taskController");

router.get("/tasks", taskCtrl.getTask);

router.get("/tasks/:tid",taskCtrl.getTask);

router.put("/tasks/:tid", taskCtrl.updateTask);

module.exports = router;
