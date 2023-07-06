"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.deleteElement = exports.viewCart = exports.createCart = void 0;
const cartModel_1 = require("../Models/cartModel");
const productModel_1 = require("../Models/productModel");
const createCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const found = yield productModel_1.Product.findOne({ name: data.name });
        if (!found) {
            res.status(409).json({
                message: "this product is not available"
            });
        }
        else {
            const name = found.name;
            const amount = found.amount;
            const Quantity = found.Quantity;
            res.status(200).json({
                message: " product added successfully on cart", name, amount, Quantity
            });
            const selected = new cartModel_1.Cart({
                name: found.name,
                amount: amount,
                Quantity: Quantity
            });
            selected.save();
        }
    }
    catch (e) {
        console.log("the error occured while adding product to cart:", e);
    }
});
exports.createCart = createCart;
const viewCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const theCart = yield cartModel_1.Cart.find({});
        console.log("all products in cart");
        res.status(200).json({
            message: "This is all product", theCart
        });
    }
    catch (e) {
        console.log("THis is the error:", e);
        res.status(400).json({
            message: "error while viewing all carts", e
        });
    }
});
exports.viewCart = viewCart;
const deleteElement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const found = yield cartModel_1.Cart.findOne({ name: data.name });
        if (!found) {
            res.status(409).json({
                message: "this products is not available", found
            });
        }
        else {
            const id = found._id;
            yield cartModel_1.Cart.deleteOne({ _id: id });
            res.status(200).json({
                message: "the product is deleted", id
            });
        }
    }
    catch (e) {
        console.log("error occured while deleting:", e);
    }
});
exports.deleteElement = deleteElement;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const found = yield cartModel_1.Cart.findOne({ name: data.name });
        if (!found) {
            res.status(409).json({
                message: "This product is not available",
                found,
            });
        }
        else {
            const name = found.name;
            const amount = found.amount;
            const newQuantity = req.body.Quantity;
            const newTotalAmount = newQuantity * amount;
            //     Cart.amount = newTotalAmount;
            let updatedData = Object.assign(Object.assign({}, data), { name: name, Quantity: newQuantity, total_price: newTotalAmount });
            res.status(200).json({
                message: " data updated successfully on cart", updatedData
            });
            console.log("data updated", updatedData);
            updatedData.save();
        }
    }
    catch (error) {
        console.log("Error occurred while updating the cart", error);
    }
});
exports.updateProduct = updateProduct;
//# sourceMappingURL=cartController.js.map