// console.log("Welcome home")
import express , {Express ,Request , Response}  from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app = express();
const MongoDB = "mongodb+srv://mysaving2023:Ourfuture2023@cluster0.vvdet8p.mongodb.net/?retryWrites=true&w=majority";
async function connection(connectionString:string) {
 await mongoose.connect(connectionString);
 console.log("connected successfully")   
}
try {
      connection (MongoDB);
     
} catch (error) {
     console.log("unable to connect to database:", error)
     
}
app.use (express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser()) ;
app.use(cors())
// create an instance of the application
app.get("/",(req: Request,res:Response)=>{
    return res.send("<h1>Hello</h1>"); // send response to client side
});

app.listen(5500 , () =>{
     console.log('Server is running at http://localhost:5500/');
});   
