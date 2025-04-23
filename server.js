const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())

let data = {
    name: "Adel",
}

app.get("/", (req, res)=>{
    res.send("<h1>home page</h1>")
});

app.get("/dashboard", (req, res) =>{
    res.status(200).send("<h1>dashbord</h1>")
});

app.get("/api/data", (req, res) =>{
    res.status(200).send(JSON.stringify(data));

})

app.post("/api/data", (req, res) =>{
       
    const userData = req.body
    const user = {
        name: userData.name
    }

    res.status(201).send(JSON.stringify({
        message: "success",
        data: user
    }));
})





app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
    
})