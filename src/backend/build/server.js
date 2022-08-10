"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = require("body-parser");
const todos_1 = require("./controllers/todos");
const PORT = 5500;
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use(todos_1.todoController);
mongoose_1.default.connect('mongodb+srv://admin:foFoJTRYbUUCwbbQ@cluster0.bmhz0te.mongodb.net/mern', {}, () => {
    console.log("connected to database");
});
app.listen(PORT, () => {
    console.log("Server is listening on port:" + PORT);
});
//# sourceMappingURL=server.js.map