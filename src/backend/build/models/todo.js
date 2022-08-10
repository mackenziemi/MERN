"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const todoSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
todoSchema.statics.build = (attr) => {
    return new Todo(attr);
};
const Todo = mongoose_1.default.model('Todos', todoSchema);
exports.Todo = Todo;
Todo.build({
    title: 'some title',
    description: 'some description'
});

//# sourceMappingURL=todo.js.map