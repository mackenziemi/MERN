import { User } from '../models/user.model';
import bcrypt from 'bcryptjs'

export const createNewUser = async (
    email: string, 
    password: string,
    firstName: string,
    lastName: string
    ) => {

        const passwordHash = bcrypt.hashSync(password, 10);
        password = passwordHash;
        const user = User.build({email, password, firstName, lastName});
        user.accessTypes = ['basic'];

        await user.save();
        return user;
}

export const authenticateUser = async (email: string, password: string): Promise<boolean> => {
    var user = await User.findOne({email: email});
    
    if(!user){
        return false;
    }

    return bcrypt.compareSync(password, user?.password ?? "");
}


