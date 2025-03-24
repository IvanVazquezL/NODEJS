"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosController = void 0;
const todos = [
    { id: 1, text: 'buy' },
    { id: 2, text: 'sell' }
];
class TodosController {
    constructor() {
    }
    getTodos(req, res) {
        res.json(todos);
    }
    getTodoById(req, res) {
        const id = req.params.id;
        res.json(todos.find(todo => todo.id === Number(id)));
    }
}
exports.TodosController = TodosController;
