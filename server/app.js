const express = require("express");
const app = express();
const PORT = 8000;
app.set('port', process.env.PORT || PORT); 


app.get('/', (req, res) => {
    res.send("hiiiiii")
});

app.get('/api', (req, res) => {
    res.json({ message: "blublublublu" });
});

app.listen(PORT, ()=>{
    console.log("app started on port "+ PORT);
})