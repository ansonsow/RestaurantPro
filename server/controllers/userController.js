let User = require("../models/users")
const bcrypt = require('bcrypt');

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
               .json("Successfully posted entry in Database");
        }
    ).catch(error=>{
        res.status(500)
           .json(error);
    })
}


// need a login
const logInUser = async(req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({email: email});
    if(!user){
        res.status(401)
           .json({message : "email not found"});
    }else{
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            res.status(401)
               .json({"message":"password not currect"});
        }else{
            res.status(200)
               .json({ message: 'Login successful' });
        }
    }
}


module.exports= { getUsers, saveUsers, logInUser}