const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

app.get("/", (req, res)=>{
    res.send("hello world")
});

app.get("/dashboard", (req, res) =>{
    res.status(200).send("hi")
})





app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
    
})