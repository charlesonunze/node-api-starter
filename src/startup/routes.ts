import { Application } from 'express';
import { todoRoutes } from '../routes/todo.route';
import { swaggerRoute } from '../routes/docs.route';

export const loadRoutes = (app: Application) => {
	app.use('/api', todoRoutes);

	// Swagger Docs Endpoint
	app.use('/api/docs', swaggerRoute);
};
