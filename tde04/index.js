const express =  require("express")

const server = express();


server.get("/health",(req,res)=>{
    res.send(`server is running `);
})

const products = [
    {
        id : 1,
    name: "ps4",
    price: 2500 
    },
    {
        id :2,
        name: "Nintendo switch",
        price :3000
    },
   
]
server.get("/products",(req, res)=>{
    res.json({
        products
    })
})
server.get("/products/:id",(req,res)=>{
    const id = Number(req.params.id);
    products.find((products)=>{
        return products.id === 1;
    });
    res.json({
        products
    })
})
const port = 3000;
server.listen(port,() =>{
    console.log(`server is running `);
});
