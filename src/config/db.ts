import mongoose from "mongoose"
import env from "./env.js";

const connectDB = async () => {
    try {
        await mongoose.connect(env.MONGO_URI_TEST || "mongodb://localhost:27017/sentenceLab");
        console.log("MongoDB connected")
    }catch(error){
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }

}

export default connectDB;