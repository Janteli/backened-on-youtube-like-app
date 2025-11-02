import mongoose from "mongoose";
import {DB_NAME} from "./src/constants.js";
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./src/db/DB.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({limit: "16kb"})); //json data like from form submission and apis 
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

connectDB()
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((error)=>{
    console.error("Error connecting to the database", error);
    process.exit(1);
});



// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         console.log("Connected to the database successfully");
//         app.on("error", (error) => {
//             console.error("Error occurred in the server", error);
//             throw error;
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error("Error connecting to the database", error);
//     }
// })()