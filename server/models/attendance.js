const mongoose = require('mongoose'); // 🐀
const Schema = mongoose.Schema;

// const customTimeZone = require('moment-timezone');
// const dateVancouver = customTimeZone.tz(Date.now(), "America/Vancouver");

let todaysDate = new Date(Date.now());
let isoTime = todaysDate.toISOString("en-CA", {timeZone: "America/Vancouver"});

const attendanceSchema = new Schema({
    attendance_id: {
        type: String
    },
    user_id: {
        type: String
    },
    clock_in: {
        type: Date,
        default: isoTime
    },
    clock_out: {
        type: Date,
        default: isoTime
    },
    clock_status:{
    type:Boolean,
    default:false
    }
});

const Attendance = mongoose.model("attendance", attendanceSchema);
module.exports = Attendance;