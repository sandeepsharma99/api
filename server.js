import express from "express"
const PORT = 3000;
import fs from "fs"

const server = express();

server.get("/product",(req,res)=>{
    fs.readFile("product.json","utf-8",(err,data)=>{
        if(err){
            res.status(500).send("error reading file")
        }else{
            res.type("product.json").send(data)
        }
    })
})

server.listen(PORT, ()=>{
    console.log("server is running")
})