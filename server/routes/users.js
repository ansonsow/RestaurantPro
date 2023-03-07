const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");


// import the controller, make sure it is exported
const userCtrl = require("../controllers/userController");

router.get("/users", userCtrl.getUsers);


// need manager login before creating new user
router.post("/users", auth.verifyManagerToken, userCtrl.saveUsers);

router.post("/user/login", userCtrl.loginUser);

router.get("/users/:id", userCtrl.getUsers);

// need user login to change user info
// router.put("/users/:id", auth.verifyToken, userCtrl.updateUser);
router.put("/users/:id", userCtrl.updateUser);


module.exports = router;
