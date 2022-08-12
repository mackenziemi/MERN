import express, { Request, Response } from 'express';
import { Todo } from '../models/todo.model';
import { 
    getAllTodos, 
    getTodoById, 
    createNewTodo,
    updateTodoById,
    deleteTodoById
} from '../controllers/todo.controller';


const router = express.Router();

router.get('/api/todos', async (req: Request, res: Response)=> {
    const todos = await getAllTodos()
    return res.status(200).send(todos);
})

router.get('/api/todos/:id', async (req: Request, res: Response)=> {
    const id = req.params.id;
    const todo = await getTodoById(id);
    return res.status(200).send(todo);
})

router.post('/api/todos', async (req: Request, res: Response)=> {
    const { title, description } = req.body;
    const todo = await createNewTodo(title, description);
    return res.status(201).send(todo);    
})

router.put('/api/todos/:id', async (req: Request, res: Response)=>{
    const id = req.params.id;
    const { title, description} = req.body;
    const result = await updateTodoById(id, title, description);
    return res.status(200).send(result);
})

router.delete('/api/todos/:id', async (req: Request, res: Response)=>{
    const id = req.params.id;
    const result = await deleteTodoById(id);
    return res.status(200).send(result);
})


export {router as todoRoutes}