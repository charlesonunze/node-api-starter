import express from 'express';
import { PORT } from './config';
import { logger } from './utils/main.logger';
import { ErrorHandler } from './utils/errorHandler';
import { connectDB } from './startup/db';
import { loadRoutes } from './startup/routes';
import { loadMiddlewares } from './startup/middlewares';

const app = express();

loadMiddlewares(app);
loadRoutes(app);
connectDB();

app.use(ErrorHandler);

app.listen(PORT, (error) => {
	if (error) throw new Error(error);
	logger.info(`Speak Lord! 👐, your server is listening on port: ${PORT}`);
});
