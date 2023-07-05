import express from "express";
const router = express.Router();
import { Product } from "../Models/productModel";
router.get("/getProduct", async (req,res)=>{
     try {
          const data = await Product.find({});
          console.log("product retreived successfuly");
          res.status(200).json(data)
     } catch (error) {
        console.log ("error occured while retreiving products", error)  
     }
});
router.post("/addProduct", async(req , res)=>{
     try {
         const data = await Product.create(req.body);
         console.log ("Product added to database successfully");
         res.status(200).json(data)
     } catch (error) {
          console.log ("error occured while adding product", error)   
     }
});
export {router};