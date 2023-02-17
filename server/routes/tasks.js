const express = require('express');
const router = express.Router();

// import the controller, make sure it is exported
const taskCtrl = require("../controllers/taskController");

// router.post ("/tasks", taskCtrl.saveTask);

module.exports = router;
