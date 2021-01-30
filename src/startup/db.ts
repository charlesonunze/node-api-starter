import mongoose, { ConnectionOptions } from 'mongoose';
import { DB_URI } from '../config';
import { DatabaseError } from '../utils/errorHandler';
import { logger } from '../utils/main.logger';

const options: ConnectionOptions = {
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
};

export const connectDB = () => {
	mongoose
		.connect(DB_URI, options)
		.then(() => logger.info(`Connected to ${DB_URI} 💃`))
		.catch((e: Error) => {
			throw new DatabaseError(e.message);
		});
};

export const disconnectDB = () => {
	mongoose.connection
		.close()
		.then(() => logger.info(`Disconnected 💃`))
		.catch((e: Error) => {
			throw new DatabaseError(e.message);
		});
};
