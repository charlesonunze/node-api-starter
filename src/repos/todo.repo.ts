import BaseRepo from './base.repo';
import { ITodo, TodoModel } from '../models/todo.model';

class TodoRepo extends BaseRepo<ITodo> {
	constructor() {
		super(TodoModel);
	}
}

export default TodoRepo;
