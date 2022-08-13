import { User } from '../models/user.model';
import bcrypt from 'bcryptjs'

export const createNewUser = async (
    email: string, 
    password: string,
    firstName: string,
    lastName: string
    ) => {

        const passwordHash = bcrypt.hashSync(password, 10);
        console.log(`Your password hash is ${passwordHash}`);
        password = passwordHash;
        const user = User.build({email, password, firstName, lastName});

        await user.save();
        console.log(`Created new user, id: ${user.id}`);
        return user;
}

export const authenticateUser = async (email: string, password: string): Promise<boolean> => {
    var user = await User.findOne({email: email});
    
    if(!user){
        return false;
    }

    return bcrypt.compareSync(password, user?.password ?? "");
}


