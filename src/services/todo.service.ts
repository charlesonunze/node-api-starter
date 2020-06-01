import TodoRepo from '../repos/todo.repo';
import { anyObject } from '../@types';

class TodoService {
	private todoRepo: TodoRepo;

	constructor() {
		this.todoRepo = new TodoRepo();
	}

	async createTodo(todo: anyObject) {
		return await this.todoRepo.save(todo);
	}

	async editTodo(findQuery: anyObject, updateQuery: anyObject) {
		return await this.todoRepo.updateOne(findQuery, updateQuery);
	}

	async editAndReturnTodo(
		findQuery: anyObject,
		updateQuery: anyObject,
		options: anyObject
	) {
		return await this.todoRepo.findOneAndUpdate(
			findQuery,
			updateQuery,
			options
		);
	}

	async deleteTodo(findQuery: anyObject) {
		return await this.todoRepo.deleteOne(findQuery);
	}

	async getOneTodo(findQuery: anyObject) {
		return this.todoRepo.findOne(findQuery);
	}

	async getAllTodos(findQuery: anyObject, options: anyObject) {
		return this.todoRepo.find(findQuery, options);
	}
}

export default TodoService;
