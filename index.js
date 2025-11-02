import mongoose from "mongoose";
import {DB_NAME} from "./src/constants.js";
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./src/db/DB.js";
const app = express();

connectDB();



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