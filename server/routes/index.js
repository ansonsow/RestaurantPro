const express = require('express');
const router = express.Router({mergeParams:true});

const taskRouter = require('./tasks');
const usersRouter = require('./users');
const userTaskController = require('./userTasks')

// using nested routers allows better organization
router.use(taskRouter);
router.use(usersRouter);
router.use(userTaskController);

module.exports = router;