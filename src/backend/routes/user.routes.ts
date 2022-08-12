import express, { Request, Response} from 'express';
import { User } from '../models/user.model';
import { createNewUser } from '../controllers/user.controller';


const router = express.Router();

router.post('/api/accounts/register', async (req: Request, res: Response)=>{
    const { email, password, firstName, lastName} = req.body;
    const user = await createNewUser(email, password, firstName, lastName);
    return res.status(201).send(user);
})

export {router as userRoutes }

