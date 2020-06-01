import { Router } from 'express';
import TodoController from '../controllers/todo.controller';
import catchAsyncErrors from '../middlewares/catch-async-errors';

const router = Router();
const todoController = new TodoController();

router.get('/todos', catchAsyncErrors(todoController.getAllTodos));
router.get('/todos/:id', catchAsyncErrors(todoController.getOneTodo));
router.delete('/todos/:id', catchAsyncErrors(todoController.deleteTodo));
router.post('/create-todo', catchAsyncErrors(todoController.createTodo));
router.patch('/edit-todo/:id', catchAsyncErrors(todoController.editTodo));

export { router as todoRoutes };
