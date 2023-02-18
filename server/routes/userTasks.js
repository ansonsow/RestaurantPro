const express = require('express');
const router = express.Router();

// import the controller, make sure it is exported
const userTaskCtrl = require("../controllers/userTaskController");

router.get("/usersTasks", userTaskCtrl.getUserTask);
router.get("/usersTasks/:uid/:tid", userTaskCtrl.getUserTask);
router.post("/usersTasks", userTaskCtrl.saveUserTask);


module.exports = router;
