import { expect } from 'chai';
import request from 'supertest';

import app from '../../src/app';
import { apiEndpoint } from './constants';
import TodoRepo from '../../src/repos/todo.repo';

describe('TODOS ENDPOINTS', () => {
	afterEach((done) => {
		todoRepo.deleteMany({});
		app.close();
		done();
	});

	const todoRepo = new TodoRepo();

	describe('GET /api/v1/todos - getAllTodos', () => {
		it('should return all created todos`', async () => {
			const _todos = [
				{ title: 'Write tests' },
				{ title: 'Learn Golang' },
				{ title: 'Travel the world' }
			];

			await todoRepo.insertMany(_todos);

			const res = await request(app).get(apiEndpoint + '/todos');
			const { todos } = res.body.data;

			expect(res.status).to.equal(200);
			expect(res.body.success).to.equal(true);
			expect(todos.length).to.equal(3);
		});
	});

	describe('GET /api/v1/todos/:id - getOneTodo', () => {
		it('should return a single todo', async () => {
			await todoRepo.save({ title: 'A single todo' });

			const _todo = await todoRepo.findOne({ title: 'A single todo' });
			const res = await request(app).get(apiEndpoint + `/todos/${_todo!._id}`);
			const { todo } = res.body.data;

			expect(res.status).to.equal(200);
			expect(res.body.success).to.equal(true);
			expect(todo.title).to.equal('A single todo');
		});
	});

	describe('DELETE /api/v1/todos/:id - deleteTodo', () => {
		it('should delete a single todo', async () => {
			await todoRepo.save({ title: 'To be deleted' });

			const _todo = await todoRepo.findOne({ title: 'To be deleted' });
			const res = await request(app).delete(
				apiEndpoint + `/todos/${_todo!._id}`
			);
			const { todo } = res.body.data;

			expect(res.status).to.equal(200);
			expect(res.body.success).to.equal(true);

			expect(todo.n).to.equal(1);
			expect(todo.ok).to.equal(1);
			expect(todo.deletedCount).to.equal(1);
		});
	});

	describe('POST /api/v1/create-todo - createTodo', () => {
		it('should create a single todo', async () => {
			const res = await request(app)
				.post(apiEndpoint + '/create-todo')
				.send({ title: 'A new task' });

			const { todo } = res.body.data;

			expect(res.status).to.equal(200);
			expect(res.body.success).to.equal(true);
			expect(todo.title).to.equal('A new task');
		});
	});

	describe('PATCH /api/v1/edit-todo/:id - editTodo', () => {
		it('should edit a single todo', async () => {
			const _todo = await todoRepo.save({ title: 'To be edited' });

			const res = await request(app)
				.patch(apiEndpoint + `/edit-todo/${_todo._id}`)
				.send({ title: 'To be edited!' });

			const { todo } = res.body.data;

			expect(res.status).to.equal(200);
			expect(res.body.success).to.equal(true);
			expect(_todo.id).to.equal(todo._id);
			expect(todo.title).to.equal('To be edited!');
		});
	});
});
