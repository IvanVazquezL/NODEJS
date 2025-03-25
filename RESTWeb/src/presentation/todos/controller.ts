import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/entities/dtos";

export class TodosController {
    constructor() {

    }

    public async getTodos(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
        const todos = await prisma.todo.findMany();
        return res.json(todos);
    }

    public async getTodoById(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        const todo = await prisma.todo.findFirst({
            where: { id }
        });
        
        todo ?
            res.json(todo):
            res.status(404).json({error: `TODO with id ${ id } not found`});
    }

    public async createTodo(req: Request, res: Response): Promise<void> {
        const [ error, createTodoDto ] = CreateTodoDto.create(req.body);

        if (error) {
            res.status(400).json({ error });
            return;
        }

        const todo = await prisma.todo.create({
            data: createTodoDto!
        });

        res.json(todo);
    }

    public async updateTodo(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        const [ error, updateTodoDto ] = UpdateTodoDto.create({...req.body, id});

        if (error) {
            res.status(400).json({ error });
            return;
        }

        const todo = await prisma.todo.findFirst({
            where: { id }
        }); 
        if (!todo) {
            res.status(404).json({ error: `Todo with id ${id} was not found`});
            return;
        }

        const updateTodo = await prisma.todo.update({
            where: { id },
            data: updateTodoDto!.values
        })

        res.json(updateTodo);
    }

    public async deleteTodo(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);

        const todo = await prisma.todo.findFirst({
            where: { id }
        }); 
         
        if (!todo) {
            res.status(404).json({ error: `Todo with id ${id} was not found`});
            return;
        }

        await prisma.todo.delete({
            where: { id }
        })

        res.json(todo);
    }
}