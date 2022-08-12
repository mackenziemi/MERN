import { Todo } from '../models/todo.model';

const getAllTodos = async () => {
    return await Todo.find({});
}

const getTodoById = async (id: string) => {
    return await Todo.findById(id);
}

const createNewTodo = async (title: string, description: string) => {
    const todo = Todo.build({title, description})
    await todo.save();
    return todo;
}

const updateTodoById = async(id: string, title: string, description: string) => {
    const update = {
        'title': title, 
        'description': description
    };

    await Todo.findByIdAndUpdate(id, update);
    return true;
}

const deleteTodoById = async(id: string) => {
    await Todo.findByIdAndDelete(id);
    return true;
}

export {
    getAllTodos, 
    getTodoById, 
    createNewTodo, 
    updateTodoById, 
    deleteTodoById
}