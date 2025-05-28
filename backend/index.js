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

const path = require('path');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../my-app/build')));

// The "catchall" handler: for any request that doesn't match an API route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../my-app/build', 'index.html'));
});




app.listen(port,()=>{
    console.log("working");
})
