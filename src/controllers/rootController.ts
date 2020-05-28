import { RequestHandler } from 'express';

export const sayHello: RequestHandler = async (req, res) => {
	console.log('got here!!!!');
	return res.json({ message: 'Hello there 😈' });
};
