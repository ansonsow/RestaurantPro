let User = require("../models/users")

const getUsers = (req,res)=>{

    const id = req.params.id;

    if(typeof(id) == 'undefined'){
        User.find({}).exec()
        .then(results=>{
            res.status(200).json(results);
        })
        .catch(error=>{
            res.status(500).json(error);
        });
    } else {
        User.findOne({"user_id":id}).exec()
        .then(results=>{
            if (results == null) {
                res.status(404).json(results);
            } else {
                res.status(200).json(results);
            }
        })
        .catch(error=>{
                res.status(500).json(error);
        });
    }
}

const saveUsers = (req,res) =>{
    
    let newUser = new User(req.body);
    newUser.save().then(
        result=>{
            res.status(201)
               .json("Successfully posted entry in Database");
        }
    ).catch(error=>{
        res.status(500)
           .json(error);
    })
}

module.exports= { getUsers, saveUsers}