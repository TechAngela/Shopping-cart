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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("Welcome home")
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const productRoute_1 = require("../Routes/productRoute");
const homeRoute_1 = __importDefault(require("../Routes/homeRoute"));
const cartRoute_1 = require("../Routes/cartRoute");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 5500;
const MongoDB = "mongodb+srv://Angel:Angela@angeldb.ofbwpgd.mongodb.net/?retryWrites=true&w=majority";
// const MongoDB = `mongodb://localhost`;
function connection(connectionString) {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect(connectionString);
        console.log("database connected successfully");
    });
}
try {
    connection(MongoDB);
}
catch (error) {
    console.log("unable to connect to database:", error);
}
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use("/api/v1/", productRoute_1.router);
app.use("/", homeRoute_1.default);
app.use("/api/v1/", cartRoute_1.router);
// create an instance of the application
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
//# sourceMappingURL=app.js.map