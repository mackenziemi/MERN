"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoController = void 0;
const express_1 = __importDefault(require("express"));
const todo_1 = require("../models/todo");
const router = express_1.default.Router();
exports.todoController = router;
router.get('/api/todos', async (req, res) => {
    const todo = await todo_1.Todo.find({});
    return res.status(200).send(todo);
});
router.post('/api/todo', async (req, res) => {
    const { title, description } = req.body;
    const todo = todo_1.Todo.build({ title, description });
    await todo.save();
    return res.status(201).send(todo);
});
//# sourceMappingURL=todos.js.map