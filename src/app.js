"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("Welcome home")
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// create an instance of the application
app.get("/", (req, res) => {
    return res.send("<h1>Hello</h1>"); // send response to client side
});
app.listen(5500, () => {
    console.log('Server is running at http://localhost:5500/');
});
