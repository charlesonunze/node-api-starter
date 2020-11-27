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

	async editTodo(id: string, data: anyObject) {
		return await this.todoRepo.findOneAndUpdate(
			{ _id: id },
			{ $set: data },
			{ new: true }
		);
	}

	async deleteTodo(id: string) {
		return await this.todoRepo.deleteOne({ _id: id });
	}

	async getOneTodo(id: string) {
		return this.todoRepo.findOne({ _id: id });
	}

	async getAllTodos(paginationOptions: anyObject) {
		return this.todoRepo.find({}, paginationOptions);
	}
}

export default TodoService;
