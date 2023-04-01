const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");


const attendanceCtrl = require("../controllers/attendanceController");

// get all attendance info
router.get("/attendance", attendanceCtrl.getAttendance);

// return info based on user_id
router.get("/attendance/user/:user_id", attendanceCtrl.getAttendee);

// return info based on clock_in
router.get("/attendance/time/clock_in", attendanceCtrl.getClockIn);

// return info based on clock_out
router.get("/attendance/time/clock_out", attendanceCtrl.getClockOut);

// log new attendance
// need user login to make an attendance
// router.post("/attendance", auth.verifyToken, attendanceCtrl.saveAttendance);
router.post("/attendance", attendanceCtrl.saveAttendance);


router.get("/lastattendance/:uid", attendanceCtrl.getLastAttendance)

router.put("/attendance/:uid", attendanceCtrl.updateClockOut)
router.put("/attendance/updateclockin/:uid", attendanceCtrl.updateClockIn)

router.get("/attendance/:clock_status", attendanceCtrl.getUserByClockStatus);
router.put("/attendance/updateStatus/:uid", attendanceCtrl.updateStatus);

module.exports = router;
