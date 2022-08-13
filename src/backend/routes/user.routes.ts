import express, { Request, Response} from 'express';
import { User } from '../models/user.model';
import { createNewUser, authenticateUser } from '../controllers/user.controller';


const router = express.Router();

router.post('/api/accounts/register', async (req: Request, res: Response)=>{
    const { email, password, firstName, lastName} = req.body;
    const user = await createNewUser(email, password, firstName, lastName);
    return res.status(201).send(user);
})

router.get('/api/accounts/authenticate', async (req: Request, res: Response)=>{
    const { email, password} = req.body;
    var result = await authenticateUser(email, password);
    if(result){
        res.status(200).send(true);
    } 
    else {
        res.status(401).send("");
    }
})

export {router as userRoutes }

