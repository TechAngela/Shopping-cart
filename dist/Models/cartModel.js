"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const cartSchema = new mongoose_1.default.Schema({
    name: String,
    Quantity: Number,
    amount: Number
});
const Cart = mongoose_1.default.model("Cart", cartSchema);
exports.Cart = Cart;
//# sourceMappingURL=cartModel.js.map