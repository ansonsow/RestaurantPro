

let Attendance = require("../models/attendance");

/*---- RETURN ALL ATTENDANCE INFO ----*/
const getAttendance = (req,res)=>{
    let attendanceDetails = Attendance.find().then(result=>{
        res.header("Access-Control-Allow-Origin", "*");
        res.status(201).json(result);
    });
}

/*---- RETURN INFO BASED ON AN EMLOYEE'S ID ----*/
const getAttendee = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const id = req.params.user_id;
    // console.log(id)
    if (typeof (id) == 'undefined') {
        Attendance.find({}).exec().then(results => {
            res.status(200).json(results);
        }).catch(error => {
            res.status(500).json(error);
        });
    } else {
        Attendance.find({ "user_id": id }).exec().then(results => {
            if (results == null) {
                res.status(404).json(results);
            } else {
                
                res.status(200).json(results);
            }
        }).catch(error => {
            res.status(500).json(error);
        });
    }
};

/*---- RETURN INFO BASED ON CLOCK_IN TIME ----*/
let clockInList = [];
let yvrInTime = [];
const getClockIn = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    Attendance.find({},{"clock_in":1}).exec().then(results => {
        if (results == null) {
            res.status(404).json(results);
        } else {
            res.status(200).json(results);

            results.forEach(obj => {
                clockInList.push(obj.clock_in);
            })

            clockInList.forEach(timeEach => {
                let zulu = new Date(timeEach);
                let vancTime = zulu.toLocaleString("fr-CA", {timeZone: "America/Vancouver"});
                yvrInTime.push(vancTime);
            })

            clockInList.splice(0, clockInList.length, ...yvrInTime);
            yvrInTime = [];

            // console.log(clockInList);
        }
    }).catch(error => {
        res.status(500).json(error);
    });
};

/*---- RETURN INFO BASED ON CLOCK_OUT TIME ----*/
let clockOutList = [];
let yvrOutTime = [];
const getClockOut = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    Attendance.find({},{"clock_out":1}).exec().then(results => {
        if (results == null) {
            res.status(404).json(results);
        } else {
            res.status(200).json(results);

            results.forEach(obj => {
                clockOutList.push(obj.clock_out);
            })

            clockOutList.forEach(timeEach => {
                let zulu = new Date(timeEach);
                let vancTime = zulu.toLocaleString("fr-CA", {timeZone: "America/Vancouver"});
                yvrOutTime.push(vancTime);                
            })

            clockOutList.splice(0, clockOutList.length, ...yvrOutTime);
            yvrOutTime = [];

            // console.log(clockOutList);
        }
    }).catch(error => {
        res.status(500).json(error);
    });
};

/*---- POST NEW ATTENDANCE ----*/
const saveAttendance = async (req,res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    // console.log(req.body.user_id);
    const uid = req.body.user_id;
    const attendance = await Attendance.find({user_id:uid}).limit(1).sort({$natural:-1}) 
    // console.log(attendance[0].clock_in);
    // let vancTime = zulu.toLocaleString("fr-CA", {timeZone: "America/Vancouver"});
    const localTime = attendance[0].clock_in
    
    const today = new Date()
    today.setHours(today.getHours() - 7);
    localTime.setHours(localTime.getHours() - 7);
    // console.log(localTime);
    
    if(  localTime.getDate() === today.getDate() &&
         localTime.getMonth() === today.getMonth() &&
         localTime.getFullYear() === today.getFullYear()
    ) {
        // console.log("yes today")
        res.status(200).json(attendance)
        
    }else{
        let addAttendance = new Attendance(req.body);
        addAttendance.save().then(result=>{
            res.status(201).json(addAttendance);
        }).catch(error=>{
            res.status(500).json(error);
        })       
    }
    
    


    // res.send("wawa").status(201)
}


const getLastAttendance = async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");    
    const uid = req.params.uid


    const attendance = await Attendance.find({user_id:uid}).limit(1).sort({$natural:-1}) 
    // console.log(attendance)
    // res.json(uid)
    if(attendance){
        res.status(200).json(attendance)
    }else{
        res.status(404).json({"Message":"last attendance not found"})
    }
}



const updateClockIn = async(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");    
    const uid = req.params.uid

    const attendance = await Attendance.find({user_id:uid}).limit(1).sort({$natural:-1}) 
    const today = new Date();
    
    const localTime = attendance[0].clock_in;
    today.setHours(today.getHours() - 7);
    localTime.setHours(localTime.getHours() - 7);
    // console.log(localTime);
    
    if(  localTime.getDate() === today.getDate() &&
         localTime.getMonth() === today.getMonth() &&
         localTime.getFullYear() === today.getFullYear()
    ) {
        attendance[0].clock_in = new Date();
        attendance[0].save().then(result=>{
         
         res.status(201).json(result)
        }).catch(error=>{
         res.status(500).json({"Message":"error"})
        })
    }else{
        res.status(200).json({"message":"not today"})
    }
    

    // res.send("wat").status(201)
}






const updateClockOut = async(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");    
    const uid = req.params.uid

    const attendance = await Attendance.find({user_id:uid}).limit(1).sort({$natural:-1}) 
    // console.log(attendance.clock_out);
    attendance[0].clock_out = new Date(Date.now());
    attendance[0].save().then(result=>{
        res.status(201).json(result)
    }).catch(error=>{
        res.status(500).json({"Message":"error"})
    })
    // res.send("wat").status(201)
}

const getUserByClockStatus = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

//   console.log(req.params);
//   console.log(req.params.clock_status)
  let employeeStatus = (req.params.clock_status=='true');
//   console.log(employeeStatus)
  const employees = await Attendance.find({ clock_status: employeeStatus })
  
    .exec()
    .then((employees) => {
      res.status(200).json(employees);
    })
    .catch((error) => {
      res.status(404).json({ Message: error });
    });
};

const updateStatus = async (req, res) => {
  res.header("Access-Control-Allow-Origin","*");
  const uid = req.params.uid;
//   const attendance = await Attendance.findOne({user_id: uid});
  const attendance = await Attendance.find({user_id:uid}).limit(1).sort({$natural:-1}) 
  attendance[0].clock_status = !attendance[0].clock_status;
//   console.log(attendance)
//   console.log(attendance.status)
//   console.log(!attendance.status)
  attendance[0]
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).json({ Message: error });
    });
    // res.status(200).json("wat")
}

module.exports = { getAttendance, getAttendee, getClockIn, getClockOut, saveAttendance, getLastAttendance, updateClockOut, getUserByClockStatus, updateStatus, updateClockIn }