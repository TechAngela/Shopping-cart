import express from "express";
import home from "../Controllers/home"
const router =  express.Router();
// Home Page Route
router.get("" ,home);
export default router;