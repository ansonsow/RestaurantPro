const express = require('express');
const router = express.Router({mergeParams:true});

const taskRouter = require('./tasks');
const attendanceRouter = require('./attendance');

// using nested routers allows better organization
router.use(taskRouter);
router.use(attendanceRouter);


module.exports = router;