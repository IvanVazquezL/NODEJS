import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";
import { TodoEntity, TodoRepository } from "../../domain";

export class TodosController {
    constructor(
        private readonly todoRepository: TodoRepository
    ) {

    }

    public async getTodos(req: Request, res: Response) {
        const todos = await this.todoRepository.getAll();
        return res.json(todos);
    }

    public async getTodoById(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);

        try {
            const todo = await this.todoRepository.findById(id);
            res.json(todo);
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    public async createTodo(req: Request, res: Response): Promise<void> {
        const [ error, createTodoDto ] = CreateTodoDto.create(req.body);

        if (error) {
            res.status(400).json({ error });
            return;
        }

        const todo = await this.todoRepository.create(createTodoDto!);
        res.json(todo);
    }

    public async updateTodo(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        const [ error, updateTodoDto ] = UpdateTodoDto.create({...req.body, id});

        if (error) {
            res.status(400).json({ error });
            return;
        }

        const updateTodo = await this.todoRepository.updateById(updateTodoDto!);
        res.json(updateTodo);
    }

    public async deleteTodo(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        const deletedTodo = await this.todoRepository.deleteById(id);
        res.json(deletedTodo);
    }
}