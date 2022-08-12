import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import dotenv from 'dotenv';

import { todoRoutes} from './routes/todo.routes';
import { userRoutes} from './routes/user.routes';

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(json());
app.use(todoRoutes);
app.use(userRoutes);

mongoose.connect(process.env.DATABASE ?? "", {}, ()=>{
    console.log("connected to database")
});


app.listen(PORT, ()=>{
    console.log("Server is listening on port:" + PORT);
});

