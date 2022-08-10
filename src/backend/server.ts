import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';

import { todoController } from './controllers/todos';

const PORT = 5500

const app = express();
app.use(json());
app.use(todoController);

mongoose.connect('mongodb+srv://admin:foFoJTRYbUUCwbbQ@cluster0.bmhz0te.mongodb.net/mern', {}, ()=>{
    console.log("connected to database")
});


app.listen(PORT, ()=>{
    console.log("Server is listening on port:" + PORT);
});

