import express from 'express';
import { PORT } from './config';
import { json } from 'body-parser';
import { rootRoute } from './routes/rootRoute';
import { registerRequestLogger } from './utils/http.logger';
import { logger } from './utils/main.logger';
import { ErrorHandler } from './utils/errorHandler';

const app = express();

registerRequestLogger(app);

app.use(json());

app.use(rootRoute);

app.use(ErrorHandler);

app.listen(PORT, (error) => {
	if (error) throw new Error(error);
	logger.info(`Speak Lord! 👐, your server is listening on port: ${PORT}`);
});
