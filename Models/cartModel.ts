import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
     name:String,
     Quantity:Number,
     amount: Number

});
const Cart = mongoose.model("Cart", cartSchema);
export {Cart};