import { Todo } from '../models/todo.model';

const getAllTodos = async () => {
    return await Todo.find({});
}

const createNewTodo = async (title: string, description: string) => {
    const todo = Todo.build({title, description})
    await todo.save();
    return todo;
}

export {getAllTodos, createNewTodo}