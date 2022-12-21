import express from "express";
const server = express();
const port = 9000;
server.use("/",(req,res)=>{
    res.send("Welcome to smart server door lock");
    console.log("Welcome to smart server door lock")
})

server.listen(port, console.log(`Server is running at http://localhost:${port}/`));