import { Router } from "express";
import { TodosController } from "./controller.ddd";
import { TodoDatasourceImpl } from "../../infrastructure/datasource/todo.datasource.impl";
import { TodoRepositoryImpl } from "../../infrastructure/repositories/todo.repository.impl";

export class TodoRoutes {
    static get routes(): Router {
        const router = Router();

        const datasource = new TodoDatasourceImpl();
        const todoRepository = new TodoRepositoryImpl(datasource);
        const todoController = new TodosController(todoRepository);
        
        router.get('/', async (req, res, next) => {
            try {
                await todoController.getTodos(req, res);
            } catch (error) {
                next(error);
            }
        });
        router.get('/:id', todoController.getTodoById);

        router.post('/', todoController.createTodo);
        router.put('/:id', todoController.updateTodo);
        router.delete('/:id', todoController.deleteTodo);

        return router;
    }
}