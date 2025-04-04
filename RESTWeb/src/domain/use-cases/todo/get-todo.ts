import { TodoRepository } from "../..";
import { TodoEntity } from "../../entities/todo.entity";

export interface GetTodoUseCase {
    execute(id: number): Promise<TodoEntity>;
}

export class GetTodo implements GetTodoUseCase {
    constructor(
        private readonly repository: TodoRepository
    ) { }

    async execute(id: number): Promise<TodoEntity> {
        return await this.repository.findById(id);
    } 
}