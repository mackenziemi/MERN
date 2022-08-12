import { User } from '../models/user.model';

export const createNewUser = async (
    email: string, 
    password: string,
    firstName: string,
    lastName: string
    ) => {

        const user = User.build({email, password, firstName, lastName});
        await user.save();
        console.log(`Created new user, id: ${user.id}`);
        return user;
}


