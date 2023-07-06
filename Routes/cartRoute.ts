import express from "express";
import {createCart,viewCart, deleteElement,updateProduct } from "../Controllers/cartController"
const router =  express.Router();
router.post("/addcart",createCart);
router.get("/getCart",viewCart);
router.delete("/deleteElement",deleteElement);
router.put('/editQuantity', updateProduct)
export {router};