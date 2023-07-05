// console.log("Welcome home")
import express , {Express ,Request , Response}  from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { router as productRoute } from "../Routes/productRoute";
import home from "../Routes/homeRoute";
import {router as cartRoute} from "../Routes/cartRoute"
dotenv.config();
const app = express();
const port = 5500;
const MongoDB = "mongodb+srv://Angel:Angela@angeldb.ofbwpgd.mongodb.net/?retryWrites=true&w=majority";
// const MongoDB = `mongodb://localhost`;
async function connection(connectionString:string) {
 await mongoose.connect(connectionString);
 console.log("database connected successfully")   
}
try {
      connection (MongoDB);
     
} catch (error) {
     console.log("unable to connect to database:", error)
     
}
app.use (express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser()) ;
app.use(cors());
app.use("/api/v1/", productRoute)
app.use("/",home)
app.use("/api/v1/",cartRoute)
// create an instance of the application


app.listen(port , () =>{
     console.log(`Server is running at ${port}`);
});   
