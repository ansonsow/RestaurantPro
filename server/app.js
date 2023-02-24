const express = require("express");
const app = express();
require('./models/db')
const bodyParser = require("body-parser");
const router = require('./routes');
// ADD THIS
var cors = require('cors');
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


app.listen(PORT, ()=>{
    console.log("app started on port "+ PORT);
})
