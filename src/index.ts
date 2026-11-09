import express from "express";
import env from "./config/env.js";
import connectDB from "./config/db.js";

const app = express();
const port = env.PORT;

const startServer = async() => {
    await connectDB();
    app.listen(port, ()=>{
        console.log(`Server running on port ${port}`)
    })
}

startServer();