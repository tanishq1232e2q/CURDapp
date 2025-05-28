import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./Routes/userroute.js"
import connection from "./db/database.js";
const port=process.env.PORT || 8000;
const app=express();
app.use(bodyParser.json())
app.use(cors())
dotenv.config();
connection()
app.use(bodyParser.json());


app.use("/api",route)



app.listen(port,()=>{
    console.log("working");
})