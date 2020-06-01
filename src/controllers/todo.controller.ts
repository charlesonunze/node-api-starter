import TodoService from '../services/todo.service';
import { sendResponse } from '../utils/response';
import { RequestHandler } from 'express';
import { Todo, QueryParams } from '../@types';

class TodoController {
	private todoService: TodoService;

	constructor() {
		this.todoService = new TodoService();
	}

	getAllTodos: RequestHandler = async (req, res) => {
		const { pageNo, pageSize } = req.query as QueryParams;
		const _pageNo = pageNo ? parseInt(pageNo) : 1;
		const _size = pageSize ? parseInt(pageSize) : 10;

		const options = {
			skip: _size * (_pageNo - 1),
			limit: _size
		};

		const todos = await this.todoService.getAllTodos({}, options);

		sendResponse({
			res,
			message: 'Todos',
			data: { todos }
		});
	};

	getOneTodo: RequestHandler = async (req, res) => {
		const todoId = req.params.id;
		const todo = await this.todoService.getOneTodo({ _id: todoId });

		sendResponse({
			res,
			message: 'Todo',
			data: { todo }
		});
	};

	deleteTodo: RequestHandler = async (req, res) => {
		const todoId = req.params.id;
		const deletedTodo = await this.todoService.deleteTodo({ _id: todoId });

		return sendResponse({
			res,
			message: 'Todo deleted.',
			data: { deletedTodo }
		});
	};

	createTodo: RequestHandler = async (req, res) => {
		const { title } = req.body as Todo;
		const savedTodo = await this.todoService.createTodo({ title });

		return sendResponse({
			res,
			message: 'New todo added.',
			data: { savedTodo }
		});
	};

	editTodo: RequestHandler = async (req, res) => {
		const id = req.params.id;
		const { title } = req.body as Todo;

		const editedTodo = await this.todoService.editAndReturnTodo(
			{ _id: id },
			{ $set: { title } },
			{ new: true }
		);

		return sendResponse({
			res,
			message: 'Todo edited.',
			data: { editedTodo }
		});
	};
}

export default TodoController;
