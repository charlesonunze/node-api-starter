import { Application } from 'express';
import { todoRoutes } from '../routes/todo.route';

export const loadRoutes = (app: Application) => {
	app.use('/api', todoRoutes);
};
