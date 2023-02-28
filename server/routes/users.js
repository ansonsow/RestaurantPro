const express = require("express");
const router = express.Router();

// import the controller, make sure it is exported
const userCtrl = require("../controllers/userController");

router.get("/users", userCtrl.getUsers);

// router.get("/tasks",)

router.post("/users", userCtrl.saveUsers);
// router.get("/",taskCtrl.test);

router.post("/user/login", userCtrl.loginUser);
//
router.get("/users/:id", userCtrl.getUsers);

router.put("/users/:id", userCtrl.updateUser);

module.exports = router;
