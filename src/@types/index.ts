import { Response } from 'express';

export interface ResponseParams {
	res: Response;
	message: string;
	data?: anyObject;
	statusCode?: number;
}

export type anyObject = Record<string, unknown>;

export interface Todo {
	title: string;
	completed?: boolean;
	created?: Date;
}

export interface QueryParams {
	pageNo?: string;
	pageSize?: string;
}
