import TodoService from '../services/todo.service';
import { sendResponse } from '../utils/response';
import { RequestHandler } from 'express';
import { QueryParams } from '../@types';
import { handleValidationError, validateTodoInput } from '../validators';

class TodoController {
	private todoService: TodoService;

	constructor() {
		this.todoService = new TodoService();
	}

	getAllTodos: RequestHandler = async (req, res) => {
		const { pageNo, pageSize } = req.query as QueryParams;
		const _pageNo = pageNo ? parseInt(pageNo) : 1;
		const _size = pageSize ? parseInt(pageSize) : 10;

		const paginationOptions = {
			skip: _size * (_pageNo - 1),
			limit: _size
		};

		const todos = await this.todoService.getAllTodos(paginationOptions);

		sendResponse({
			res,
			message: 'List of todos',
			data: { todos }
		});
	};

	getOneTodo: RequestHandler = async (req, res) => {
		const todoId = req.params.id;
		const todo = await this.todoService.getOneTodo(todoId);

		sendResponse({
			res,
			message: `Returned todo with id:${todoId}`,
			data: { todo }
		});
	};

	deleteTodo: RequestHandler = async (req, res) => {
		const todoId = req.params.id;
		const todo = await this.todoService.deleteTodo(todoId);

		return sendResponse({
			res,
			message: `Todo with id:${todoId} deleted`,
			data: { todo }
		});
	};

	createTodo: RequestHandler = async (req, res) => {
		const { error, value } = validateTodoInput(req.body);

		if (error) return handleValidationError(error);

		const todo = await this.todoService.createTodo(value);

		return sendResponse({
			res,
			message: 'New todo added',
			data: { todo }
		});
	};

	editTodo: RequestHandler = async (req, res) => {
		const { error, value } = validateTodoInput(req.body);

		if (error) return handleValidationError(error);

		const todoId = req.params.id;

		const todo = await this.todoService.editTodo(todoId, value);

		return sendResponse({
			res,
			message: `Edited todo with id:${todoId}`,
			data: { todo }
		});
	};
}

export default TodoController;
