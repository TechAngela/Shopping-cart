"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const cartController_1 = require("../Controllers/cartController");
const router = express_1.default.Router();
exports.router = router;
router.post("/addcart", cartController_1.createCart);
router.get("/getCart", cartController_1.viewCart);
router.delete("/deleteElement", cartController_1.deleteElement);
router.put('/editQuantity', cartController_1.updateProduct);
//# sourceMappingURL=cartRoute.js.map