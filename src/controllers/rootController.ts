import { RequestHandler } from 'express';
import { logger } from '../utils/main.logger';
import { sendResponse } from '../utils/response';

export const sayHello: RequestHandler = async (req, res) => {
	logger.info('got here!!!!');
	return sendResponse({
		res,
		message: 'Hello there 😈'
	});
};
