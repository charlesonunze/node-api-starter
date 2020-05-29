import { RequestHandler } from 'express';
import { logger } from '../utils/main.logger';

export const sayHello: RequestHandler = async (req, res) => {
	logger.info('got here!!!!');
	return res.json({ message: 'Hello there 😈' });
};
