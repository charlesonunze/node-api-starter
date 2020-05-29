import express from 'express';
import { PORT } from './config';
import { json } from 'body-parser';
import { rootRoute } from './routes/rootRoute';
import { registerRequestLogger } from './utils/http.logger';

const app = express();

registerRequestLogger(app);

app.use(json());

app.use(rootRoute);

app.listen(PORT, (error) => {
	if (error) throw new Error(error);
	console.log(`Speak Lord! 👐, your server is listening on port: ${PORT}`);
});
