let User = require("../models/users");
const jwt = require("jsonwebtoken");
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
    
  res.header("Access-Control-Allow-Origin", "*");

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
  // const email = req.body.email;
  const user_id = req.body.user_id
  const password = req.body.password;
  // console.log()
  const user = await User.findOne({user_id:user_id});

  if(user){
    const rightPsw = await bcrypt.compare(password, user.password);

    if(rightPsw){


      const token = jwt.sign(
        { user_id: user.user_id,
          _id:user._id, 
          email:user.email,
          type: user.type
        },
          process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      const localUser = user;
      localUser.token = token

      const data = {
        "message":"successfully login",
        "data":localUser,
        "token":token
      };

      user.lastLogin = new Date(Date.now());
      await user.save();
      res.status(201).json(data)
      
    }else{
      const data = {"message":"wrong password"}
      res.status(401).json(data)
    }
  }else{
    const data = {"message":"user not found"};
    res.status(404).json(data)
  }



}

const updateUser = async (req, res) => {
  const id = req.params.id;
  // const updatedData = { $set: req.body };
  // const options = { new: true };
  // try {
  //   const account = await User.findByIdAndUpdate(id, updatedData, options);
  //   console.log("found account:" + account);
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.send(account);
  // } catch (error) {
  //   console.error(error.message);
  //   res.status(400).send("Server Error");
  // }


  const updatedData = req.body
  // console.log(updatedData);
  // res.send("haha")
  let user = await User.findOne({"user_id":id});
  for (const key in user) {
    if (key in user && key in updatedData) {
      console.log(key);
      user[key] = updatedData[key]
      
    }
  }
  // user = updatedData;
  // console.log(user.name);
  await user.save()
  .then(result=>{
    console.log(result);
    res.status(201).json(result)
  }).catch(error=>{
    res.status(500).json(error)
  })
};

module.exports = { getUsers, saveUsers, updateUser, loginUser};
