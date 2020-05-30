import { Response } from 'express';

export interface ResponseParams {
	res: Response;
	message: string;
	data?: Record<string, unknown>;
	statusCode?: number;
}
