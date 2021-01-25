import express from 'express';
import { PORT } from './config';
import { logger } from './utils/main.logger';
import { connectDB } from './startup/db';
import { loadRoutes } from './startup/routes';
import { loadMiddleware } from './startup/middleware';
import { NotFoundErrorHandler, ServerErrorHandler } from './utils/errorHandler';

const app = express();

// Load Middleware
loadMiddleware(app);
loadRoutes(app);
connectDB();

// Handle Errors
app.use(NotFoundErrorHandler);
app.use(ServerErrorHandler);

export default app.listen(PORT, (e: Error) => {
	if (e) throw new Error(e.message);
	logger.info(`Speak Lord! 👐, your server is listening on port: ${PORT}`);
});
