import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
     name:String,
     amount: Number,
     image: String

});
const Product = mongoose.model("Product", productSchema);
export {Product};