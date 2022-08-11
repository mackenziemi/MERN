import mongoose from "mongoose";

interface ITodo {
    title: string,
    description: string
}

interface todoDoc extends mongoose.Document {
    title: string,
    description: string
}

interface todoModel extends mongoose.Model<todoDoc> {
    build(attr: ITodo): todoDoc
}

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

todoSchema.statics.build = (attr: ITodo)=> {
    return new Todo(attr)
}

const Todo = mongoose.model<todoDoc, todoModel>('Todos', todoSchema);

Todo.build({
    title: 'some title',
    description: 'some description'
})

export { Todo }