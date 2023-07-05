import express from "express";
import {createCart,viewCart, deleteElement } from "../Controllers/cartController"
const router =  express.Router();
router.post("/addcart",createCart);
router.get("/getCart",viewCart);
router.delete("/deleteElement",deleteElement)
export {router};