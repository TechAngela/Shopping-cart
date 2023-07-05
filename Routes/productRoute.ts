import express from "express";
import {getProduct,createProduct } from "../Controllers/productController"
const router = express.Router();
router.get("/getProduct",getProduct);
router.post("/addProduct",createProduct)

 export {router};
