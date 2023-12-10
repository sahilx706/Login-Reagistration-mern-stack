const expresss = require("express");



const app = expresss();
const PORT = 8009;


app.get("/", (req, res)=>{
    res.status(201).json("server created")
})


app.listen(PORT, ()=>{
    console.log(`Server start at port no ${PORT}`);
})