const express = require("express");

const server = express();
server.use(express.json());

let products = [{
    id:1,
    name:"TÊNIS SUPERSTAR",
    description:"Cloud White / Core Black / Cloud White",
    isDone:false,
},
{
    id:2,
    name:"TÊNIS STAN SMITH",
    description:"Cloud White / Cloud White / Green",
    isDone:false,
}
]

server.get("/products",(req,res)=>{
    res.json({
        products
    })
})

server.post("/products",(req,res)=>{
    console.log(req.body)
    res.json({
        teste: "ok"
    })
})






const port = 8080;
server.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})