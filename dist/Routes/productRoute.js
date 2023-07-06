"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const productController_1 = require("../Controllers/productController");
const router = express_1.default.Router();
exports.router = router;
router.get("/getProduct", productController_1.getProduct);
router.post("/addProduct", productController_1.createProduct);
//# sourceMappingURL=productRoute.js.map