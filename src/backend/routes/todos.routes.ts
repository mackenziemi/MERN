import express, { Request, Response } from 'express';
import { Todo } from '../models/todo.model';
import { getAllTodos, createNewTodo } from '../controllers/todos.controller';


const router = express.Router();

router.get('/api/todos', async (req: Request, res: Response)=> {
    const todos = await getAllTodos()
    return res.status(200).send(todos);
})

router.post('/api/todo', async (req: Request, res: Response)=> {
    const { title, description } = req.body;
    const todo = await createNewTodo(title, description);
    return res.status(201).send(todo);

    
})


export {router as todoRoutes}