import { RequestHandler, Request, Response, NextFunction } from 'express';

export default function (handler: RequestHandler) {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await handler(req, res, next);
		} catch (ex) {
			next(ex);
		}
	};
}
