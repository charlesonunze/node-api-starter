import { Application } from 'express';
import { todoRoutes } from '../routes/todo.route';
import { swaggerRoute } from '../routes/docs.route';

export const loadRoutes = (app: Application) => {
	// Root Route
	app.get('/', (req, res) => {
		res.send('Hi there!');
	});

	// API Routes
	app.use('/api/v1', todoRoutes);

	// Swagger Docs
	app.use('/api/docs', swaggerRoute);
};
