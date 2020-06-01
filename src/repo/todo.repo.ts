import BaseRepo from './base.repo';
import { TodoModel } from '../models/todo.model';

class TodoRepo extends BaseRepo {
	constructor() {
		super(TodoModel);
	}
}

export default TodoRepo;
