import express from 'express';
import { json } from 'body-parser';


const PORT = 5500

const app = express();
app.use(json());

app.listen(PORT, ()=>{
    console.log("Server is listening on port:" + PORT);
})

