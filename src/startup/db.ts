import mongoose from 'mongoose';
import { DB_URI } from '../config';
import { DatabaseError } from '../utils/errorHandler';
import { logger } from '../utils/main.logger';

const options = {
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
};

export const connectDB = () => {
	mongoose
		.connect(DB_URI, options)
		.then(() => logger.info(`Connected to ${DB_URI} 💃`))
		.catch(() => {
			throw new DatabaseError('Something went wrong 😞');
		});
};
