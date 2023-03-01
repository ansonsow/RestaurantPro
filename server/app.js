const express = require("express");
require("dotenv").config();
const app = express();
require('./models/db')
const bodyParser = require("body-parser");
const router = require('./routes');
// ADD THIS
var cors = require('cors');
const auth = require("./middleware/auth");
app.use(cors());

const PORT = 8000;
app.set('port', process.env.PORT || PORT); 

app.use(express.static('public'));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", router); 

app.get('/', (req, res) => {
    res.send("haaaaaa")
});

app.get("/testAuth", auth.verifyToken, (req,res)=>{
    res.status(200).send("watup")
})

app.get("/testMng", auth.verifyManagerToken, (req,res)=>{
    res.status(200).send("watupMng")
})

app.listen(PORT, ()=>{
    console.log("app started on port "+ PORT);
})
