import { NextFunction } from "express";
import mongoose from "mongoose";

interface IUser {
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

interface userDoc extends mongoose.Document {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    accessTypes: Array<String>
}

interface userModel extends mongoose.Model<userDoc> {
    build(attr: IUser): userDoc
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    accessTypes: {
        type: Array<String>,
        required: true
    }
})

userSchema.statics.build = (attr: IUser)=> {
    return new User(attr)
}

const User = mongoose.model<userDoc, userModel>('Users', userSchema);

export { User }