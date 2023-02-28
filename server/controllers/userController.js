let User = require("../models/users")
const bcrypt = require('bcrypt');

const getUsers = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
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



const saveUsers = async (req,res) =>{
    
    let newUser = new User(req.body);
    
    const existing = await User.findOne({email:newUser.email});
    if(existing){
        res.status(409)
           .json({message: "Email has been taken"});
    }

    const hashPassword = await bcrypt.hash(newUser.password,10)
    newUser.password = hashPassword;
    
    newUser.save().then(
      result=>{
        res.status(201)
           .json("Successfullu registered");
      }
    ).catch(
      error=>{
        res.status(500)
           .json(error)
      }
    )
};


const loginUser = async (req,res)=>{
  const email = req.body.email;
  const password = req.body.password

  const user = await User.findOne({email:email})

  res.json(user)

}

const updateUser = async (req, res) => {
  const id = req.params.id;
  const updatedData = { $set: req.body };
  const options = { new: true };
  try {
    const account = await User.findByIdAndUpdate(id, updatedData, options);
    console.log("found account:" + account);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(account);
  } catch (error) {
    console.error(error.message);
    res.send(400).send("Server Error");
  }
};

module.exports = { getUsers, saveUsers, updateUser, loginUser};
