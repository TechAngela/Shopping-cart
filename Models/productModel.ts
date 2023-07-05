import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
     name:String,
     Quantity:Number,
     amount: Number

});
const Product = mongoose.model("Product", productSchema);
export {Product};