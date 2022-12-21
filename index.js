import express from "express";
import cors from "cors";
import { connect } from "./app/config/db.config.js";
const server = express();
const port = 9000;


let corsOption = {
    origin:`http://localhost:${port}`
}
server.use(cors(corsOption))
server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.use("/",(req,res)=>{
    res.send("Welcome to smart server door lock");
    console.log("Welcome to smart server door lock")
})

connect().then(()=>console.log("Mongo db is running Successfully"))

server.listen(port, console.log(`Server is running at http://localhost:${port}/`));