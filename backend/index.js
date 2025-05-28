import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

// Emulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import route from "./Routes/userroute.js"
import connection from "./db/database.js";
// const port=process.env.PORT || 8000;
const app=express();
app.use(bodyParser.json())
app.use(cors())
dotenv.config();
connection()
app.use(bodyParser.json());


app.use("/api",route)




// Your API routes (e.g. /api/users etc.)
// app.use('/api', require('./routes/api'));

// Serve React build static files
app.use(express.static(path.join(__dirname, '../my-app/build')));

// Catch-all route to serve React index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../my-app/build', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.listen(port,()=>{
    console.log("working");
})
