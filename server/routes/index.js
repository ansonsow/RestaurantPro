const express = require('express');
const router = express.Router({mergeParams:true});

const taskRouter = require('./tasks');

// using nested routers allows better organization
router.use(taskRouter);

module.exports = router;