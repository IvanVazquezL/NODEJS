import { Request, Response } from "express";

let todos = [
    {id:1, text:'buy', completedAt: new Date()},
    {id:2, text:'sell', completedAt: new Date()}
];

export class TodosController {
    constructor() {

    }

    public getTodos(req: Request, res: Response): void {
        res.json(todos);
    }

    public getTodoById(req: Request, res: Response): void {
        const id = req.params.id;
        const todo = todos.find(todo => todo.id === Number(id));
        
        todo ?
            res.json(todo):
            res.status(404).json({error: `TODO with id ${ id } not found`});
    }

    public createTodo(req: Request, res: Response): void {
        const { text } = req.body;

        if (!text) {
            res.status(400).json({ error: 'Texr property is required'});
            return;
        }

        const newTodo = {
            id: todos.length + 1,
            text,
            completedAt: null!
        }

        todos.push(newTodo);

        res.json(newTodo);
    }

    public updateTodo(req: Request, res: Response): void {
        const id = Number(req.params.id);

        let todo = todos.find(todo => todo.id === id);
        if (!todo) {
            res.status(404).json({ error: `Todo with id ${id} was not found`});
            return;
        }

        const { text, completedAt } = req.body;

        if (!text) {
            res.status(400).json({ error: 'Texr property is required'});
            return;
        }

        todo.text = text || todo.text;
        todo.completedAt = completedAt === null ? 
            completedAt :
            new Date(completedAt || todo.completedAt);

        res.json(todo);
    }

    public deleteTodo(req: Request, res: Response): void {
        const id = Number(req.params.id);

        let todo = todos.find(todo => todo.id === id);
        if (!todo) {
            res.status(404).json({ error: `Todo with id ${id} was not found`});
            return;
        }

        todos = todos.filter(todo => todo.id !== id);

        res.json(todo);
    }
}